import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Burak'

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{}
})

export default dataSlice.reducer