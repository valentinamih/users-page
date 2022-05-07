import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from './usersSlice'
const rootReducer = combineReducers({
    usersReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootReducerType = ReturnType<typeof rootReducer>
export type AppStateType = ReturnType<typeof setupStore>
export type AppDispatch = AppStateType["dispatch"]