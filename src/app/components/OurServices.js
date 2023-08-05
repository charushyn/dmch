'use client'

import { useEffect, useState } from "react"
import services from "../Classes/Service"

export default function OurServices(){
    return(
        <div class='font-Acrom_light mt-5 h-min-[56.5rem]'>
            <div>
                <div class='text-center text-xs mb-4'>THE BEST TEAM</div>
                <div class='text-center text-3xl font-Acrom_regular mb-4'>Our Services</div>
                <div class='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <ul class='flex-col mt-10 w-fit mx-auto'>
                {services.map((service) => {
                    const [hidden, setHidden] = useState(true)
                    return(
                        <li>
                            <div onClick={() => {
                                setHidden(!hidden)
                                }} id={service.id} class={`border-b-2 border-light_gold border-opacity-50 w-[56rem] h-[4rem] flex justify-between items-center group cursor-pointe ${hidden ? '' : 'border-none'}`}>
                                <div class='flex w-fit gap-2'>
                                    <img src={service.iconUrl} class='h-8 w-8 pointer-events-auto'></img>
                                    <span class='inline-block'>{service.showText}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 duration-300 group-hover:rotate-90 ${hidden ? '' : 'rotate-180'}`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            {hidden ? '' :
                                <div class={`my-4 flex border-b-2 border-light_gold border-opacity-50 pb-8`}>
                                    <img src={service.detailPhoto}></img>
                                    <div class='max-w-[25rem] mx-auto flex flex-col justify-between'>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                        <div class='text-gold bg-bgblack w-[17.5rem] h-[4rem] flex justify-between px-6 items-center mt-16 cursor-pointer hover:bg-gold hover:text-bgblack duration-300 self-end'>
                                            <span>Хочу консультацию</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class=" w-12 h-12">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg> 
                                        </div>
                                    </div>
                                </div>
                            }
                        </li>
                    )
                })}


            </ul>
        </div>
    )
}