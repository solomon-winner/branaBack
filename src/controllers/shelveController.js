import { ShelveService } from "../services/Shelve/shelve .service.js";
import ResponseHelper from "../utils/responseHelper.js";

export const addShelve = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { bookId, to } = req.query;
        const { bookCount } = req.body;
        
        const shelve = await ShelveService.addShelve({ user: id, book: bookId, bookCount, to });
        return ResponseHelper.success(res, 'Book added to your shelve successfully!', shelve, 201);
    } catch (error) {
        next(error);
    }
}
export const getShelves = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const shelves = await ShelveService.getShelves(userId);
        return ResponseHelper.success(res, 'Shelves retrieved successfully!', shelves, 200);
    } catch (error) {
        next(error);
    }
}
export const removeABookFromShelve = async (req, res, next) => {
    try {
        const { shelveId } = req.params;
        const shelve = await ShelveService.removeFromShelve(shelveId);
        return ResponseHelper.success(res, 'Book removed from your shelve successfully!', shelve, 200);
    } catch (error) {
        next(error);
    }
}

export const removeWholeShelve = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const shelve = await ShelveService.removeWholeShelve(userId);
        return ResponseHelper.success(res, 'Shelve updated successfully!', shelve, 200);
    } catch (error) {
        next(error);
    }

}
export const PayForShelve = async (req, res, next) => {
   try {
        const { shelveId } = req.params;
        const shelve = await ShelveService.PayForShelve(shelveId);
        return ResponseHelper.success(res, 'Shelve updated successfully!', shelve, 200);
   } catch (error) {
        next(error);
    }
}

export const payForAllOnce = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const shelve = await ShelveService.payForAllOnce(userId);
        return ResponseHelper.success(res, 'Shelve updated successfully!', shelve, 200);
    } catch (error) {
        next(error);
    }
}