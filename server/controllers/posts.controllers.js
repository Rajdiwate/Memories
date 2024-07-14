import PostMessage from "../models/postMessage.js"
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
      const {title , message , creator , tags } = req.body
   
      if(!title && !message && !creator && ! tags){
         throw new apiError(400 , "Incomplete Info" )
      }
   
      //handle file upload first
      const msg = await PostMessage.create(title , message , creator , tags)
      
      const createdMsg = await PostMessage.findById(msg._id)
   
      if(!createdMsg){
         throw new apiError(500 , "Internal server Error")
      }
   
      return res.status(201).json(new apiResponse(201 , createdMsg , "Post Message Created"));
   } catch (error) {
      res.status(409).json({message : error.message})
   }

}


export {getPosts , createPost}