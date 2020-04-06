import React from 'react'
import MainMenu from '../navigation/MainMenu'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://ed.team/static/images/logo-premium.svg" alt="edlogo"/>
      </div>
      <MainMenu />
    </header>
  )
}

export default Header
