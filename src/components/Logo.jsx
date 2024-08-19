import React from 'react'
import LogoImage from '../assets/Logo.jpeg'
function Logo({width="100%"}) {
  return (
    <img src={LogoImage} style={{width}} alt="Logo Placeholder"/>
  )
}

export default Logo