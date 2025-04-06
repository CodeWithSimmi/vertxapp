import { createSlice } from "@reduxjs/toolkit";
import { getserveronfromAPIR, setIsSignInR } from "./reducers";

export interface ISlice {
  serveron: boolean;
  isSignin: boolean;
}

const initialState:ISlice = {
  serveron: false,
  isSignin: false
}

const slice = createSlice({
  name: "vertexaislice",
  initialState,
  reducers: {
    getserveronfromAPI: getserveronfromAPIR,
    setIsSignIn: setIsSignInR
  }
})

export const { setIsSignIn, getserveronfromAPI } = slice.actions;
export default slice.reducer;