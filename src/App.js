import React from 'react'
import Navbar from './componets/navbar/Navbar'
import Header from './componets/header/Header'
import Brand from './componets/brand/Brand'
import MobileSkins from './componets/mobileskins/MobileSkins'
import {data} from './componets/mobileskins/data'
import { marvel } from './json/marvel'
import { laptop} from './json/laptop'
import Slider from './componets/slider/Slider'
import {slider2} from './componets/slider/slider2'
import { slider3 } from './componets/slider/slider2'
import Footer from './componets/fotter/Footer'

function App() {
  return (
    <>

      <Navbar />
      <Header />
      <Brand />
      <MobileSkins data={data} heading="Best Selling Mobile Skins"/>
      <Slider Data={slider2} timer={2000} />
      <MobileSkins  data={marvel} heading="Official Marvel Inspired Designs"/>
      <Slider Data={slider3} timer={2000} />
      <MobileSkins data={laptop} heading="Best Selling Laptop Skins"/>
      <Footer/>

    </>
  )
}

export default App




