import connectMongo from '@/Backend/Utils/connect'
import type { NextApiRequest, NextApiResponse } from 'next'
const BlogS=require('../../Backend/Models/Blogs')
type Data = {
    name: string
  }
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    await connectMongo()
    if(req.method=="POST"){
        const{Name,Comment,BlogId}=req.body
        BlogS.updateOne({_id:BlogId},{$push:{
            Comments:{
                Name:Name,
                Comment:Comment
            }
        }}).then((blog:any)=>{
            const response:any={
                message:"Success",
                details:blog
            }
            res.status(200).json(response)
        }).catch((e:any)=>{
            const response:any={
                message:"Failed",
                details:e
            }
            res.status(200).json(response)
        })
    }
  }