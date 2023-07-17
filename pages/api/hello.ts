// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '@/Utils/connect'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Data:any={
    massage:process.env.MONGO_URI
  }
  connectMongo().then(()=>{
    res.status(200).json(Data)
  })
}
