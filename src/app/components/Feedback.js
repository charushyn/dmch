import { Children } from "react";

export default function Feedback(){
    return(
        <div class='font-Acrom_regular flex'>
            <div class='bg-feedback w-1/2 h-[46.75rem] relative'>
                <div class=' text-white px-20 items-center justify-center absolute top-1/3'>
                    <div class='text-xs'>THE BEST TEAM</div>
                    <div class='text-3xl my-5'>Why are we Lorem ipsum amet, adipiscing </div>
                    <div class='mb-5 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</div>
                </div>
            </div>
            <div class='flex mx-auto mt-20'>
                <form class='w-[26rem]'>
                    <div class='mb-5 mt-10'>Name</div>
                    <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                    <div class='mb-5 mt-10'>Email</div>
                    <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                    <div class='mb-5 mt-10'>Phone Number</div>
                    <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                    <div class='mb-5 mt-10'>Type of service</div>
                    <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                    <div class='mb-10 mt-10'>Message</div>
                    <input class='border-b-[0.10rem] w-[26rem] border-opacity-20 border-gray'></input>
                </form>
            </div>
        </div>
    )
}