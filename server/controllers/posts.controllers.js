import{ PostMessage} from "../models/postMessage.js"
import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';

const getPosts = async (req ,res)=>{
   try {
      const posts = await PostMessage.find()
      if(!posts){
         throw new apiError(500 , "cannot get posts");
      }
      return res.status(200).json(new apiResponse( 200 , posts ,"posts retreived" ))
   } catch (error) {
      res.status(404).json({message : error.message})
   
   }
}

const createPost = async(req,res)=>{

   try {
      const {title , message , creator , tags , selectedFile } = req.body
   
      if(!title || !message || !creator || !tags || !selectedFile){
         throw new apiError(400 , "Incomplete Info" )
      }
   
      const msg = await PostMessage.create({title , message , creator , tags , selectedFile})
      
      const createdMsg = await PostMessage.findById(msg._id)
   
      if(!createdMsg){
         throw new apiError(500 , "Internal server Error")
      }
      return res.status(201).json(new apiResponse(201 , createdMsg , "Post Message Created"));
   } catch (error) {
      res.status(error.statusCode || 409).json({message : error.message})
   }

}

const deletePost = async(req,res)=>{
   try {
      const {postId} = req.body
      if(!postId){
         throw new apiError(400 , "no post available with this id");
      }
      const post = await PostMessage.findById(postId);
      if(!post){
         throw new apiError(400 , "no such post available");
      }
      await PostMessage.deleteOne({_id : postId})
      return res.status(200).json({message : "Post Deleted Successfully"})
   } catch (error) {
      res.status(400).json({message : error.message})
   }
}

const likePost = async(req,res)=>{
   try {
      console.log('hi')
      const {postId} = req.body
      const post = await PostMessage.findById(postId);
      if(!post){
         throw new apiError(400 , "No such post Exist")
      }
      const likes = post.likeCount
      const newPost = await PostMessage.findByIdAndUpdate(post._id ,{likeCount : likes+1})
      console.log(newPost)
      return res.status(200).json(new apiResponse(200 , newPost , "Post Liked"))
   } catch (error) {
      res.status(400).json({message : error.message})
   }
}

const unlikePost = async(req,res)=>{
   try {
      console.log('hi')
      const {postId} = req.body
      const post = await PostMessage.findById(postId);
      if(!post){
         throw new apiError(400 , "No such post Exist")
      }
      const likes = post.likeCount
      const newPost = await PostMessage.findByIdAndUpdate(post._id ,{likeCount : likes-1})
      console.log(newPost)
      return res.status(200).json(new apiResponse(200 , newPost , "Post Liked"))
   } catch (error) {
      res.status(400).json({message : error.message})
   }
}


export {getPosts , createPost , deletePost , likePost , unlikePost}