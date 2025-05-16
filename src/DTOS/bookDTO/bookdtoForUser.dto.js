export class BookDTOForUser {
    constructor({ _id, title, author, img, rating, price, description, category, availableBooks, language, pages, publisher, year, isBestSeller, isTrending, isOnSale, isDiscounted, discount, discountedPrice, isComingSoon, isPreOrder, isSoldOut ,isInCollection = {}}) {
        this.id = _id;
        this.title = title;
        this.author = author;
        this.img = img;
        this.rating = rating;
        this.price = price;
        this.description = description;
        this.category = category;
        this.availableBooks = availableBooks;
        this.language = language;
        this.pages = pages;
        this.publisher = publisher;
        this.year = year;
        this.isBestSeller = isBestSeller;
        this.isTrending = isTrending;
        this.isOnSale = isOnSale;
        this.isDiscounted = isDiscounted;
        this.discount = discount;
        this.discountedPrice = discountedPrice;
        this.isComingSoon = isComingSoon;
        this.isPreOrder = isPreOrder;
        this.isSoldOut = isSoldOut;
        this.isFavourite= !!isInCollection.isFavourite;
        this.isWishlist= !!isInCollection.isWishlist;
        this.isSaved= !!isInCollection.isSaved;
        this.isRecommended= !!isInCollection.isRecommended;
    }
}