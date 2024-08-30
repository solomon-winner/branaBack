import User from '../models/userModel.js';
import { WishList } from '../models/wishList.js';

export const addWishList = async (req, res) => {
    try {
        const {id} = req.params;
        const {bookId, price} = req.body;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({error: 'User not found!'})
        }

        if (!bookId) {
            return res.status(400).send({error: 'Book ID is required!'})
        }
        const existingWishList =WishList.findOne({user: id, book: bookId});
        if (existingWishList) {
            return res.status(400).send({error: 'Book already in wishList!'})
        }
        const wishListEntry = new WishList({
            user: id,
            book: bookId,
            price,
        });
        await wishListEntry.save();
        user.wishList.push(wishListEntry._id);
        res.status(200).send(wishListEntry);
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}
export const removeWishList = async (req, res) => {
    try {
        const {id} = req.params;
        const {bookId} = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send({error:'User not found!'});
        }
        const wishListEntry = await WishList.findOneAndDelete({user:id, book: bookId});
        if(!wishListEntry) {
            return res.status(404).send({error: 'Book not found in wishList!'})
        }
        user.wishList.pull(wishListEntry._id);
        await user.save();
        res.status(200).send({message: 'Book removed from wishList!'});
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}
