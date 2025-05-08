import { Book } from "../../models/book.js";
import { Shelve } from "../../models/shelve.js";

export const ShelveService = {
    addShelve: async (shelveData) => {
        try {
            const book = await Book.findById(shelveData.bookId).select("price").lean();
            if (!book) {
                throw new Error('Book not found');
            }
            shelveData.price = book.price;
            const shelve = new Shelve(shelveData);        
            await shelve.save();
            return new ShelveDTOForUser(shelve);
        } catch (error) {
            console.error('Error adding shelve:', error);
            throw new Error('Error adding shelve: ' + error.message);
        }
    },

    getShelves: async (userId) => {
        try {
            const shelves = await Shelve.find({ user: userId }).populate('book').select('-__v -createdAt -updatedAt');
            if (!shelves) {
                throw new Error('Shelves not found');
            }
            return shelves.map((shelve) => new ShelveDTOForUser(shelve));
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
            return new ShelveDTOForUser(shelve);
        } catch (error) {
            console.error('Error removing from shelve:', error);
            throw new Error('Error removing from shelve: ' + error.message);
        }
    },
    removeWholeShelve: async (userId) => {
        try {
            const shelves = await Shelve.deleteMany({ user: userId });
            if (!shelves) {
                throw new Error('Shelve not found');
            }
            return shelves.map((shelve) => new ShelveDTOForUser(shelve));
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
            return new ShelveDTOForUser(shelve);
        }
        catch (error) {
            console.error('Error paying for shelve:', error);
            throw new Error('Error paying for shelve: ' + error.message);
        }
    }
}

