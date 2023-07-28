import Quote from '@/Components/Quote/Quote'
import { Inter } from 'next/font/google'
import classes from '../styles/Home.module.css'
import { Loading, Pagination } from '@nextui-org/react'
import axios from 'axios'
import { useState,useEffect, Dispatch, SetStateAction, useContext } from 'react';
import CardB from '@/Components/Card/Card'
import dayjs from 'dayjs'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blogs,setBlogs]:[any,Dispatch<SetStateAction<any>>,]=useState(null)
  const [loding,setLoding]=useState(false)
  const [page,setPage]=useState(1)
  const [totalPage,setTotal]=useState(0)
  // const totalPage=Math.ceil(6)
  async function getData(){
    setLoding(()=>true)
   const users= await axios.get(`/api/Blogs?page=${page}`)
   const finalValue={
    Blogs:users.data.Blogs
   }
    setBlogs((prev:any)=>prev=finalValue);
    const total=Math.ceil(users.data.Total/users.data.EachPage)
    setTotal(()=>total)
    setLoding(()=>false)
  }
 useEffect(() => {
  getData()
  return () => {
  };
},[page])
useEffect(()=>{
},[blogs])

  return <div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
   <Quote title1='Conversation is king.' title2='Content is just something to talk about.'/>
   {(loding)&&<div style={{height:"80vh",display:"flex",alignItems:"center",justifyContent:"center"}}><Loading size="xl" color='secondary'/></div>}
   {(!loding)&&<>
   <div className={classes.blogs}>
    {(blogs?.Blogs?.length===0)?<div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"60vh",width:"100vw",fontSize:"30px"}}>---No Blog---</div>:blogs?.Blogs?.map((e:{
            _id: string,
            users: {
                _id: string,
                name: string
            },
            title: string,
            discription: string,
            createdAt:string
        },i:any)=><CardB title={e.title} date={(dayjs(Date.parse(e.createdAt)).format("MM/DD/YYYY")).toString()} discription={e.discription} name={e.users.name} id={e._id} key={i}/>)}
    </div>
    {(blogs?.Blogs?.length!==0)&&<Pagination color="secondary" shadow total={totalPage} initialPage={page} 
    onChange={(Selectedpage)=>{
      setPage(()=>Selectedpage)
   
    }}
    css={{
      marginTop:"20px",
      marginBottom:"20px"
    }}/>}
   </>}
  </div>
  </div>
}

