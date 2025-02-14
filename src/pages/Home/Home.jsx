import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <h2 className='text-3xl font-poppins font-bold'>This is Home</h2>


            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2 border'>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news= {aNews}>

                        </NewsCard>)
                    }
                    <h2 className="text-4xl">News Coming soon...</h2>

                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;