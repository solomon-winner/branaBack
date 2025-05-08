import { Category } from "../../models/categories";
import getPagination from "../../utils/getPagination";

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
     getCategoryById: async(id) => {},
     createCategory: async(categoryData) =>{},
     updateCategory: async(id, categoryData) =>{},
     deleteCategory: async(id) =>{},
}