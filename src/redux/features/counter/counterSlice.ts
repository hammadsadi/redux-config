import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count:0
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload.amount;
    },
    decreament: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const {increament, decreament} = counterSlice.actions

export default counterSlice.reducer