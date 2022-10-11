import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { MdHelpCenter} from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className='bg-gray-100 m-2 rounded-lg drop-shadow-sm border-solid border-2'>
            <div className='w-full  bg-transparent px-10 flex justify-between'>
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
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
