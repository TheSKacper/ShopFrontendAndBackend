import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  role: string;
  success: boolean;
}

const initialState:LoginState ={
    username:'',
    role:"",
    success:false
}

const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setLogin(state, action:PayloadAction<LoginState>) {
      return action.payload
    },
   
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
