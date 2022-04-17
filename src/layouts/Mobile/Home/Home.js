import React from 'react'
import Main from '../../../components/desktop/Main/Main'
import Header from '../../../components/mobile/Header/Header'
import Divider from '../../../components/global/Divider/Divider';
import Footer from '../../../components/desktop/Footer/Footer';
import StickyFooter from '../../../components/mobile/StickyFooter/StickyFooter';

function Home() {
    return (
        <div>
            <Header />
            <Divider />
            <Main />
            <Footer />
            <StickyFooter />
        </div>
    )
}

export default Home
