'use client'

import { configureStore } from "@reduxjs/toolkit"
import langReducer from './Features/langReducer'

export const store = configureStore({
    reducer: {
        lang: langReducer
    }
})