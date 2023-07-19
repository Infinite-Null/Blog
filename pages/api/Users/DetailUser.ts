import connectMongo from '@/Backend/Utils/connect'
import type { NextApiRequest, NextApiResponse } from 'next'
const user=require('../../../Backend/Models/user')
const blog=require('../../../Backend/Models/blogs')
type Data = {
  name: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    if(req.method=="GET"){
        await connectMongo()
        const UserId="64b7e7a10d418980ac5d6a2f"
        try{
            const doc=await user.findOne({_id:UserId}).select("_id name liked myBlog").populate("myBlog").populate("liked").exec()
            const response:any={
                message:"success",
                Blogs:doc
              }
              res.json(response)
        }catch(e){
            console.log(e)
            const response:any={
                message:"failed",
                Blogs:e
              }
              res.json(response)
        }
    }
  }