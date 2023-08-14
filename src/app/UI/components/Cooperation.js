export default function Cooperation(props){
    return(
        <div class='flex font-Acrom_light md:flex-col'>
            <div class='bg-friends w-1/2 bg-center bg-cover h-[40rem] md:w-screen'></div>
            <div class='bg-light_gold flex-col w-1/2 px-20 relative pt-48 lg:pt-20 lg:px-16 md:w-screen'>
                    <div class='text-xs text-center'>THE BEST TEAM</div>
                    <div class='text-3xl my-5'>Why are we Lorem ipsum amet, adipiscing </div>
                    <div class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</div>
                    <div onClick={props.onSuccess} class='text-gold bg-bgblack w-[17.5rem] h-[4rem] flex justify-between px-6 items-center mt-16 cursor-pointer hover:bg-gold hover:text-bgblack duration-300 mb-10'>
                        <span>Хочу консультацию</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg> 
                    </div>
            </div>

        </div>
    )
}