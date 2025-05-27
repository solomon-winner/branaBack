export class BookDTOForUser {
  constructor({
    _id,
    title = '',
    author = '',
    img = '',
    rating = 0,
    price = 0,
    description = '',
    category = '',
    availableBooks = 0,
    language = '',
    pages = 0,
    publisher = null,
    year = 0,
    isBestSeller = false,
    isTrending = false,
    isOnSale = false,
    isDiscounted = false,
    discount = 0,
    discountedPrice = 0,
    isComingSoon = false,
    isPreOrder = false,
    isSoldOut = false,
    isInCollection = {}
  } = {}) {
    this.id = _id ? _id.toString() : '';
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
    this.isBestSeller = !!isBestSeller;
    this.isTrending = !!isTrending;
    this.isOnSale = !!isOnSale;
    this.isDiscounted = !!isDiscounted;
    this.discount = discount;
    this.discountedPrice = discountedPrice;
    this.isComingSoon = !!isComingSoon;
    this.isPreOrder = !!isPreOrder;
    this.isSoldOut = !!isSoldOut;

    this.isFavourite = !!(isInCollection && isInCollection.isFavourite);
    this.isWishlist = !!(isInCollection && isInCollection.isWishlist);
    this.isSaved = !!(isInCollection && isInCollection.isSaved);
    this.isRecommended = !!(isInCollection && isInCollection.isRecommended);
  }
}
