export const addBook = (req, res) => {
    try {
        if (!req.body.title,
            !req.body.author,
            !req.body.category,
            !req.body.price,
            !req.body.availableBooks,
            !req.body.language,
            !req.body.pages,
            !req.body.publisher,
            !req.body.year,
            !req.body.description
            ) {
            return res.status(400).send({
                message: 'Enter all required fields!...'
            })
        }
    } catch (error) {
        
    }
};
export const getBooks = (req, res) => {

};
export const updateBook = (req, res) => {};
