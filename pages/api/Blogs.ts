// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from '@/Backend/Utils/connect'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
const BlogS=require('../../Backend/Models/Blogs')
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
   else if(req.method=="POST"){
   const {Title,Date,Discription,UserId}=req.body
   await connectMongo()
   console.log("Connected")
   const Blog=new BlogS({
    _id:new mongoose.Types.ObjectId(),
    title:Title,
    discription:Discription,
    Date:Date,
    Comments:[],
    Likes:0,
    users:UserId
   })
   Blog.save().then((doc:any)=>{
    const response:any={
      message:"Success",
      detail:doc,
    }
    res.status(200).json(response)
   }).catch((e:any)=> {
    const response:any={
      message:"Error",
      detail:e
    }
    res.status(500).json(response)
   })
  }
}
