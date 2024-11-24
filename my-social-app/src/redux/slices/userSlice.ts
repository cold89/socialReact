import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
    name:string,
    email:string,
    loading:boolean
}
const initialState:UserState={
    name:'',
    email:'',
    loading:true
}

const userSlice=createSlice({
name:'user',
initialState,
reducers:{
    setUser:(state,action:PayloadAction<UserState>)=>{
        state.name=action.payload.name;
        state.email=action.payload.email;
        state.loading=action.payload.loading;
    },
    setLoading:(state,action:PayloadAction<boolean>)=>{
        state.loading=action.payload
    }
}
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;