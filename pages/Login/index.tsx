"use client"
import { Card,  Input, Text, Button, Row , Spacer, Loading} from "@nextui-org/react";
import { motion } from "framer-motion"
import { useContext, useState } from 'react';
import axios  from 'axios';
import ModalComp from "@/Components/Modal/ModalComp";
export default function App(){
  var LoginState
  if(typeof window !== "undefined")
     LoginState=localStorage.getItem("Login")??"false"
    const [login,setlogin]=useState(true)
    function change(a:boolean){
        setlogin(()=>a)
    }
    console.log(LoginState)
    return <div>
      {(LoginState==="false")?<div style={{display:"flex",height:"80vh",alignItems:"center",justifyContent:"center"}}>
        {(login==true)?<Login change={change}/>:
        <Signup change={change}/>}
    </div>:"Already Logged in"}
    </div>
}





function Login({change}:{change:(a:boolean)=>void}){
  const [visible, setVisible] = useState(false)
  const [message,setMessage]=useState("")
  const[loading,setLoding]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  function LoginUser(){
    if(email==""||email==undefined||password==""||password==undefined){
      setMessage(()=>"Please fill all feilds")
      setVisible(()=>true)
      return;
    }
    setLoding(()=>true)
    axios.post("/api/Users/Login",
      {
        email:email,
        password:password
      }
    ).then((res:{
      data:{
        message:string,
        details:{
          _id: string
        Name: string,
        email: string
        }&string,
        token:string
      }
    })=>{
      if(res.data.details=="No User Found"){
        setMessage(()=>"Email is not connected with any account")
        setVisible(()=>true)
        setLoding(()=>false)
         return;
      }
      if(res.data.details=="Password Incorrect"){
        setMessage(()=>"Email or password incorrect")
        setVisible(()=>true)
        setLoding(()=>false)
         return;
      }
      setLoding(()=>false)
      localStorage.setItem("Login","true")
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("Name",res.data.details.Name)
      localStorage.setItem("Email",res.data.details.email)
      localStorage.setItem("id",res.data.details._id)
    }).catch(e=>console.log(e))
  }

    return <div>
<ModalComp visible={visible} setVisible={setVisible} message={message}/>
<motion.div
    initial={{
        y:100
    }}
    animate={{
        y:0
    }}
    >
        <Card css={{ mw: "330px", border:"2px solid black"}} isHoverable>
    <Card.Header>
      <Text b>Login</Text>
    </Card.Header>
    <Card.Body css={{ py: "$10" }}>
    <Input 
    aria-label="email"
    underlined 
    labelLeft="Email" 
    placeholder="@gmail.com" 
    onChange={(val)=>{
      setEmail(()=>val.target.value)
    }}
  />
  <Spacer/>
  <Input.Password
  aria-label="password"
    underlined 
    labelLeft="Password" 
    placeholder="****" 
    onChange={(val)=>{
      setPassword(()=>val.target.value)
    }}
  />
    </Card.Body>
    <Card.Divider />
    <Card.Footer>
      <Row justify="flex-end">
        <Button size="sm"  light onClick={()=>{
            change(false)
        }}>
          Signup
        </Button>
        <Button size="sm" color="secondary" onPress={()=>{
          LoginUser()
        }}>{(loading)?<Loading color="currentColor" size="sm" />:"Login"}</Button>
      </Row>
    </Card.Footer>
  </Card>
    </motion.div>
    </div>
}

function Signup({change}:{change:(a:boolean)=>void}){
  const [visible, setVisible] = useState(false)
  const [message,setMessage]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[name,setName]=useState("")
  const[loading,setLoding]=useState(false)
  const [good,setGood]=useState(false)

  function Singnup(){
      if(email==""||email==undefined||password==""||password==undefined||name==""||name==undefined){
        setGood(()=>false)
        setMessage(()=>"Please fill all fields")
        setVisible(()=>true)
        return;
      }
      setLoding(()=>true)
      axios.post("/api/Users/Signup",
      {
        Name:name,
        Email:email,
        Password:password
      }
    ).then((res)=>{
      if(res.data.details=="Email Already Exists"){
        setGood(()=>false)
        setMessage(()=>"Email is already connected.")
        setVisible(()=>true)
        setLoding(()=>false)
        return;
      }
      setGood(()=>true)
      setMessage(()=>"Account Successfully Created")
      setVisible(()=>true)
      setLoding(()=>false)
    })
  }
    return <div>
      <ModalComp visible={visible} setVisible={setVisible} message={message} Good={good}/>
     <motion.div
    initial={{
        y:100
    }}
    animate={{
        y:0
    }}
    >
        <Card css={{ mw: "330px", border:"2px solid black"}} isHoverable>
    <Card.Header>
      <Text b>Signup</Text>
    </Card.Header>
    <Card.Body css={{ py: "$10" }}>
    <Input 
    aria-label="Name"
    underlined 
    labelLeft="Name" 
    placeholder="" 
    onChange={(val)=>{
      setName(()=>val.target.value)
    }}
  />
  <Spacer/>
    <Input 
    underlined 
    aria-label="Email"
    labelLeft="Email" 
    placeholder="@gmail.com" 
    onChange={(val)=>{
      setEmail(()=>val.target.value)
    }}
  />
  <Spacer/>
  <Input.Password
    underlined 
    aria-label="Password"
    labelLeft="Password" 
    placeholder="****" 
    onChange={(val)=>{
      setPassword(()=>val.target.value)
    }}
  />
    </Card.Body>
    <Card.Divider />
    <Card.Footer>
      <Row justify="flex-end">
        <Button size="sm"  onClick={()=>{
            change(true)
        }} light>
          Login
        </Button>
        <Button size="sm" color="secondary" onClick={()=>{
          Singnup()
        }}>{(loading)?<Loading color="currentColor" size="sm" />:"Signup"}</Button>
      </Row>
    </Card.Footer>
  </Card>
    </motion.div>
    </div>
}