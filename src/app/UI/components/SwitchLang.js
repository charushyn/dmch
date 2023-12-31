
'use client'

import { useSelector, useDispatch } from "react-redux"
import { rus, eng, ukr } from "../../GlobalRedux/Features/langReducer"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function SwitchLang(){

    const lang = useSelector((state) => state.lang.lang)


    const pathname = usePathname();
    console.log(pathname);

    const dispath = useDispatch()

    const [show, useShow] = useState('no')

    return(
        <div class={show === 'yes' ? 'bg-bgblack flex text-white' : 'bg-none flex'} onClick={() => {
            show === 'no' ? useShow('yes') : useShow('no')
        }}>
        <div class='flex flex-col w-[4rem] font-Acrom_light relative'>
            <button>{show === 'yes' ? '' : lang}</button>
            <div class={show === 'yes' ? 'flex flex-col absolute bg-bgblack w-[5.5rem] top-6 items-center' : 'hidden'}>
                <Link href={'/ru'} onClick={() => {
                    dispath(rus())
                    }}>Rus</Link>
                <Link href={'/eng'} onClick={() => {
                    dispath(eng())
                    }}>Eng</Link>
                <Link href={'/'} onClick={() => {
                    dispath(ukr())
                    }}>Ukr</Link>
            </div>
        </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    )
}