import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='my-10'>
            <h1 className='font-bold text-3xl text-center'>Books {books.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-11'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;