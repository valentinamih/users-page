import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersAPI} from "../api/api";
import {UserType} from "../types/types";

const initialState: InitialStateType = {
    users: [],
    isLoading: false,
    user: null,
}

export const getUsers = createAsyncThunk('users/getUsers',
    async function () {
    let res = await usersAPI.requestUsers()
        return res.data
    })
export const getUser = createAsyncThunk('users/getUser',
    async function (userId: number) {
        let res = await usersAPI.requestUser(userId)
        return res.data
    })
export const sortUsers = createAsyncThunk('users/sortUsers',
    async function (filter: any, thunkAPI: any) {
        let users = thunkAPI.getState().usersReducer.users
        console.log(filter.filter)
        return users.slice().sort((prev: UserType, next: UserType) => {
            if (filter.filter(prev) < filter.filter(next)) return -1;
            if (filter.filter(prev) < filter.filter(next)) return 1;
            return 1
        })
    })
export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
        })
        builder.addCase(getUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(sortUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }

})

type InitialStateType = {
    users: Array<UserType>
    isLoading: boolean
    user: UserType | null
}

export default usersSlice.reducer
export const {} = usersSlice.actions