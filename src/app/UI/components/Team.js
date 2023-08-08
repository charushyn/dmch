'use client'

import { useState } from "react"
import slicesOfTeam from "../../Classes/TeamMember"
import { lengthOfSlices } from "../../Classes/TeamMember"

export default function Team(){
    const [index, setIndex] = useState(0)
    console.log(lengthOfSlices)
    function pagination(action){
        if(action === 'up'){
            index === lengthOfSlices - 1  ? "" : setIndex(index + 1)
        } else if(action === 'down'){
            index === 0 ? '' : setIndex(index - 1)
        } else {
            return
        }
    }
    return(
        <div class='h-[65.25rem] bg-light_gold pt-[8rem] font-Acrom_light'>
            <div>
                <div class='text-center text-xs mb-4'>THE BEST TEAM</div>
                <div class='text-center text-4xl font-Acrom_regular mb-4'>FAQ Lorem ipsum dolor sit amet</div>
                <div class='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class='flex justify-between mt-[10rem]'>
                <div class='flex items-center relative pointer-events-auto right-0 hover:right-2 transition-all' onClick={() => pagination('down')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.2" stroke="currentColor" class="w-32 h-32">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span class='absolute left-20 pointer-events-none hover:left-24 transition-all'>PREV</span>
                </div>
                <div class='flex gap-10'>
                    {slicesOfTeam[index].map((member) => {
                                                        return(
                                                            <div class='flex-col w-[18.75rem]'>
                                                                <img src={member ? member.photo : ''}></img>
                                                                <div class='mt-4 font-Acrom_regular'>{member ? member.name : ''}</div>
                                                                <div class='text-gray mt-4'>{member ? member.role : ''}</div>
                                                                <div class='text-gray mt-4'>{member ? member.description : ''}</div>
                                                            </div> 
                                                        )
                    })}
                </div>
                <div class='flex items-center relative pointer-events-auto left-0 hover:left-2 transition-all' onClick={() => pagination('up')}>
                    <span class='absolute left-2 pointer-events-none hover:left-6 transition-all'>NEXT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.2} stroke="currentColor" className="w-32 h-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
} 

/*                             <div class='flex-col w-[18.75rem]'>
                                <img src={array[index -].photo}></img>
                                <div class='mt-4 font-Acrom_regular'>{member.name}</div>
                                <div class='text-gray mt-4'>{member.role}</div>
                                <div class='text-gray mt-4'>{member.description}</div>
                            </div>
*/