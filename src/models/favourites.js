import mongoose from 'mongoose';

const favouriteSchema = new mongoose.Schema(
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
      enum: ['Book', 'Author', 'Category', 'savedBooks','recommendedBooks'],
      required: true,
    },
    reason:{
      type: String,
      required: function () {
        return this.targetType === 'recommendedBooks';
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

favouriteSchema.index({ userId: 1, targetId: 1, targetType: 1 }, { unique: true });

export const Favourite = mongoose.model('Favourite', favouriteSchema);
