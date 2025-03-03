import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadCart, getStoredWishList } from '../../Utility/Utility';
import ReadBook from '../ReadBook/ReadBook';
import Wishlist from '../WishList/Wishlist';

const ListedBooks = () => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishLists, setWishLists] = useState([]);
    const allBooksData = useLoaderData();

    useEffect(() => {
        const storedReadCart = getStoredReadCart();
        const storedReadCartParseInt = storedReadCart.map(id => parseInt(id))
        const readBooks = allBooksData.filter(readBook => storedReadCartParseInt.includes(readBook.bookId))
        setReadBooks(readBooks)
        
        // stored wishlist
        const storedWishlistCart = getStoredWishList();
        const storedWishlistCartParseInt = storedWishlistCart.map(id => parseInt(id))
        const wishLists = allBooksData.filter(wishList => storedWishlistCartParseInt.includes(wishList.bookId))
        setWishLists(wishLists)
    }, [])





    return (
        <div>
            <h1 className='font-bold text-xl mb-5'>Listed Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='space-y-5'>
                        {
                            readBooks.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='space-y-5'>
                        {
                            wishLists.map(wishList => <Wishlist key={wishList.bookId} wishList={wishList}></Wishlist>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;