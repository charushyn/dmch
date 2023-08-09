'use client'

import Header from "../UI/components/Header";
import Link from "next/link";
import Footer from "../UI/components/Footer";

export default function Page(){
    return(
    <div class='bg-light_gold'>
        <Header color='black'></Header>
        <div class='flex justify-between mb-[2rem]'>
            <img src='./Calculator.png' class='w-1/2'></img>
            <div class='flex-col w-[30.5rem] px-20 relative'>
                        <div class='text-xs mt-[7rem] lg:mt-[3rem]'>THE BEST TEAM</div>
                        <div class='text-3xl my-5 font-Acrom_regular'>Thanks for the application</div>
                        <div class='mb-5'>Our team will contact you as soon as possible</div>
                        <Link href={'/'} class='text-gold bg-bgblack w-[17.5rem] h-[4rem] flex justify-between px-6 items-center mt-16 cursor-pointer hover:bg-gold hover:text-bgblack duration-300'>
                            <span>Главная страница</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg> 
                        </Link>
            </div>
        </div>
        <Footer></Footer>
    </div>
    )
}