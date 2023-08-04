'use client'

import { Children, use, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import * as EmailValidator from 'email-validator';


export default function Feedback(){
    const [hidden, setHidden] = useState(true)
    const [option, setOption] = useState('')
    const [isEmailValidate, setIsEmailValidate] = useState(true)
    const [value, setValue] = useState('')
    const [valueEmail, setValueEmail] = useState(true)

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
        <div class='font-Acrom_regular flex'>
            <div class='bg-feedback w-1/2 h-[59.5rem] relative bg-cover bg-center'>
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
                    <div class='mb-5 mt-10'>Phone Number</div>
                    <PhoneInput
                        value={value}
                        onChange={() => setValue(value)}
                        inputStyle={{width: '26rem'}}
                        regions={'europe'}
                    ></PhoneInput>
                    <div class={`mt-10 flex justify-between w-[26rem] border-opacity-20 ${option === '' ? 'border-b-[0.10rem] border-gray pb-12 cursor-pointer' : ''}`} onClick={() => setHidden(!hidden)}>
                        <span>Type of service</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div class={`${option === '' ? '' : 'pt-8 border-b-[0.10rem] border-gray pb-3 cursor-pointer border-opacity-20'}`}>{option}</div>
                    <div class={`w-[26rem] flex flex-col bg-gray bg-opacity-20 px-5 py-5 ${hidden ? 'hidden' : 'flex'}`}>
                        {typesOfService.map((type) => {
                            return(
                                <div onClick={() => {
                                    setOption(type);
                                    setHidden(true)
                                }} class="type_of_service_option">{type}</div>
                            )
                        })}
                    
                    </div>
                    <div class='mb-10 mt-10'>Message</div>
                    <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                </form>
            </div>
        </div>
    )
}