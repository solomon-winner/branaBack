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
      required: true,
    },
    targetType: {
      type: String,
      enum: ['book', 'author', 'category'],
      required: true,
    },
  },
  { timestamps: true }
);

favouriteSchema.index({ userId: 1, targetId: 1, targetType: 1 }, { unique: true });

const Favourite = mongoose.model('Favourite', favouriteSchema);

export default Favourite;
