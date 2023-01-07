import { configureStore } from '@reduxjs/toolkit'
import appTheme from '../reduxFeatures/appTheme'
export default configureStore({
    reducer: {
        theme: appTheme,
    },
})