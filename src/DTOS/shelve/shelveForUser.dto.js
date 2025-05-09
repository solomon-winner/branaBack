export class ShelveForUserDto {
    constructor(_id, book, bookCount, price, to, isPaied) {
        this.shelveId = _id;
        this.bookId = book._id;
        this.title = book.title;
        this.img = book.img;
        this.author = book.author;
        this.bookCount = bookCount;
        this.price = price;
        this.to = to;
        this.isPaied = isPaied;
    }
}