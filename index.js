import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import CategoryRoutes from './src/routes/category.js';
import UserRoutes from './src/routes/user.js';
import BookRoutes from './src/routes/book.js';
import BankRoutes from './src/routes/bankAccount.js';
import AuthorRoutes from './src/routes/author.js';
import AuthRoutes from './src/routes/authentication.js';
import AddressRoutes from './src/routes/address.js';
import FavouriteAuthorRoutes from './src/routes/favouriteAuthorRoute.js';
import FavouriteCategoryRoutes from './src/routes/favouriteCategoryRoute.js';
import RecommendedBooksRoutes from './src/routes/recommendedBooksroute.js';
import SavedBooksRoutes from './src/routes/savedBookRoute.js';
import ShelveRoutes from './src/routes/shelveRoute.js';
import WishListRoutes from './src/routes/wishListRoute.js'
import { connectDB } from './src/DBConfig/connectDB.js';
import { specs, swaggerUi } from './src/DBconfig/swaggerConfig.js';
import { errorHandler } from './src/utils/errorHandler.js';

dotenv.config();

const app = express();
const port  = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.get('/',(req,res) => {
    res.send('server is running');
})

app.use('/public', express.static('public'));
app.use('/api/authentication', AuthRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/books', BookRoutes);
app.use('/api/bank', BankRoutes);
app.use('/api/authors', AuthorRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/address', AddressRoutes);
app.use('/api/favouriteauthors', FavouriteAuthorRoutes)
app.use('/api/favouritecategory', FavouriteCategoryRoutes)
app.use('/api/recommendedBooks', RecommendedBooksRoutes)
app.use('/api/savedBooks', SavedBooksRoutes)
app.use('api/shelve',ShelveRoutes)
app.use('api/wishlist', WishListRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(errorHandler);

app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
);