'use client'

import { useEffect, useState } from "react"
import services from "../../Classes/Service"
import Button from "../Button"

export default function OurServices(){
    return(
        <div class='font-Acrom_light my-5 h-min-fit' id="services">
            <div>
                <div class='text-center text-xs mb-4'>THE BEST TEAM</div>
                <div class='text-center text-3xl font-Acrom_regular mb-4'>Our Services</div>
                <div class='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <ul class='flex flex-col mt-10 w-full'>
                {services.map((service) => {
                    const [hidden, setHidden] = useState(true)
                    return(
                        <li class='mx-[2rem]'>
                            <div onClick={() => {
                                setHidden(!hidden)
                                }} id={service.id} class={`border-b-2 border-light_gold border-opacity-50 h-[4rem] flex justify-between items-center group cursor-pointe ${hidden ? '' : 'border-none'}`}>
                                <div class='flex w-fit gap-2'>
                                    <img src={service.iconUrl} class='h-8 w-8 pointer-events-auto'></img>
                                    <span class='inline-block'>{service.showText}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 duration-300 group-hover:rotate-90 ${hidden ? '' : 'rotate-180'}`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            {hidden ? '' :
                                <div class={`my-4 flex border-b-2 border-light_gold border-opacity-50 pb-8 w-full`}>
                                    <div class='mx-auto flex justify-between gap-5'>
                                        <img src={service.detailPhoto} class='inline-block w-[25rem] md:w-full md:h-[10rem] md:object-cover md:object-center'></img>
                                        <div class='flex flex-col justify-between'>
                                            <span class=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                            <Button includedText={'Хочу консультацию'}></Button>
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