import axios from 'axios'

const url = 'http://localhost:8000/apiv1/posts';

export const fetchPosts = async()=>{
    const posts = await axios.get(url)
    return posts
}