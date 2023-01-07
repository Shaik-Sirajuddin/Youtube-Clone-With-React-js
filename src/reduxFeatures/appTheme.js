import { createSlice } from "@reduxjs/toolkit";
import { themeDark, themeLight } from "../utils/theme";
export const appTheme = createSlice({
    name: 'theme',
    initialState: {
        value: themeDark,
        isDarkMode: true
    },
    reducers: {
        switchTheme: (state) => {
            if (state.isDarkMode) {
                state.value = themeLight
            }
            else {
                state.value = themeDark
            }
            state.isDarkMode = !state.isDarkMode
        }
    }
})
export const { switchTheme } = appTheme.actions
export default appTheme.reducer