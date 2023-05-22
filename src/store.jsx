import { configureStore, createSlice } from "@reduxjs/toolkit";

export const todolist = createSlice({
  initialState: JSON.parse(localStorage.getItem("list"))||[],
  name: "Todo",
  reducers: {
    onlist: (state, action) => {
     state.push(action.payload);
     localStorage.setItem("list", JSON.stringify(state));
    },
    onDelete: (state, action) => {
      state.splice(0, state.length);
    
      localStorage.setItem("list", JSON.stringify(state));
     }
    }
  })
    


  export const store = configureStore({
    reducer: {
      Todo: todolist.reducer,
    
    },
  });