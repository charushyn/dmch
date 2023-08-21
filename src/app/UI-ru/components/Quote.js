import Button from "../Button"

export default function Quote(){
    return(
        <div class='w-[36rem] min-h-[12rem] bg-bgblack font-Acrom_light flex-col px-14 py-10 md:w-full md:mt-8 md:text-right'>
            <span class='text-quote flex justify-end'><span>РОБЕРТ КИЙОСАКИ</span></span>
            <span class='text-white inline-block mt-3'>«Важно не то, сколько денег вы зарабатываете, а то, сколько денег у вас остается, как они работают на вас, и сколько поколений вы сможете ими обеспечить» </span>
            <div class='text-gold flex gap-3 relative justify-end mt-4 pointer-events-auto cursor-pointer hover:gap-1 duration-300'>
                <span>Наши услуги</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" 
                    class="w-12 h-12 relative bottom-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>  
            </div>
        </div>
    )
}