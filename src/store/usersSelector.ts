import {RootReducerType} from "./store";

export const usersSelector = {
    users: (store: RootReducerType) => {
        return store.usersReducer.users
    },
    user: (store: RootReducerType) => {
        return store.usersReducer.user
    },
    isLoading: (store: RootReducerType) => {
        return store.usersReducer.isLoading
    }
}

