import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    title :{
        type : String,
        required: true,
    },
    message: {
        type : String,
        required : true,
    },
    creator : {
        type : String
    },
    tags : [
        String
    ],
    selectedFile :{
        type : String
    },
    likeCount : {
        type : Number,
        defaut : 0
    },


} , {timestamps : true})

const PostMessage = mongoose.model("PostMessage" , postSchema);
export default PostMessage