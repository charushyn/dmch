import { Link } from "react-scroll"

export default function Button({includedText, isLink, refLink, funcOnClick, differentStyles}){
    if(isLink){
        return(
            <Link to={refLink} duration={500} smooth={true} class='text-gold bg-bgblack w-[17.5rem] h-[4rem] flex justify-between px-6 items-center mt-16 cursor-pointer hover:bg-gold hover:text-bgblack duration-300 self-end'>
                <span>{includedText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class=" w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg> 
            </Link>
        )
    } else {
        return(
            <div onClick={() => {
                funcOnClick ? funcOnClick() : null
            }} 
            class={`text-gold bg-bgblack w-[17.5rem] h-[4rem] flex justify-between px-6 items-center mt-16 cursor-pointer hover:bg-gold hover:text-bgblack duration-300 self-end ${differentStyles ? differentStyles : null}`}>
                <span>{includedText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.8" stroke="currentColor" class=" w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg> 
            </div>
        )
    }

}