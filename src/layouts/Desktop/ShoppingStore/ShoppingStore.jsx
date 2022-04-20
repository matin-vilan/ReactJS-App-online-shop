import React from 'react'
import Footer from '../../../components/desktop/Footer/Footer'
import Header from '../../../components/desktop/Header/Header'
import SideBarStore from './SideBarStore/SideBarStore';
import MainStore from './MainStore/MainStore';

const ShoppingStore = () => {
  return (
    <div className='shoppingStore' style={{direction:"rtl"}}>
        <Header />
        <SideBarStore />
        <MainStore />
        <Footer />
    </div>
  )
}

export default ShoppingStore