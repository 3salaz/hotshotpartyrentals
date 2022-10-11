import React from 'react'
import { Header, PackagesSection, SafetySection, WeaponsSection } from './components';

const Main = () => {
    return (
        <>
            <Header />
            <main className="flex h-screen justify-center items-center">
                <div className="flex h-510 w-full bg-white px-8 p-2">
                    <div className="bg-white h-full w-6/12 flex justify-center items-center">
                        <PackagesSection />
                    </div>
                    <div className="flex flex-col w-6/12 h-full justify-center items-center bg-white text-center">
                        <WeaponsSection />
                        <SafetySection />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;
