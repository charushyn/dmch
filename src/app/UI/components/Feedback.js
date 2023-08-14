'use client'

import { Children, use, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import * as EmailValidator from 'email-validator';
import Options from "./Options";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";


export default function Feedback(props){
    const [hidden, setHidden] = useState(true)
    const [value, setValue] = useState('')

    const option = useSelector((state) => state.option.option)

    const typesOfService = [
        'Анализ финансовых договоров',
        'Создание финансового плана для семьи',
        'Страховой консалтинг',
        'Кредитный консалтинг',
        'Инвестиции / Накопленные',
        'Преемственность и Наследование',
        'Обслуживание Юр.лиц',
        'Недвижимость'
    ]
    return(
        <div class='font-Acrom_regular flex md:flex-col'>
            <div class={'min-h-[59.5rem] bg-feedback w-1/2 relative bg-cover bg-center md:w-screen md:min-h-[32rem]'}>
                <div class=' text-white px-20 items-center justify-center absolute top-1/3'>
                    <div class='text-xs'>THE BEST TEAM</div>
                    <div class='text-3xl my-5'>Why are we Lorem ipsum amet, adipiscing </div>
                    <div class='mb-5 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</div>
                </div>
            </div>
            <div class='flex mx-auto mt-0'>
                <form class='w-[26rem]'>
                    <div class='mb-5 mt-10'>Name</div>
                    <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                    <div class='mb-5 mt-10'>Email</div>
                    <input onChange={(e) => {
                        setValueEmail(e.target.getAttribute('value'))
                    }} class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                    <div class='border-b-[0.10rem] border-gray border-opacity-20 cursor-pointer'>
                        <PhoneInput
                            value={value}
                            onChange={() => setValue(value)}
                            inputStyle={{width: '26rem', padding: '10px 0 0 0'}}
                            preferredCountries={['pl', 'ua']}
                            containerStyle={{margin: '10px 0'}}
                            regions={'europe'}
                            placeholder="Enter Phone Number"
                            disableSearchIcon={true}
                            prefix="+"
                        ></PhoneInput>
                    </div>
                    <div class={`mt-10 flex justify-between w-[26rem] border-opacity-20 ${option === '' ? 'border-b-[0.10rem] border-gray pb-12 cursor-pointer' : ''}`} onClick={() => setHidden(!hidden)}>
                        <span>Type of service</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div class={`${option === '' ? '' : 'pt-8 border-b-[0.10rem] border-gray pb-3 cursor-pointer border-opacity-20'}`}>{option}</div>
                    <Options hidden={hidden} typesOfService={typesOfService} setHidden={setHidden}></Options>
                    <div class='mb-10 mt-10'>Message</div>
                    <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                    <div class={`text-gold
                                bg-bgblack 
                                w-[17.5rem] 
                                h-[4rem] 
                                flex 
                                justify-between 
                                px-6 
                                items-center  
                                cursor-pointer 
                                hover:bg-gold 
                                hover:text-bgblack 
                                duration-300
                                mb-6
                                ${hidden ? 'mt-16' : 'mt-6'}
                                `}>
                            <span>Отправить</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg> 
                    </div>
                </form>
            </div>
        </div>
    )
}