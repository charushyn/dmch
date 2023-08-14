'use client'

import { useState } from "react"
import { Link } from "react-scroll"

export default function Navbar(){
    const [isShow, setIsShow] = useState(false)
    return(
        <div class='navbar:hidden flex justify-between font-Acrom_regular'>
            {isShow ? 
            <div class='flex flex-col fixed bg-light_gold text-black z-20 gap-10 w-screen pt-5 px-10 h-[20rem]'>
                <div class='flex flex-row justify-between'>
                    <img src="./logo.svg" class='h-8 z-20'></img>
                    <img onClick={() => setIsShow(false)} src="./navbarClose.svg"></img>
                </div>
                <div class='flex flex-col gap-4'>
                    <Link class='cursor-pointer flex flex-row gap-4 text-2xl' to="whyWe" duration={500} smooth={true}>
                        <span>Why we</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <Link class='cursor-pointer flex flex-row gap-4 text-2xl' to="services" duration={500} smooth={true}>
                        <span>Services</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <Link class='cursor-pointer flex flex-row gap-4 text-2xl' to="reviews" duration={500} smooth={true}>
                        <span>Reviews</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                    <Link class='cursor-pointer flex flex-row gap-4 text-2xl' to="faq" duration={500} smooth={true}>
                        <span>FAQ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
            </div> : null}

            {isShow ? null : <img src="./logo.svg" class='h-8 ml-10 mt-5'></img>}
            {isShow ? null : <img onClick={() => setIsShow(true)} class='mr-10 mt-5' src="./navbarOpen.svg"></img>}
        </div>
    )
}