import { Category } from "../../models/categories";

export const CategoryService = {
     getAllCategories: async(page, limit) => {
            try {
                 const categories = await Category.find({}).select('-__v -createdAt -updatedAt').skip((page - 1) * limit).limit(limit).lean();
                 return categories;
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