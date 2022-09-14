import React from "react";
import logo from './logo.png';
import nerfGun from './NerfGun5.png';

const App = () => {
  return (
    <div className='h-screen'>
      <nav className='bg-gray-100 m-2 rounded-lg drop-shadow-sm border-solid border-2'>
        <div className='w-full  bg-transparent px-10 flex justify-between '>
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
              <a target="_blank" href="https://hotshotpartyrentals.myshopify.com/
              ">Shop</a>
            </li>
            <li className="px-2">
              <a href="">Gallery</a>
            </li>
            <li className="px-2">
              <a href="">Packages</a>
            </li>
            <li className="px-2">
              <a className="rounded-full bg-orange-400 text-white p-3 border-solid border-2 drop-shadow-lg" href="">Reserve Now</a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="w-full rounded-t-2xl bg-gray-100 h-720 sm:h-685 md:h-600 lg:h-510 mt-10">
        {/* Featured*/}
        <div className="flex text-center items-center justify-between p-10">
          <div className="mx-3 min-h-300 w-6/12 bg-white rounded-sm px-8 drop-shadow-sm hover:drop-shadow-lg flex justify-center items-center">
            <div>
              <p className="text-lg">Card Header</p>
              <p className="text-sm">Nulla dolor minim anim commodo proident sunt commodo enim eiusmod officia adipisicing ipsum nulla. Cillum proident duis esse tempor tempor. Ipsum amet elit quis adipisicing et.Nulla dolor minim anim commodo proident sunt commodo enim eiusmod officia adipisicing ipsum nulla.</p>
              <div className='absolute bg-red-500 top-0 right-0 rounded-bl-md p-2 shadow-lg border-solid border-white  border-2 outline-orange-300'>New</div>
            </div>
          </div>
          <div className="mx-3 min-h-300 w-6/12 bg-white rounded-sm px-8 drop-shadow-sm hover:drop-shadow-lg flex justify-center items-center">
            <div>
              Possible Content
              <ol>
                <li>1. Instagram Gallery</li>
                <li>2. Yelp</li>
              </ol>
            </div>
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
      <main>
        <div class="flex h-screen justify-center items-center">
          <div className="flex h-510 w-full bg-slate-300 px-8 p-2">
            <div className="bg-white h-full w-6/12 flex justify-center items-center border-solid border-2 p -2">
              <div className="border-solid border-2 w-full h-full">
                Package Component
              </div>
            </div>
            <div className="flex flex-col w-6/12 h-full justify-center items-center bg-white text-center">
              <div className="w-full mx-2 flex justify-center items-center">
                <div className="w-full h-225 rounded-md bg-gray-200 m-4 flex justify-center items-center">Weapons</div>
              </div>
              <div className=" w-full mx-2 flex justify-center items-center">
                <div className='w-full h-225 rounded-md bg-gray-200 m-4 flex justify-center items-center'>Safety</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )

};

export default App;
