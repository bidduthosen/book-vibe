import React from 'react';

const ReadBook = ({readBook}) => {
    const {bookId: currentBookId, image, bookName, author, review, rating, tags } = readBook;
    return (
        <div className='bg-gray-300 border-2 border-gray-400 rounded-xl grid grid-cols-8 gap-4 p-4 md:p-14' >
            <div className='p-6 rounded-xl md:col-span-3'>
                <img className='md:h-72' src={image} alt="" />
            </div>
            <div className='space-y-4 md:col-span-5'>
                <h1 className='font-bold text-2xl '> BookId: {currentBookId}</h1>
                <h1 className='font-bold text-2xl '>{bookName}</h1>
                <p className='text-gray-500'>{review}</p>
            </div>
        </div>
    );
};

export default ReadBook;