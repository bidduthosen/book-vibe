import React from 'react';
import './Book.css'
import star from '../../assets/star.gif'



const Book = ({ book }) => {
    const { image, bookName, author, category, rating } = book;
    return (
        <div>
            <div className="card">
                <img src={image} alt="" />
                <div className="card__content space-y-5 flex flex-col py-5">
                    <div className='flex justify-center gap-4'>
                        <button className='btn btn-sm text-green-500'>Young Adult</button>
                        <button className='btn btn-sm text-green-500'>Identity</button>
                    </div>
                    <div className='flex-grow w-2/3 mx-auto space-y-3 border-b-2 border-dashed '>
                        <h1 className='text-2xl font-bold'>{bookName}</h1>
                        <h1 className='font-semibold text-gray-400 text-xl'>By: {author}</h1>
                    </div>
                    <div className='flex justify-between w-2/3 mx-auto'>
                        <p className='font-semibold text-gray-500'>{category}</p>
                        <p className='flex gap-3 font-semibold text-gray-500'><span>{rating}</span> <img className='w-6' src={star} alt="" /></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Book;