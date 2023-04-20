import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";
import {categories,difficulties,type} from "./data";

const initialState = {
   questions,
   categories,
   difficulties,
   type,
   formValue:[],
   questionsNumber:'',
   questionsScore:{
    score:0,
    maxScore:100
   },
}

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
      formData:(state,action) => {
        
        state.formValue=[...state.formValue,action.payload]
      },
      formNumber:(state,action) => {
        state.questionsNumber=action.payload
      },
      filterData:(state,action) => {
        state.questions = action.payload
      },
      formScore:(state,action) => {
        state.questionsScore.score = action.payload
      }
    }
})

export const {formData,formNumber,filterData,formScore} = dataSlice.actions
export default dataSlice.reducer