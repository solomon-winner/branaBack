import { CategoryService } from "../services/Category/category.service.js";
import { AddCategoryValidation, UpdateCategoryValidation } from "../validation/category/categoryValidation.js";
import { validateQuery } from "../validation/authentication/validateQuery.js";
import ResponseHelper from "../utils/responseHelper.js";

export const addCategory = [
    AddCategoryValidation,
    async (req, res, next) => {
    try {
        const { name, description } = req.body;
        const category = await CategoryService.createCategory({ name, description });
        return ResponseHelper.success(res, 'Category added successfully!', category, 201);
    } catch (error) {
        next(error);
    }
}];

export const getAllCategory = [
    validateQuery,
    async (req, res, next) => {
    try {
        const { page, limit } = req.query;
        const { categories } = await CategoryService.getAllCategories(page, limit);
        return ResponseHelper.success(res, 'Categories retrieved successfully!', categories, 200);
    } catch (error) {
        next(error);
    }
}];

export const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await CategoryService.getCategoryById(id);
        return ResponseHelper.success(res, 'Category retrieved successfully!', category, 200);
    } catch (error) {
        next(error);
    }
}

export const updateCategory = [
    UpdateCategoryValidation,
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const category = await CategoryService.updateCategory(id, { name, description });
        return ResponseHelper.success(res, 'Category updated successfully!', category, 200);
    } catch (error) {
        next(error);
    }
}];

export const removeCategory =async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await CategoryService.deleteCategory(id);
        return ResponseHelper.success(res, 'Category deleted successfully!', category, 200);
    } catch (error) {
        next(error);
    }
};