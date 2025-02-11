import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";







const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl ">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle />
                    Google
                </button>

                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>
            {/* 2nd */}

            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl ">Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-lg' href=""><FaFacebookF className='mr-3' /> <span>Facebook</span></a>
                <a className='p-4 flex text-lg items-center border rounded-lg' href=""><FaXTwitter className='mr-3' /><span>Twitter</span></a>
                <a className='p-4 flex text-lg items-center border rounded-lg' href=""><FaInstagram className='mr-3' /> <span>Instagram</span></a>
            </div>


        </div>

    );
};

export default RightSideNav;