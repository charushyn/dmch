'use client'

import Header from "./Header"
import Slider from "./Slider"
import Quote from "./Quote"
import CountSlide from "./CountSlide"
import { useState } from "react"
import ImageSlider from "./ImageSlider"
import Navbar from "./Navbar"

export default function ImageSlider({slides}){
    const [count, setCount] = useState(0)

    function up(){
        count === 2 ? setCount(0) : setCount(count + 1)
    }
    function down(){
        count === 0 ? setCount(2) : setCount(count - 1)
    }

    return(
    <div style={{backgroundImage: `url(${slides[count].url})`}} class={`flex-col relative h-[51.25rem] duration-1000 w-full ease-out transition-{background-image} bg-cover bg-center`} id="main">
            <Navbar></Navbar>
            <Header></Header>
            <Slider count={count} funcChange={setCount}></Slider>
            <div class='flex justify-between mt-[3.5rem] md:flex-col'>
                <CountSlide count={count + 1}></CountSlide>
                <Quote></Quote>
            </div>
    </div>
    )
}