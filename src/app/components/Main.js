import Header from "./Header"
import Slider from "./Slider"
import Quote from "./Quote"
import CountSlide from "./CountSlide"

export default function Main(){
    return(
        <div class='flex-col relative h-screen w-full bg-main'>
            <Header></Header>
            <Slider></Slider>
            <div class='flex justify-between mt-[3.5rem]'>
                <CountSlide></CountSlide>
                <Quote></Quote>
            </div>
        </div>
    )
}