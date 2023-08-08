'use client'

import Header from "./Header"
import Slider from "./Slider"
import Quote from "./Quote"
import CountSlide from "./CountSlide"
import { useState } from "react"
import ImageSlider from "./ImageSlider"


export default function Main(){
    const slides = [
        {url: "./bg-1.png"},
        {url: "./bg-2.png"},
        {url: "./bg-3.png"},
    ]
    return(
        <ImageSlider slides={slides}>
        </ImageSlider>
    )
}