import connectMongo from '@/Backend/Utils/connect'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
const bcrypt = require('bcrypt');
// const BlogS=require('../../Backend/Models/Blogs')
const user=require('../../../Backend/Models/User')
type Data = {
  name: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    if(req.method=="GET"){

    }else if(req.method=="POST"){
        await connectMongo()
        const{Name,Email,Password}=req.body
        bcrypt.hash(Password,10,function(err:any, hash:any) {
            if(err){
                const response:any={
                    message:"Failed",
                    details:err
                }
                res.status(500).json(response)
            }else{
                const User=new user({
                    _id:new mongoose.Types.ObjectId(),
                    name:Name,
                    email:Email,
                    password:hash,
                    liked:[],
                    myBlog:[]
                })
                User.save().then((doc:any)=>{
                    const respose:any={
                        message:"Success",
                        detail:doc
                    }
                    res.status(200).json(respose)
                }).catch((e:any)=>{
                    const respose:any={
                        message:"Failed",
                        detail:e
                    }
                    res.status(200).json(respose)
                })
            }
        });  
    }
  }