'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    lang: 'Rus'
}

export const switchLanguage = createSlice({
    name: 'language',
    initialState,
    reducers: {
        rus: (state) => { state.lang = 'Rus'},
        eng: (state) => { state.lang = 'Eng'},
        ukr: (state) => { state.lang = 'Ukr'},
    }
})

export const { rus, eng, ukr } = switchLanguage.actions

export default switchLanguage.reducer