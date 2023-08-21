import Link from "next/link";

export default function ModalThanks(props){
    return(
        <div onClick={props.onClose} class={`${props.isOpen ? 'fixed flex' : 'hidden'} w-screen h-screen bg-black bg-opacity-30 z-20 font-Acrom_light top-0 left-0 items-center justify-center`}>
            <div onClick={(e) => e.stopPropagation()} class='flex bg-light_gold w-fit relative md:flex-col' > 
                <div class='md:w-[40.5rem] md:h-[15rem] w-[30.5rem] h-[30rem] bg-ModalThanks bg-cover bg-center'></div>
                <div class='flex-col w-[30.5rem] px-20 relative md:w-full'>
                        <div onClick={props.onClose} class='flex justify-end cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" class='relative left-16 top-4 w-6 h-6' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div class='text-xs mt-[7rem] md:mt-[1rem]'>THE BEST TEAM</div>
                        <div class='text-3xl my-5 font-Acrom_regular'>Thanks for the application</div>
                        <div class='mb-5'>Our team will contact you as soon as possible</div>
                        <Link href={'/'} onClick={props.onClose} class='text-gold bg-bgblack w-[17.5rem] h-[4rem] flex justify-between px-6 items-center mt-16 cursor-pointer hover:bg-gold hover:text-bgblack duration-300 md:mb-4'>
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