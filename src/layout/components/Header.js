import React from 'react'
import nerfGun from '../../NerfGun5.png';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'

const Header = () => {
    return (
        <header className="w-full rounded-t-2xl bg-gray-100 h-720 sm:h-685 md:h-600 lg:h-510 mt-10">
            <div className="flex text-center items-center justify-between p-10">
                <div className="mx-3 min-h-300 w-6/12 bg-white rounded-sm px-8 drop-shadow-sm hover:drop-shadow-lg flex justify-center items-center">
                    <div>
                        <p className="text-lg">Card Header</p>
                        <p className="text-sm">Nulla dolor minim anim commodo proident sunt commodo enim eiusmod officia adipisicing ipsum nulla. Cillum proident duis esse tempor tempor. Ipsum amet elit quis adipisicing et.Nulla dolor minim anim commodo proident sunt commodo enim eiusmod officia adipisicing ipsum nulla.</p>
                        <div className='absolute bg-red-500 top-0 right-0 rounded-bl-md p-2 shadow-lg border-solid  border-2 outline-orange-300 text-white text-small'>Featured</div>
                    </div>
                </div>
                <div className="mx-3 min-h-300 w-6/12 bg-transparent rounded-sm px-8 drop-shadow-sm hover:drop-shadow-lg flex justify-center items-center">
                    <ul className='flex justify-evenly gap-3'>
                        <li className="white p-4 rounded-full shadow-lg bg-red-200 "><BsInstagram className='text-5xl text-white p-1'/>
                        </li>
                        <li className="bg-blue-500 p-4 rounded-full shadow-lg  w-320"><BsFacebook className='text-5xl text-white p-1'/></li>
                        <li className="bg-red-600 p-4 rounded-full shadow-lg  w-520"><BsYoutube className='text-5xl text-white p-1'/></li>
                    </ul>
                </div>
            </div>
            <div className="flex place-content-center">
                <ul className="flex flex-col">
                    <li className="p-1">
                        <button className='rounded-md text-white drop-shadow-lg bg-orange-400 p-2 min-w-[150px]'>Reserve Now</button>
                    </li>
                    <li className="p-1">
                        <button className='rounded-md text-white drop-shadow-lg bg-green-400 p-2 min-w-[150px]'>Schedule</button>
                    </li>
                </ul>
            </div>
            <div className="relative">
                <div className="absolute top--12 left-14">
                    <img className='w-48' src={nerfGun} alt="nerf gun" />
                </div>
                <div className="absolute top--24 left-36">
                    <img className='w-36' src={nerfGun} alt="nerf gun" />
                </div>
                <div className="absolute top--12 right-14">
                    <img className='flip w-48' src={nerfGun} alt="nerf gun" />
                </div>
                <div className="absolute top--24 right-36">
                    <img className='flip w-36 transform-scaleX(-1);' src={nerfGun} alt="nerf gun" />
                </div>
            </div>
        </header>
    )
}

export default Header;
