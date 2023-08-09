import { useState } from "react"

export default function Navbar(){
    const [isShow, setIsShow] = useState(false)
    return(
        <div class='navbar:hidden flex justify-between px-10 pt-5'>
            <img src="./logo.svg" class='h-8'></img>
            <img src="./navbarOpen.svg"></img>
        </div>
    )
}