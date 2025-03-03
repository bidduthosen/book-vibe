import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadCart } from '../../Utility/Utility';

const ListedBooks = () => {

    const allBooksData = useLoaderData();

    useEffect(()=>{
        const storedReadCart = getStoredReadCart();
        const storedReadCartParseInt =storedReadCart.map(id => parseInt(id))
        // console.log(storedReadCartParseInt, allBooksData)
        const readBooks = allBooksData.filter(readBook => storedReadCartParseInt.includes(readBook.bookId))

        console.log(readBooks)
    },[])


    return (
        <div>
            <h1 className='font-bold text-xl mb-5'>Listed Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;