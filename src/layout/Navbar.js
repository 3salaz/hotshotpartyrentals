import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav className='p-2 rounded-lg drop-shadow-md'>
            <div className='w-full hidden bg-white px-10 justify-between md:flex'>
                
                <a href="/" className='flex flex-row justify-center items-center'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-80 rounded-lg p-1'
                    />
                    HotShotPartyRentals
                </a>

                <ul className="flex justify-space-evenly items-center">
                    <li className="px-2">
                        <Link className='flex justify-center items-center' to="/faq">FAQ</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/packages">Packages</Link>
                    </li>
                    <li className="px-2">
                        <a className="rounded-full bg-orange-400 text-white p-3 border-solid border-2 drop-shadow-lg" href="https://hotshotpartyrentals.myshopify.com/" target="_blank">Shop Now</a>
                    </li>
                </ul>

            </div>

            <div className='w-full md:hidden bg-white px-2 justify-between items-center flex'>
                
                <a href="/" className='flex flex-row justify-center items-center'>
                    <img
                        src="https://via.placeholder.com/500x250"
                        alt='hot-shot-party-rentals-logo'
                        className='w-28 rounded-lg p-1'
                    />
                </a>
                <div className='bg-white p-2 flex justify-center items-center rounded-lg'>
                    <HiMenu className='text-2xl'/>
                </div>
                

                {/* <ul className="flex justify-space-evenly items-center">
                    <li className="px-2">
                        <Link className='flex justify-center items-center' to="/faq"><MdHelpCenter className='text-orange-400 rounded-lg' />Q's</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/packages">Packages</Link>
                    </li>
                    <li className="px-2">
                        <a className="rounded-full bg-orange-400 text-white p-3 border-solid border-2 drop-shadow-lg" href="https://hotshotpartyrentals.myshopify.com/" target="_blank">Shop Now</a>
                    </li>
                </ul> */}
                
            </div>
        </nav>
    )
}

export default Navbar;
