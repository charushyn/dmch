export default function Team(){
    return(
        <div class='h-[65.25rem] bg-light_gold pt-[8rem] font-Acrom_light'>
            <div>
                <div class='text-center text-xs mb-4'>THE BEST TEAM</div>
                <div class='text-center text-4xl font-Acrom_regular mb-4'>FAQ Lorem ipsum dolor sit amet</div>
                <div class='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class='flex justify-between mt-[10rem]'>
                <div class='flex items-center relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.2" stroke="currentColor" class="w-32 h-32">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span class='absolute left-20'>PREV</span>
                </div>
                <div class='flex gap-10'>
                    <div class='flex-col w-[18.75rem]'>
                        <img src="./team-f.png"></img>
                        <div class='mt-4 font-Acrom_regular'>Julia Barnes</div>
                        <div class='text-gray mt-4'>Project Manager</div>
                        <div class='text-gray mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                    </div>
                    <div class='flex-col w-[18.75rem] relative bottom-12'>
                        <img src="./team-s.png"></img>
                        <div class='mt-4 font-Acrom_regular'>Julia Barnes</div>
                        <div class='text-gray mt-4'>Project Manager</div>
                        <div class='text-gray mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                    </div>
                    <div class='flex-col w-[18.75rem]'>
                        <img src="./team-t.png"></img>
                        <div class='mt-4 font-Acrom_regular'>Julia Barnes</div>
                        <div class='text-gray mt-4'>Project Manager</div>
                        <div class='text-gray mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                    </div>
                </div>
                <div class='flex items-center relative'>
                    <span class='absolute left-2'>NEXT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.2} stroke="currentColor" className="w-32 h-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
} 