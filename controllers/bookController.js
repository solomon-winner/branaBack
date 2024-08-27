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

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            price: req.body.price,
            availableBooks: req.body.availableBooks,
            language: req.body.language,
            pages: req.body.pages,
            publisher: req.body.publisher,
            year: req.body.year,
            description: req.body.description,
            img: req.body.img,
            isPreOrder: req.body.isPreOrder,
        }
    } catch (error) {
        
    }
};
export const getBooks = (req, res) => {

};
export const updateBook = (req, res) => {};
