'use client'

import { configureStore } from "@reduxjs/toolkit"
import langReducer from './Features/langReducer'
import optionReducer from "./Features/optionReducer"

export const store = configureStore({
    reducer: {
        lang: langReducer,
        option: optionReducer,
    }
})