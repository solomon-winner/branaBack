export class bookFavouriteDto {
    constructor({ _id, img, title, price, author, reason }) {
        this.bookId = _id;
        this.img = img;
        this.title = title;
        this.price = price;
        this.author = author;
        this.reason = reason;
    }
}