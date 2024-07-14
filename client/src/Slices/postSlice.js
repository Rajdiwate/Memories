import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api/index'


export const FetchAllPosts = createAsyncThunk( '/posts',async()=>{
    try {
        const response= await api.fetchPosts()
        
        return response.data.data
    } catch (error) {
        console.log(error.message)
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState : {posts : []},
    reducers : {
        Fetch_all : (state , action)=>{

        },
        Create : (state , action)=>{

        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(FetchAllPosts.fulfilled , (state , action)=>{
            state.posts = action.payload
        })
    }   
})

export default postSlice.reducer
export const {Fetch_all , Create}  = postSlice.actions