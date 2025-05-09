export class bookFavouriteDto {
    constructor(data, type = 'default') {
      const book = data.targetId && typeof data.targetId === 'object' ? data.targetId : data;
  
      this.bookId = book._id || data._id || null;
      this.title = book.title || null;
      this.img = book.img || null;
      this.author = book.author || null;
  
      if (data.collectionType === 'recommended') {
        this.reason = data.reason || null;
      }
      if (data.collectionType === 'wishlist') {
        this.price = data.price || null;
      }
    }
  }
  