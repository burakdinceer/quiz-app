import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";
import { categories, difficulties, type } from "./data";

const initialState = {
  questions,
  categories,
  difficulties,
  type,
  questionsScore: {
    score: 0,
    maxScore: 100,
  },
  falseQuestion: [],
  filterQuestions:[]
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.filterQuestions = action.payload;
    },
    formScore: (state, action) => {
      state.questionsScore.score = action.payload;
    },
    falseForm: (state, action) => {
      state.falseQuestion = [...state.falseQuestion, action.payload];
    },
    resetData: (state) => {
      state.filterQuestions = [];
      state.questionsScore.score=0;
      state.falseQuestion=[];
    },
  },
});

export const { formData, formNumber, filterData, formScore, falseForm , resetData} =
  dataSlice.actions;
export default dataSlice.reducer;
