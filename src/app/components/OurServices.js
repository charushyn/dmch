'use client'

import { useState } from "react"
import services from "../Classes/Service"

export default function OurServices(){
    const [show0, setShow0] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)
    const [show8, setShow8] = useState(false)

    return(
        <div class='font-Acrom_light mt-5 h-min-[56.5rem]'>
            <div>
                <div class='text-center text-xs mb-4'>THE BEST TEAM</div>
                <div class='text-center text-3xl font-Acrom_regular mb-4'>Our Services</div>
                <div class='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <ul class='flex-col mt-10 w-fit mx-auto'>
                {services.map((service) => {
                    return(
                        <li>
                            <div class='border-b-2 border-light_gold border-opacity-50 w-[56rem] h-[4rem] flex justify-between items-center group cursor-pointer'>
                                <div class='flex w-fit gap-2'>
                                    <img src={service.iconUrl} class='h-8 w-8 pointer-events-auto'></img>
                                    <span class='inline-block'>{service.showText}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 duration-300 group-hover:rotate-90">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div>
                                <img src={service.detailPhoto}></img>
                                <div>A</div>
                            </div>
                        </li>
                    )
                })}


            </ul>
        </div>
    )
}