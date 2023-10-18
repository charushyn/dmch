'use client'

import FAQoptions from "../../Classes/FAQOptions"
import Button from "../Button"

import { useState } from "react"

export default function Faq(props){
    return(
        <div class='font-Acrom_light my-5 h-fit' id='faq'>
        <div>
            <div class='text-center text-xs mb-4'>THE BEST TEAM</div>
            <div class='text-center text-4xl font-Acrom_regular mb-4'>FAQ Lorem ipsum dolor sit amet</div>
            <div class='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <ul class='flex flex-col mt-10 w-full'>
        {FAQoptions.map((option) => {
                    const [hidden, setHidden] = useState(true)
                    return(
                        <li class='mx-[2rem]'>
                            <div onClick={() => {
                                setHidden(!hidden)
                                }} class={`border-b-2 border-light_gold border-opacity-50 h-[4rem] mob:h-fit mob:my-2 mob:pb-3 flex justify-between items-center group cursor-pointe ${hidden ? '' : 'border-none'}`}>
                                <div class='flex w-fit gap-2'>
                                    <span class='inline-block'>{option.titleText}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 duration-300 group-hover:rotate-90 ${hidden ? '' : 'rotate-180'}`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            {hidden ? '' :
                                <div class={`my-4 flex border-b-2 border-light_gold border-opacity-50 pb-8 w-full`}>
                                    <div class='mx-auto flex justify-between'>
                                        <div class='flex flex-col justify-between' onClick={() => props.toConsultation()}>
                                            <span class=''>{option.detailText}</span>
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
