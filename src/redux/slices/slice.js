import{createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import  axios from "axios";
import {setLoader} from"./loaderSlice";

export const getData = createAsyncThunk("", 
    async(param, {dispatch})=>{
        dispatch(setLoader(true));
        const response= await axios.get("https://www.breakingbadapi.com/api/characters", {params:param});
        console.log(response)
        dispatch(getReducer(response?.data));
        dispatch(setLoader(false));
});

const state = {
    data:[],
};

const reducer = createSlice({
    name:"reducer",
    initialState: state,
    reducers:{
        getReducer(state, action){
            state.data=action.payload;
        }
    }
});

export default reducer.reducer;
export const {getReducer} = reducer.actions;
