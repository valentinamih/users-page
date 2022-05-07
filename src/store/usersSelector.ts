import {RootReducerType} from "./store";

export const usersSelector = {
    users: (store: RootReducerType) => {
        return store.usersReducer.users
    }
}