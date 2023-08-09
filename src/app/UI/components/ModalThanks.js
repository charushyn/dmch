import Link from "next/link";

export default function ModalThanks(props){
    return(
        <div onClick={props.onClose} class={`${props.isOpen ? 'fixed' : 'hidden'} w-full h-full bg-black bg-opacity-30 z-20 font-Acrom_light`}>
            <div onClick={(e) => e.stopPropagation()} class='flex bg-light_gold w-fit relative top-[5rem] left-[15rem] lg:left-[2rem] lg:top-[2rem]' >
                <img src='./ModalThanks.png'></img>
                <div class='flex-col w-[30.5rem] px-20 relative'>
                        <div onClick={props.onClose} class='flex justify-end cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" class='relative left-16 top-4 w-6 h-6' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div class='text-xs mt-[7rem]'>THE BEST TEAM</div>
                        <div class='text-3xl my-5 font-Acrom_regular'>Thanks for the application</div>
                        <div class='mb-5'>Our team will contact you as soon as possible</div>
                        <Link href={'/'} onClick={props.onClose} class='text-gold bg-bgblack w-[17.5rem] h-[4rem] flex justify-between px-6 items-center mt-16 cursor-pointer hover:bg-gold hover:text-bgblack duration-300'>
                            <span>Главная страница</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg> 
                        </Link>
                </div>
            </div>
        </div>
    )
}