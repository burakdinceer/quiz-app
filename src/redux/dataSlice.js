import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";
import {categories,difficulties,type} from "./data";

const initialState = {
   questions,
   categories,
   difficulties,
   type,
    
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
      
    }
})


export default dataSlice.reducer