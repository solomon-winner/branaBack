import { Book } from "../../models/book.js";
import { Shelve } from "../../models/shelve.js";
import { ShelveForUserDto } from "../../DTOS/shelve/shelveForUser.dto.js";

export const ShelveService = {
    addShelve: async (shelveData) => {
        try {
            const book = await Book.findById(shelveData.book).select("title img author price availableBooks").lean();
    
            if (!book) {
                throw new Error('Book not found');
            }
    
            if (typeof shelveData.bookCount !== "number") {
                throw new Error('Invalid book count: must be a number');
            }
    
            if (book.availableBooks < shelveData.bookCount) {
                throw new Error('Not enough books available');
            }
    
            shelveData.price = book.price;
    
            const shelve = new Shelve(shelveData);
            await shelve.save();
            await shelve.populate("book", "title img author price");
            return new ShelveForUserDto(shelve);
        } catch (error) {
            console.error('Error adding shelve:', error);
            throw new Error('Error adding shelve: ' + error.message);
        }
    },
    

    getShelves: async (userId) => {
        try {
            const shelves = await Shelve.find({ user: userId }).populate('book','title img author price').select('-__v -createdAt -updatedAt');
            if (!shelves) {
                throw new Error('Shelves not found');
            }
            return shelves.map((shelve) => new ShelveForUserDto(shelve));
        } catch (error) {
            console.error('Error fetching shelves:', error);
            throw new Error('Error fetching shelves: ' + error.message);
        }
    },
    removeFromShelve: async (shelveId) => {
        try {
            const shelve = await Shelve.findByIdAndDelete(shelveId);
            if (!shelve) {
                throw new Error('Shelve not found');
            }
            return new ShelveForUserDto(shelve);
        } catch (error) {
            console.error('Error removing from shelve:', error);
            throw new Error('Error removing from shelve: ' + error.message);
        }
    },
    removeWholeShelve: async (userId) => {
    try {
        const result = await Shelve.deleteMany({ user: userId });

        if (result.deletedCount === 0) {
            throw new Error('No shelves found to delete');
        }

        return { deletedCount: result.deletedCount };
    } catch (error) {
        console.error('Error removing from shelve:', error);
        throw new Error('Error removing from shelve: ' + error.message);
    }
},
    PayForShelve: async (shelveId) => {
        try {
            const shelve = await Shelve.findByIdAndUpdate(shelveId, { isPaied: true }, { new: true });
            if (!shelve) {
                throw new Error('Shelve not found');
            }
            return new ShelveForUserDto(shelve);
        }
        catch (error) {
            console.error('Error paying for shelve:', error);
            throw new Error('Error paying for shelve: ' + error.message);
        }
    },

payForAllOnce: async (userId) => {
    try {
        await Shelve.updateMany({ user: userId }, { isPaied: true });

        const updatedShelves = await Shelve.find({ user: userId }).populate("book", "title author img price").lean();

        return updatedShelves.map(shelve => new ShelveForUserDto(shelve));
    } catch (error) {
        console.error('Error paying for shelve:', error);
        throw new Error('Error paying for shelve: ' + error.message);
    }
}

}

