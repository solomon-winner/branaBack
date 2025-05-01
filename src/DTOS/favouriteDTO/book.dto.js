export class bookFavouriteDto {
    constructor(data, type = 'default') {
      const book = data.bookId && typeof data.bookId === 'object' ? data.bookId : data;
  
      this.bookId = book._id || data._id || null;
      this.title = book.title || null;
      this.img = book.img || null;
      this.author = book.author || null;
  
      if (type === 'recommended') {
        this.reason = data.reason || null;
      }
      if (type === 'wishlist') {
        this.price = data.price || null;
      }
    }
  }
  