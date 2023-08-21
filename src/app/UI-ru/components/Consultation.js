import Button from "../Button"

export default function Consultation(props){
    return(
        <div class='flex md:flex-col-reverse h-[56.25rem] md:h-fit px-20 font-Acrom_regular gap-20 py-20 mob:px-10' id="whyWe">
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
                <Button includedText={'Хочу консультацию'} funcOnClick={props.toConsultation}></Button>
            </div>
            <div class='bg-whyWe w-1/2 h-full md:mt-[1rem] md:w-full md:h-[20rem] bg-cover bg-center'>

            </div>
        </div>
    )
}
