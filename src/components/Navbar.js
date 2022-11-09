import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav className=' drop-shadow-md p-2'>
            <div className='w-full hidden bg-orange-500 px-10 justify-between md:flex rounded-lg py-4'>
                <a href="/" className='flex flex-row justify-center items-center'>
                    <img
                        src="https://via.placeholder.com/500x250"
                        alt='hot-shot-party-rentals-logo'
                        className='w-28 rounded-lg p-1'
                    />
                    <div className='text-white'>
                        HotShotPartyRentals
                    </div>
                    
                </a>

                <ul className="flex justify-space-evenly items-center text-white font-bold gap-4 text-lg">
                    <li className=" hover:border-b-white hover:border-b-2">
                        <Link className='flex justify-center items-center' to="/">Home</Link>
                    </li>
                    <li className=" hover:border-b-white hover:border-b-2">
                        <Link className='flex justify-center items-center' to="/faq">FAQ</Link>
                    </li>
                    <li className=" hover:border-b-white hover:border-b-2">
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className=" hover:border-b-white hover:border-b-2">
                        <Link to="/packages">Packages</Link>
                    </li>
                    <li className="">
                        <a className="rounded-lg bg-white text-orange-400 p-3 drop-shadow-lg" href="https://hotshotpartyrentals.myshopify.com/" target="_blank">Shop</a>
                    </li>
                </ul>

            </div>

            <div className='w-full md:hidden bg-orange-500 px-2 justify-between items-center flex rounded-sm'> 
                <a href="/" className='flex flex-row justify-center items-center'>
                    <img
                        src="https://via.placeholder.com/500x250"
                        alt='hot-shot-party-rentals-logo'
                        className='w-28 rounded-lg p-1'
                    />
                </a>
                <div className='bg-white p-2 flex justify-center items-center rounded-sm'>
                    <HiMenu className='text-2xl text-orange-500'/>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
