export default function Slider(){
    return(
        <div class='flex justify-between h-1/2 items-end text-white font-Acrom_light px-10'>
            <div class='flex items-center relative'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.2" stroke="currentColor" class="w-32 h-32">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span class='absolute left-20'>PREV</span>
            </div>
            <img src="./smallLogo.svg" class='h-24 mb-10'></img>
            <div class='flex items-center relative'>
                <span class='absolute left-2'>NEXT</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.2} stroke="currentColor" className="w-32 h-32">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    )
}