'use client'

import Header from "./Header"
import Slider from "./Slider"
import Quote from "./Quote"
import CountSlide from "./CountSlide"
import { useState } from "react"
import ImageSlider from "./ImageSlider"

export default function ImageSlider({slides}){
    const [count, setCount] = useState(0)
    return(
    <div style={{backgroundImage: `url(${slides[count].url})`}} class={`flex-col relative h-[51.25rem] duration-1000 w-full ease-in transition-{background-image} bg-cover`} id="main">
            <Header></Header>
            <Slider count={count} funcChange={setCount}></Slider>
            <div class='flex justify-between mt-[3.5rem]'>
                <CountSlide count={count + 1}></CountSlide>
                <Quote></Quote>
            </div>
    </div>
    )
}