// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from '@/Backend/Utils/connect'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
const BlogS=require('../../Backend/Models/Blogs')
const user=require('../../Backend/Models/user')
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   if(req.method=="GET"){
    await connectMongo()
    try{
      const doc=await BlogS.find().populate("users").exec()
      const response:any={
        message:"success",
        Blogs:doc
      }
      res.json(response)
    }catch(e){
      const response:any={
        message:"failed",
        Blogs:e
      }
      res.json(response)
    }
    
   }
   else if(req.method=="DELETE"){
    await connectMongo()
    const{BlogId}=req.query
    
    BlogS.deleteOne({_id:BlogId}).then((doc:any)=>{
       const response:any={
        message:"Success",
        details:doc
      }
      res.status(200).json(response)
    }).catch((e:any)=>{
      const response:any={
        message:"Failed",
        details:e
      }
      res.status(500).json(response)
    })
   }
   else if(req.method=="PATCH"){
    await connectMongo()
    const{BlogId}=req.query
    
    BlogS.updateOne({_id:BlogId},req.body).then((doc:any)=>{
       const response:any={
        message:"Success",
        details:doc
      }
      res.status(200).json(response)
    }).catch((e:any)=>{
      const response:any={
        message:"Failed",
        details:e
      }
      res.status(500).json(response)
    })
   }
   else if(req.method=="POST"){
   const {Title,Date,Discription,UserId}=req.body
   await connectMongo()
   console.log("Connected")
   const blogId=new mongoose.Types.ObjectId()
   const Blog=new BlogS({
    _id:blogId,
    title:Title,
    discription:Discription,
    Date:Date,
    Comments:[],
    Likes:0,
    users:UserId
   })
   Blog.save().then((doc:any)=>{
    user.updateOne({_id:UserId},{$push:{myBlog:blogId}}).then((doc:any)=>{
      const response:any={
        message:"Success",
        detail:doc,
      }
      res.status(200).json(response)
    })
   }).catch((e:any)=> {
    const response:any={
      message:"Error",
      detail:e
    }
    res.status(500).json(response)
   })
  }
}
