import React from 'react';
import './Book.css'
import star from '../../assets/star.gif'
import { Link } from 'react-router-dom';



const Book = ({ book }) => {
    const {bookId, image, bookName, author, category, rating,tags } = book;
    return (
        <div>
            <div className="card">
                <img src={image} alt="" />
                <div className="card__content space-y-3 flex flex-col py-5">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((teg, idx) => <button key={idx} className='btn btn-sm text-green-500'>{teg}</button>)
                        }
                    </div>
                    <div className='flex-grow w-2/3 mx-auto space-y-3 border-b-2 border-dashed '>
                        <h1 className='text-2xl font-bold'>{bookName}</h1>
                        <h1 className='font-semibold text-gray-400 text-xl'>By: {author}</h1>
                    </div>
                    <div className='flex flex-col md:flex-row gap-3  justify-between w-2/3 mx-auto '>
                        <p className='font-semibold text-gray-500'>{category}</p>
                        <p className='flex gap-3 font-semibold text-gray-500'><span>{rating}</span> <img className='w-6' src={star} alt="" /></p>
                        <button><Link to={`/books/${bookId}`} className='font-semibold text-green-500 underline'> Details</Link></button>
                        

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Book;