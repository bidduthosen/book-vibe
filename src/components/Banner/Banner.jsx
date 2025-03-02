import React from 'react';
import bannerBook from '../../assets/banner-book.png';
import bg from '../../assets/bg.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero  min-h-screen" style={{
                backgroundImage: `url(${bg})`
            }}>
                <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                    <img  src={bannerBook} className="max-w-sm rounded-lg" />
                    <div className='space-y-6'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn btn-primary">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;