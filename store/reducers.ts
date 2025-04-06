import { ISlice } from "./slice"

export const getserveronfromAPIR = (state: ISlice, action: any) => {
  state.serveron = action.payload;
}

export const setIsSignInR = (state: ISlice, action:any) => {
  state.isSignin = action.payload;
}