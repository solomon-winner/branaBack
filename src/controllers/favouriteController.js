import { authorFavouriteDto } from "../DTOS/favouriteDTO/author.dto.js";
import { FavouriteService } from "../services/Favourites/favourites.service.js";
import ResponseHelper from "../utils/responseHelper.js";

export const getFavouriteAuthor = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const favourite = await FavouriteService.getFavouriteAuthor(userId);
        const favouriteDtos = favourite.map((favourite) => new authorFavouriteDto(favourite));
        return ResponseHelper.success(res, 'Favourite author retrieved successfully', favouriteDtos, 200);
    } catch (error) {
        next(error);
    }
}

export const addFavouriteAuthor = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const { authorId } = req.body;
        const favourite = await FavouriteService.addFavouriteAuthor(userId, authorId);
        const favouriteDtos = new authorFavouriteDto(favourite);    
        return ResponseHelper.success(res, 'Favourite author added successfully', favouriteDtos, 201);
    } catch (error) {
        next(error);
    }
}
export const removeFavouriteAuthor = async (req, res, next) => {
try {
    const { userId } = req.params;
    const { authorId } = req.body;
    const favourite = await FavouriteService.removeFavouriteAuthor(userId, authorId);
    return ResponseHelper.success(res, 'Favourite author removed successfully', favourite, 200);
} catch (error) {
    next(error);
}
}

export const getFavouriteBook = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const favourite = await FavouriteService.getFavouriteBook(userId);
        const favouriteDtos = favourite.map((favourite) => new authorFavouriteDto(favourite));
        return ResponseHelper.success(res, 'Favourite book retrieved successfully', favouriteDtos, 200);
    } catch (error) {
        next(error);
    }
}
export const addFavouriteBook = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const { bookId } = req.body;
        const favourite = await FavouriteService.addFavouriteBook(userId, bookId);
        const favouriteDtos = new authorFavouriteDto(favourite);
        return ResponseHelper.success(res, 'Favourite book added successfully', favouriteDtos, 201);
    } catch (error) {
        next(error);
    }
}
export const removeFavouriteBook = async (req, res, next) => {
try {
    const { userId } = req.params;
    const { bookId } = req.body;
    const favourite = await FavouriteService.removeFavouriteBook(userId, bookId);
    return ResponseHelper.success(res, 'Favourite book removed successfully', favourite, 200);

} catch (error) {
    next(error);
}
}

export const getFavouriteCategory = async (req, res, next) => {
    try {
        const { userId } = req.query;

        const favourite = await FavouriteService.getFavouriteCategory(userId);
        const favouriteDtos = favourite.map((favourite) => new authorFavouriteDto(favourite));
        return ResponseHelper.success(res, 'Favourite category retrieved successfully', favouriteDtos, 200);
    } catch (error) {
        next(error);
    }
}
export const addFavouriteCategory = async (req, res, next) => {
try {
    const { userId } = req.body;
    const { categoryId } = req.body;
    const favourite = await FavouriteService.addFavouriteCategory(userId, categoryId);
    const favouriteDtos = new authorFavouriteDto(favourite);
    return ResponseHelper.success(res, 'Favourite category added successfully', favouriteDtos, 201);
} catch (error) {
    next(error);
}
}
export const removeFavouriteCategory = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { categoryId } = req.query;
        console.log("from controler",userId, categoryId);
        const favourite = await FavouriteService.removeFavouriteCategory(userId, categoryId);
        return ResponseHelper.success(res, 'Favourite category removed successfully', favourite, 200);
    } catch (error) {
        next(error);
    }
}