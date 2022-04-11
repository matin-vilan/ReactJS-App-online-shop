import React from 'react'
import Main from '../../../components/desktop/Main/Main'
import Header from '../../../components/mobile/Header/Header'
import Divider from '../../../components/global/Divider/Divider';

function Home() {
    return (
        <div>
            <Header />
            <Divider />
            <Main />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
