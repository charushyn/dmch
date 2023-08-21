import Button from "../Button"

export default function Cooperation(props){
    return(
        <div class='flex font-Acrom_light md:flex-col'>
            <div class='bg-friends w-1/2 bg-center bg-cover h-[40rem] md:w-screen'></div>
            <div class='bg-light_gold flex-col w-1/2 px-20 relative pt-48 lg:pt-20 lg:px-16 md:w-screen mob:px-10'>
                    <div class='text-xs text-center'>THE BEST TEAM</div>
                    <div class='text-3xl my-5'>Why are we Lorem ipsum amet, adipiscing </div>
                    <div class='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</div>
                    <Button includedText={'Хочу консультацию'} differentStyles={'mob:mb-[2rem]'} funcOnClick={props.onSuccess}></Button>
            </div>

        </div>
    )
}