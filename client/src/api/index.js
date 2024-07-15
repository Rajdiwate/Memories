import axios from 'axios'

const url = 'http://localhost:8000/apiv1/posts';

export const fetchPosts = async()=>{
    const posts = await axios.get(url)
    return posts
}

export const createPost = async (toCreatePost)=>(
    await axios.post(url , toCreatePost)
   
)

export const deletePost = async(postId)=>
{
    //if we do delete request we have to send the postId in the URL
    await axios.post(`${url}/delete` , {postId}) 
}

export const incLike = async(postId)=>{
    await axios.patch(`${url}/like` , {postId});
}
export const decLike = async(postId)=>{
    await axios.patch(`${url}/unlike` , {postId});
}
    
