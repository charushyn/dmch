'use client'

import Header from "./Header"
import Slider from "./Slider"
import Quote from "./Quote"
import CountSlide from "./CountSlide"
import { useState } from "react"


export default function Main(){
    const [count, useCount] = useState(1)
    return(
        <div class={`flex-col relative h-screen duration-500 -translate-x-0 ease-linear w-full bg-main-${count} ${count > 1 ?  ' bg-contain bg-opacity-20' : ''}`} id="main">
            <Header></Header>
            <Slider count={count} funcChange={useCount}></Slider>
            <div class='flex justify-between mt-[3.5rem]'>
                <CountSlide count={count}></CountSlide>
                <Quote></Quote>
            </div>
        </div>
    )
}