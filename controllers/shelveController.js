import { User } from "../models/user.js";
import { Shelve } from "../models/shelve.js";

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

        if (!user) {
            res.status(400).send({ error: 'user not found' })
        }

        const Deletedbook = await Shelve.findOneAndDelete({ user: id, book: bookId });
       
        if (!book) {
            res.status(400).send({ error: 'The book is not in shelve' });
        }
        User.shelve.pull(Deletedbook._id);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
export const updateShelve = async (req, res) => { }
export const PayForShelve = async (req, res) => { }