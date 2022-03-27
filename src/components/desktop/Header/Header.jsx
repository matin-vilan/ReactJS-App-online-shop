import React from 'react'
import BottomMenu from './BottomMenu/BottomMenu'
import SignSearch from './SignSearch/SignSearch'
import TopMenu from './TopMenu/TopMenu'

const Header = () => {
  return (
    <div>
        <TopMenu />
        <SignSearch />
        <BottomMenu />
    </div>
  )
}

export default Header