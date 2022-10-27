import React from 'react'
import { Greeting, Header, PackagesSection, SafetySection, WeaponsSection, StickyLinks, SelectionGrid } from './components';

const Main = () => {
    return (
        <main>
            <Header />
            <StickyLinks/>
            <Greeting/>
            <SelectionGrid/>
        </main>
    )
}

export default Main;
