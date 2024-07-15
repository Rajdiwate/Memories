import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api/index'


export const FetchAllPosts = createAsyncThunk( '/getPosts',async()=>{
    try {
        const response= await api.fetchPosts()
        return response.data.data
    } catch (error) {
        console.log(error.message)
    }
})

export const createNewPost = createAsyncThunk('/createPosts' , async(toCreatePost)=>{
    try {
        const newPost = await api.createPost(toCreatePost);
        return newPost.data.data
    } catch (error) {
        console.log(error.message)
    }
})

export const deletePost = createAsyncThunk('/deletePost' , async(postId)=>{
    try {
        await api.deletePost(postId);
        return postId
    } catch (error) {
        console.log(error.message)
    }
})

export const incLikeCount = createAsyncThunk('/likePost' , async(postId)=>{
    try {
        await api.incLike(postId);
        return postId
    } catch (error) {
        console.log(error.message)
    }
})
export const decLikeCount = createAsyncThunk('/unlikePost' , async(postId)=>{
    try {
        await api.decLike(postId);
        return postId
    } catch (error) {
        console.log(error.message)
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState : {posts : []},
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(FetchAllPosts.fulfilled , (state , action)=>{
            state.posts = action.payload
        })
        .addCase(createNewPost.fulfilled , (state , action)=>{
            state.posts  = [...state.posts , action.payload]
        })
        .addCase(deletePost.fulfilled , (state ,action)=>{
            state.posts = state.posts.filter((post)=>(post._id !=action.payload))
        })
        .addCase(incLikeCount.fulfilled , (state ,action)=>{
            state.posts.forEach((post)=>{
                if(post._id === action.payload){
                    post.likeCount ++;

                }
            })
           
        })
        .addCase(decLikeCount.fulfilled , (state,action)=>{
            state.posts.forEach((post)=>{
                if(post._id === action.payload){
                    post.likeCount --;
                    
                }
            })
        })
    }   
})

export default postSlice.reducer
export const {}  = postSlice.actions