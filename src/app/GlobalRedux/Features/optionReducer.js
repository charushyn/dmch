'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    option: ''
}

export const switchOption = createSlice({
    name: 'option',
    initialState,
    reducers: {
        option: (state, action) => { state.option = action.payload},
    }
})

export const { option } = switchOption.actions

export default switchOption.reducer