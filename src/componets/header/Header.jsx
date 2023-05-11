import React from 'react'
import "./header.css"
import Slider from '../slider/Slider'
import { ImageData } from '../slider/data'

function Header() {
  return (
<>

<Slider  Data={ImageData} timer={2000}/>

</>
    )
}

export default Header