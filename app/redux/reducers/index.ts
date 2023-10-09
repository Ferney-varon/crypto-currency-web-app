import { counterReducer } from "./counterReducer"
import { cryptoReducer } from "./cryptoReducer"

const reducers = {
    counterSlice : counterReducer,
    cryptoSlice: cryptoReducer
}
export default reducers