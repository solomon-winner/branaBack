import { Category } from "../../models/categories.js";
import getPagination from "../../utils/getPagination.js";

export const CategoryService = {
     getAllCategories: async(page, limit) => {
            try {
                const metaData = await getPagination(page, limit, Category);
                 const categories = await Category.find({}).select('-__v -createdAt -updatedAt').skip((page - 1) * limit).limit(limit).lean();
                 return {metaData, categories};
            } catch (error) {
                 console.error('Error fetching categories:', error);
                 throw new Error('Error fetching categories: ' + error.message);
            }
     },
     getCategoryById: async(id) => {
        try {
            const category = await Category.findById(id).select('-__v -createdAt -updatedAt').lean();
            if (!category) {
                throw new Error('Category not found');
            }
            return category;
        } catch (error) {
            console.error('Error fetching category:', error);
            throw new Error('Error fetching category: ' + error.message);
            
        }
     },
     createCategory: async(categoryData) =>{
        try {
            const newCategory = await Category.create(categoryData);
            return newCategory;
        } catch (error) {
            console.error('Error creating category:', error);
            throw new Error('Error creating category: ' + error.message);
        }
     },
     updateCategory: async(id, categoryData) =>{
        try {
            const updatedCategory = await Category.findByIdAndUpdate(id, categoryData, { new: true }).select('-__v -createdAt -updatedAt').lean();
            if (!updatedCategory) {
                throw new Error('Category not found');
            }
            return updatedCategory;
        } catch (error) {
            console.error('Error updating category:', error);
            throw new Error('Error updating category: ' + error.message);
        }
     },
     deleteCategory: async(id) =>{
        try {
            const deletedCategory = await Category.findByIdAndDelete(id).select('-__v -createdAt -updatedAt').lean();
            if (!deletedCategory) {
                throw new Error('Category not found');
            }
            return deletedCategory;
        } catch (error) {
            console.error('Error deleting category:', error);
            throw new Error('Error deleting category: ' + error.message);
        }
     },
}