import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from './usersSlice'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    usersReducer,
    form: formReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootReducerType = ReturnType<typeof rootReducer>
export type AppStateType = ReturnType<typeof setupStore>
export type AppDispatch = AppStateType["dispatch"]