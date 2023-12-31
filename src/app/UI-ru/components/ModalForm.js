'use client'

import { Children, use, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import * as EmailValidator from 'email-validator';
import Options from "./Options";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Button from "../Button";


export default function ModalForm(props){
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
        <div onClick={props.onClose} class={`${props.isOpen ? 'fixed flex' : 'hidden'} w-screen h-screen items-center justify-center z-20 font-Acrom_light`}>
            <div onClick={(e) => e.stopPropagation()} class='flex bg-white w-fit relative' >
                <div class='font-Acrom_regular flex'>
                    <div class={'h-[59.5rem] w-[50rem] bg-feedback relative bg-cover bg-center lg:w-1/2'}>
                        <div class=' text-white px-20 ml-[2rem] pt-[23rem] lg:pt-[14rem]'>
                            <div class='text-xs opacity-70'>THE BEST TEAM</div>
                            <div class='text-3xl my-5'>Why are we Lorem ipsum amet, adipiscing </div>
                            <div class='mb-5 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div class='flex w-[50rem] mt-10 pl-20'>
                        <form class=''>
                            <div class='mb-5 mt-10'>Name</div>
                            <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray bg-white'></input>
                            <div class='mb-5 mt-10'>Email</div>
                            <input onChange={(e) => {
                                setValueEmail(e.target.getAttribute('value'))
                            }} class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray bg-white'></input>
                            <div class='border-b-[0.10rem] border-gray border-opacity-20 cursor-pointe'>
                                <PhoneInput
                                    value={value}
                                    onChange={() => setValue(value)}
                                    inputStyle={{width: '26rem', padding: '10px 0 0 0', background: '#F5F5F5'}}
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
                            <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray bg-white'></input>
                            <Button includedText={'Отправить'} funcOnClick={() => {
                                props.onClose()
                                props.onSuccess()
                                }}></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }