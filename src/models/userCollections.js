import mongoose from 'mongoose';

const UserCollectionsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'targetType',
      required: true,
    },
    targetType: {
      type: String,
      enum: ['Book', 'Author', 'Category'],
      required: true,
    },
    collectionType: {
      type: String,
      enum: ['favourite', 'saved', 'recommended', 'wishlist'],
      required: true,
    },
    price: {
      type: Number,
      required: function () {
        return this.collectionType === 'wishlist';
      },
    },
    reason: {
      type: String,
      required: function () {
        return this.collectionType === 'recommended';
      },
    },
  },
  { timestamps: true }
);

UserCollectionsSchema.index(
  { userId: 1, targetId: 1, targetType: 1, collectionType: 1 },
  { unique: true }
);

export const UserCollections = mongoose.model('UserCollections', UserCollectionsSchema);
