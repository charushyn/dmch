'use client'

import { Link } from "react-scroll"

export default function Footer(){
    return(
        <footer class='bg-bgblack h-[39.5rem] px-[12rem] pt-[6rem]'>
            <img src="./logo.svg" class='mb-[3.5rem]'></img>
            <div class='flex flex-row justify-between'>
                <div className="footer_title">
                    <span class='font-Acrom_regular opacity-100 text-xl mb-[2rem]'>Про нас</span>
                    <span>Отзывы</span>
                    <span>Частые вопросы</span>
                    <span>Регламент</span>
                    <span>Политика приватности</span>
                </div>
                <div className="footer_title">
                    <span class='font-Acrom_regular opacity-100 text-xl mb-[2rem]'>Контакты</span>
                    <span>@gmail.com</span>
                    <span>+48 730 526 706</span>
                </div>
                <div className="footer_title">
                    <span class='font-Acrom_regular opacity-100 text-xl mb-[2rem]'>Подпишитесь</span>
                    <span>Instagram</span>
                    <span>Telegram</span>
                    <span>Facebook</span>
                    <span>Youtube</span>
                </div>
                <div className="footer_title">
                    <span class='font-Acrom_regular opacity-100 text-xl mb-[2rem]'>Адрес</span>
                    <span>ul. Obrońców Pokoju 2A/11620-030 Lublin</span>
                    <span>NIP: 7123437436522410886</span>
                </div>
            </div>
            <Link class='flex justify-end my-[4rem]' to="main" duration={500} smooth={true}>
                <img src="/button_up.svg"></img>
                <img src="/button_up_arrow.svg" class='relative right-[1.55rem]'></img>
            </Link>
            <div class='flex flex-row justify-around'>
                <div class="footer_title">Design created by @masiuk.design</div>
                <div class="footer_title">Site created by tg: @qjjwjjejj</div>
            </div>
        </footer>
    )
}