import { ICounterState } from "../reducers/counterReducer";

export const getCounterSlice = (state) => {
    return state.counterSlice;
};
export const getCounter = (state:ICounterState) => {
    return getCounterSlice(state).counter; 
};