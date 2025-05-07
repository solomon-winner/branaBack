import { User } from "../models/user.js";
import { Shelve } from "../models/shelve.js";
import { Book } from "../models/book.js";
import { ShelveService } from "../services/Shelve/shelve .service.js";
import ResponseHelper from "../utils/responseHelper.js";

export const addShelve = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookId, bookCount, price, to } = req.body;
        !to ? to = 'me' : to
        const shelve = await ShelveService.addShelve({ user: id, book: bookId, bookCount, price, to });
        return ResponseHelper.success(res, 'Book added to your shelve successfully!', shelve, 201);
    } catch (error) {
        next(error);
    }
}
export const removeShelve = async (req, res) => {
    try {
        const { id } = req.params;
        const shelve = await ShelveService.removeFromShelve(id);
        return ResponseHelper.success(res, 'Book removed from your shelve successfully!', shelve, 200);
    } catch (error) {
        next(error);
    }
}

export const removeWholeShelve = async (req, res) => {
    try {
        const { userId } = req.params;
        const shelve = await ShelveService.removeWholeShelve(userId);
        return ResponseHelper.success(res, 'Shelve updated successfully!', shelve, 200);
    } catch (error) {
        next(error);
    }

}
export const PayForShelve = async (req, res) => {
   try {
        const { shelveId } = req.params;
        const shelve = await ShelveService.PayForShelve(shelveId);
        return ResponseHelper.success(res, 'Shelve updated successfully!', shelve, 200);
   } catch (error) {
        next(error);
    }
}