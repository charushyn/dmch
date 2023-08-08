'use client'

import FAQoptions from "../../Classes/FAQOptions"

import { useState } from "react"

export default function Faq(){
    return(
        <div class='font-Acrom_light mt-5 h-[56.25rem]' id='faq'>
        <div>
            <div class='text-center text-xs mb-4'>THE BEST TEAM</div>
            <div class='text-center text-4xl font-Acrom_regular mb-4'>FAQ Lorem ipsum dolor sit amet</div>
            <div class='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <ul class='flex-col mt-10 w-fit mx-auto font-Acrom_regular'>
        {FAQoptions.map((option) => {
                    const [hidden, setHidden] = useState(true)
                    return(
                        <li>
                            <div onClick={() => {
                                setHidden(!hidden)
                                }} class={`border-b-2 border-light_gold border-opacity-50 w-[56rem] h-[4rem] flex justify-between items-center group cursor-pointe ${hidden ? '' : 'border-none'}`}>
                                <div class='flex w-fit gap-2'>
                                    <span class='inline-block'>{option.titleText}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 duration-300 group-hover:rotate-90 ${hidden ? '' : 'rotate-180'}`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            {hidden ? '' :
                                <div class={`my-4 flex border-b-2 border-light_gold border-opacity-50 pb-8`}>
                                    <div class='flex flex-row justify-between w-full'>
                                        <span class='max-w-[25rem] opacity-60'>{option.detailText}</span>
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