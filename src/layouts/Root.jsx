import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl max-auto font-poppins'>
             <Outlet></Outlet>
        </div>
    );
};

export default Root;