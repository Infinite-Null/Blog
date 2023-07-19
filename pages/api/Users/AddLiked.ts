import connectMongo from '@/Backend/Utils/connect'
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
    name: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    if(req.method=="POST"){
    await connectMongo()
    const{blogId,userId}=req.body
    const user=require('../../../Backend/Models/user')
    user.updateOne({_id:userId},{$push:{
        liked:blogId
    }}).then((doc:any)=>{
        const response:any={
            message:"success",
            details:doc
        }
        res.status(200).json(response)
    }).catch((e:any)=>{
        const response:any={
            message:"failed",
            details:e
        }
        res.status(500).json(response)
    })
    }
  }