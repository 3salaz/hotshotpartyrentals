import React, {useEffect, useState} from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../lib/firebase-init";
import { siteConfig } from '../data/initial'; 

function HeaderHero() {
  // const [siteData, setSiteData] = useState([]);

  // useEffect(() => {
  //   getSiteData();
  // }, [])

  // useEffect(() => {
  //   console.log(siteData);
  //   console.log(siteData[0]);
  //   siteData.map(page => {
  //     console.log(page.data);
  //     // let homePageData = page.data['Home'];
  //     // let headerImage = homePageData['Header'].featuredImage
  //     // console.log(headerImage);
  //   })
  // },[siteData]
  // )

  // const getSiteData = () => {
  //   const siteDataCollectionRef = collection(db, 'website')
  //   getDocs(siteDataCollectionRef)
  //   .then(response => {
  //     const siteDataMap = response.docs.map(doc => ({
  //       data: doc.data(),
  //       id: doc.id
  //     }))
  //     setSiteData(siteDataMap);
  //   })
  //   .catch(err => console.log(err));
  // }

  let header = siteConfig['home']['sections']['header'];
  return (
    <header className="flex p-4 justify-center items-center py-12 lg:py-28">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center justify-center">
              <div className="relative z-10 inline-block pt-3 lg:pt-0">
                <img
                  src={header.featuredHeaderImg}
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="block px-4 lg:hidden lg:w-1/12"></div>
          
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="pt-6 text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px] text-center">
                {header.headerText || 'some text here'}
              </h1>
              <p className="text-body-color mb-8 text-base text-center items-center">
                {header.headerSubText}
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-3">
                <li>
                  <a
                    href={header.links.buttonLink.link}
                    target="_blank"
                    className="bg-orange-500 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                    {header.links.buttonLink.text}
                  </a>
                </li>
                <li>
                  <a
                    href={header.links.simpleLink.link}
                    target="_blank"
                    className="text-body-color hover:text-orange-500 inline-flex items-center justify-center py-4 px-6 text-center text-base font-normal sm:px-10 lg:px-8 xl:px-10"
                  >
                    <span className="mr-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                        <rect
                          x="6.90906"
                          y="13.3636"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="10.1818"
                          y="6"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    {header.links.simpleLink.text}
                  </a>
                </li>
              </ul>
              <div className="clients pt-16">
                <h6 className="text-body-color mb-2 flex items-center text-xs font-normal">
                  Some Of Our Clients
                  <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                </h6>
                <div className="flex items-center">
                  {header.clientHighlight.map(client => (
                    <div key={client.id} className=''>
                      <img
                        src={client.logoImg}
                        alt={client.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default HeaderHero;
