export default function Consultation(props){
    return(
        <div class='flex h-[56.25rem] px-20 font-Acrom_regular gap-20 py-20' id="whyWe">
            <div class='py-10'>
                <div class='text-xs'>THE BEST TEAM</div>
                <div class='text-3xl my-5'>Why are we Lorem ipsum amet, adipiscing </div>
                <div class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</div>
                <ul>
                    <li class='flex gap-2 relative'> 
                        <div class='bg-black w-2 h-2 border rounded-full absolute top-2'></div>
                        <span class='pl-6'>Независимые лицензированные специалисты</span>
                    </li>
                    <li class='flex gap-2 relative'> 
                        <div class='bg-black w-2 h-2 border rounded-full absolute top-2'></div>
                        <span class='pl-6'>Независимые лицензированные специалисты</span>
                    </li>
                    <li class='flex gap-2 relative'> 
                        <div class='bg-black w-2 h-2 border rounded-full absolute top-2'></div>
                        <span class='pl-6'>Независимые лицензированные специалисты</span>
                    </li>
                    <li class='flex gap-2 relative'> 
                        <div class='bg-black w-2 h-2 border rounded-full absolute top-2'></div>
                        <span class='pl-6'>Независимые лицензированные специалисты</span>
                    </li>
                    <li class='flex gap-2 relative'> 
                        <div class='bg-black w-2 h-2 border rounded-full absolute top-2'></div>
                        <span class='pl-6'>Независимые лицензированные специалисты</span>
                    </li>
                    <li class='flex gap-2 relative'> 
                        <div class='bg-black w-2 h-2 border rounded-full absolute top-2'></div>
                        <span class='pl-6'>Независимые лицензированные специалисты</span>
                    </li>
                    <li class='flex gap-2 relative'> 
                        <div class='bg-black w-2 h-2 border rounded-full absolute top-2'></div>
                        <span class='pl-6'>Независимые лицензированные специалисты</span>
                    </li>
                </ul>
                <div onClick={props.toConsultation} class='text-gold bg-bgblack w-[17.5rem] h-[4rem] flex justify-between px-6 items-center mt-16 cursor-pointer hover:bg-gold hover:text-bgblack duration-300'>
                    <span>Хочу консультацию</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class=" w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg> 
                </div>
            </div>
            <img src="./whyWe.png"></img>
        </div>
    )
}