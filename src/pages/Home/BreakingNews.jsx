import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const BreakingNews = () => {
    return (
        <div>
            <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                Breaking News
            </button> 
          
            <Marquee pauseOnHover={true} speed={100}>
                <Link className='mr-12' to="/">
                I can be a React component, multiple React components.....
                </Link>
                <Link className='mr-12' to="/">
                I can be a React component, multiple React components.....
                </Link>
                <Link className='mr-12' to="/">
                I can be a React component, multiple React components.....
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;