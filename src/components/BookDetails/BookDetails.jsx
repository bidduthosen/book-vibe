import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { addToStoredRead, addToStoredWishList } from '../../Utility/Utility';

const BookDetails = () => {
    const navigete = useNavigate()
    const { bookId } = useParams()
    const id = parseInt(bookId)
    const datas = useLoaderData();
    const book = datas.find(data => data.bookId === id);

    const handleReadCart = (id) =>{
        addToStoredRead(id)
    }
    const handleWishListCart = (id) =>{
        addToStoredWishList(id)
    }


    const {bookId: currentBookId, image, bookName, review, rating, totalPages } = book;
    return (
        <div className='bg-gray-300 w-10/12 mx-auto p-7 rounded-xl'>
            <div className='p-6 rounded-xl'>
                <img className='h-64' src={image} alt="" />
            </div>
            <div className='space-y-4'>
                <h1 className='font-bold text-2xl '> BookId: {currentBookId}</h1>
                <h1 className='font-bold text-2xl '>{bookName}</h1>
                <p className='text-gray-500'>{review}</p>
                <p className='text-gray-500'>Rattings: {rating}</p>
                <p className='text-gray-500'>Total page: {totalPages}</p>
                <div className='space-x-4 flex justify-end'>
                    <button onClick={() => handleReadCart(bookId)} className='btn btn-outline btn-secondary'>Read</button>
                    <button onClick={()=> handleWishListCart(bookId)} className='btn btn-outline btn-secondary'>wishlist</button>
                </div>
                <button onClick={()=> navigete(-1)} className='btn'>Back {`>`}</button>
            </div>
        </div>
    );
};

export default BookDetails;