import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authService } from "./userService";
export const registerUser=createAsyncThunk(
    "auth/register",
    async (userData,thunkAPI)=>{
    try{
        return await authService.register(userData)

    }catch(error){
            return thunkAPI.rejectWithValue(error)
    }
})

const initialState={
    user:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
export const authSlice= createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isloading = true;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createUser = action.payload;
            if (state.isSuccess === true) {
                toast.info("User created Successfully");
            }
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if (state.isSuccess === true) {
                toast.error(action.error);
            }
        })
        
    }
})




export default authSlice.reducer;

