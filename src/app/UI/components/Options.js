'use client'

import { useSelector, useDispatch } from "react-redux"
import { option } from "../../GlobalRedux/Features/optionReducer"
import { useState } from "react"

export default function Options(props){
    const dispatch = useDispatch()
    return(
        <div class={`w-[26rem] flex flex-col bg-gray bg-opacity-20 px-5 py-5 ${props.hidden ? 'hidden' : 'flex'}`}>
        {props.typesOfService.map((type) => {
            return(
                <div onClick={() => {
                    dispatch(option(type))
                    props.setHidden(!props.hidden)
                }} class="type_of_service_option">{type}</div>
            )
        })}
    
    </div>
    )
}