import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requestUsers} from "../api/api";

const initialState: InitialStateType = {
    users: [],
    isLoading: false
}

export const getUsers = createAsyncThunk('users/getUsers',
    async function () {
    let res = await requestUsers()
        return res.data
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
    }

})

type UserType = {
    'id': number
    'name': string
    'username': string
    'email': string
    'address': {
        'street': string
        'suite': string
        'city': string
        'zipcode': string
        'geo': {
            'lat': string
            'lng': string
        }
    }
    'phone': string
    'website': string
    'company': {
        'name': string
        'catchPhrase': string
        'bs': string
    }
}
type InitialStateType = {
    users: Array<UserType>
    isLoading: boolean
}

export default usersSlice.reducer
export const {} = usersSlice.actions