import type { NextApiRequest, NextApiResponse } from 'next'
const user=require('../../../Backend/Models/User')
const bcrypt = require('bcrypt');
type Data = {
    name: string
  }
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    if(req.method=='POST'){
        const{email,password}=req.body
        user.findOne({email:email}).then((doc:any)=>{
            if(doc==null){
                const response:any={
                    message:"Success",
                    details:"No User Found"
                }
                res.status(200).json(response)
            }
            else{
                bcrypt.compare(password,doc.password).then((r:boolean)=>{
                    if(r){
                        const response:any={
                            message:"Success",
                            details:doc
                        }
                        res.status(200).json(response)
                    }else{
                        const response:any={
                            message:"Failed",
                            details:"Password Incorrect"
                        }
                        res.status(200).json(response)
                    }
                })
                
            }
        }).catch((e:any)=>{
            const response:any={
                message:"Auth Failed",
                details:e
            }
            res.status(404).json(response)
        })
    }
  }