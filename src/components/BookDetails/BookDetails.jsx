import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    const datas = useLoaderData();
    const book = datas.find(data => data.bookId === id);
    const { image, bookName, author, category, rating,tags } = book;
    return (
        <div>
            <h1>{bookName}</h1>
        </div>
    );
};

export default BookDetails;