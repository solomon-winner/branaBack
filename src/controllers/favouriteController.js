import { FavouriteService } from "../services/Favourites/favourites.service";
import ResponseHelper from "../utils/responseHelper";

export const getFavouriteAuthor = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const {authorId} = req.body;
        const favourite = await FavouriteService.getFavouriteAuthor(userId, authorId);
        return ResponseHelper.success(res, 'Favourite author retrieved successfully', favourite, 200);
    } catch (error) {
        next(error);
    }
}

export const addFavouriteAuthor = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}
export const removeFavouriteAuthor = async (req, res, next) => {
try {
    
} catch (error) {
    next(error);
}
}

export const getFavouriteBook = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}
export const addFavouriteBook = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}
export const removeFavouriteBook = async (req, res, next) => {
try {
    
} catch (error) {
    next(error);
}
}

export const getFavouriteCategory = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}
export const addFavouriteCategory = async (req, res, next) => {
try {
    
} catch (error) {
    next(error);
}
}
export const removeFavouriteCategory = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}