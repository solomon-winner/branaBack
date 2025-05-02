const getPagination = async (page = 1, limit = 10, model, filter = {}) => {
    page = Number(page) < 1 ? 1 : Number(page);
    limit = Number(limit) < 1 ? 10 : Number(limit);
    
    const totalItems = await model.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / limit);
    return {
        totalItems,
        perPage: limit,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        totalPages,
        currentPage: page,
    };
}
export default getPagination;