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
    const [sort, setSort] = useState('');
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



    const handleSortReadBook = (sortType) =>{
        setSort(sortType)
        const sortWishlist = wishLists.sort((a, b) => b.totalPages -a.totalPages)
        setWishLists(sortWishlist)
    }

    const handleSortWishlistRattings = (sortType) => {
        setSort(sortType)
        const sortReadRatting = readBooks.sort((a, b)=> b.rating -a.rating);
        setReadBooks(sortReadRatting)
    }

    return (
        <div>
            <h1 className='font-bold text-xl mb-5'>Listed Books</h1>
            <div className='text-center mt-5 mb-10'>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">{sort ? `Sort By: ${sort}`: 'Sort By'}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=> handleSortWishlistRattings('rattings')} ><a>Rattings</a></li>
                        <li onClick={()=> handleSortReadBook('No Of Pages')}><a>No of Pages</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList >
                    <Tab>Read Books</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='space-y-5 mt-10'>
                        {
                            readBooks.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='space-y-5 mt-10'>
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