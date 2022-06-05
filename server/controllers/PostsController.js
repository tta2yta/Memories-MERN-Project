import PostMessage from "../Models/postMessages.js"

export const getPosts =async (req, res)=>{
    try{
        const postMessage= await PostMessage.find()
        return res.status(200).json(postMessage);

    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const createPost=(req, res)=>{
    try{

    }catch(error){

    }

}