import { User } from "../models/user.js";
import { Shelve } from "../models/shelve.js";
import { Book } from "../models/book.js";

export const addShelve = async (req, res) => {

    try {
        const { id, bookId, bookCount, price, to } = req.body;
        if (!to) {
            to = id;
        }
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({ error: 'User not found!' })
        }

        if (!bookId) {
            return res.status(400).send({ error: 'Book ID is required!' })
        }
        const existingShelve = Shelve.findOne({ user: id, book: bookId });
        if (existingShelve) {
            return res.status(400).send({ error: 'Book already in Shelve!' })
        }
        const ShelveEntry = new Shelve({
            user: id,
            book: bookId,
            bookCount: bookCount,
            to: to,
            price,
        });
        await ShelveEntry.save();
        user.shelve.push(ShelveEntry._id);
        res.status(200).send(ShelveEntry);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}
export const removeShelve = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookId } = req.body;

        const user = await User.findById(id);
        const book = await Book.findById(bookId);

        if (!user) {
           return res.status(400).send({ error: 'user not found' })
        }
        if (!book) {
           return res.status(404).send({ error: 'The book is not in shelve' });
        }
        const Deletedbook = await Shelve.deleteMany({ user: id});


        user.shelve.pull(Deletedbook._id);
        await user.save();
        res.status(200).send({ message: 'Book removed from your shelve successfully!' })
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
export const updateShelve = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookId, bookCount, price, to } = req.body;
        !to ? to = id : to

        const UpdatedData = { bookCount, price, to };

        Object.keys(UpdatedData).forEach(key => {
            if (!UpdatedData[key]) {
                delete UpdatedData[key];
            }
        });

        const user = User.findById(id)
        if (!user) {
            res.status(404).send({ error: 'user not found!' })
        }

        const updatedBook = await Shelve.findOneAndUpdate({ user: id, book: bookId }, { UpdatedData });
        if (!updatedBook) {
            return res.status(404).send({ error: 'Book not found!' })
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
export const PayForShelve = async (req, res) => {
    try {
        const {id, bookId} = req.body;
        const user = User.findById(id);
        const Deletedbook ={}
        if (bookId) {

            Deletedbook = await Shelve.findOneAndDelete({user: id, book: bookId});
            user.shelve.pull(Deletedbook._id);
        } else {
            Shelve.findByIdAndDelete(id);
        }
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
}