export default function Slider(props){

    function up(){
        props.count === 2 ? props.funcChange(0) : props.funcChange(props.count + 1)
    }
    function down(){
        props.count === 0 ? props.funcChange(2) : props.funcChange(props.count - 1)
    }

    return(
        <div class='flex justify-between md:justify-center h-1/2 items-end text-white font-Acrom_light px-10'>
            <div class='md:hidden flex items-center relative pointer-events-auto right-0 hover:right-2 transition-all' onClick={down}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.2" stroke="currentColor" class="w-32 h-32">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span class='absolute left-20 pointer-events-none hover:left-24 transition-all'>PREV</span>
            </div>
            <img src="./smallLogo.svg" class='h-24 mb-10'></img>
            <div class='md:hidden flex items-center relative pointer-events-auto left-0 hover:left-2 transition-all' onClick={up}>
                <span class='absolute left-2 pointer-events-none hover:left-6 transition-all'>NEXT</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.2} stroke="currentColor" className="w-32 h-32">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    )
}