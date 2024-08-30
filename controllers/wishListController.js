import User from '../models/userModel.js';
import { WishList } from '../models/wishList.js';

export const addWishList = async (req, res) => {
    try {
        const {id} = req.params;
        const {bookId, bookCount, price, to} = req.body;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({error: 'User not found!'})
        }
        const GiftTo = await User.findById(to);
        if (!GiftTo) {
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
            bookCount,
            price,
            to
        });
        await wishListEntry.save();
        user.wishList.push(wishListEntry._id);
        res.status(200).send(wishListEntry);
    } catch (error) {
        
    }
}
export const removeWishList = async (req, res) => {}
