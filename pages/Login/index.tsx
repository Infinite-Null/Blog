import { Card,  Input, Text, Button, Row , Spacer, Loading} from "@nextui-org/react";
import { motion } from "framer-motion"
import { useContext, useState } from 'react';
import axios  from 'axios';
import {useRef} from 'react';
import blogContext from "@/Context/blogContext";
import ModalComp from "@/Components/Modal/ModalComp";
export default function App(){
     const k=useContext(blogContext)
    const [login,setlogin]=useState(true)
    function change(a:boolean){
        setlogin(()=>a)
    }
    return <div>
      {(k.Login===false)?<div style={{display:"flex",height:"80vh",alignItems:"center",justifyContent:"center"}}>
        {(login==true)?<Login change={change}/>:
        <Signup change={change}/>}
    </div>:"Already Logged in"}
    </div>
}





function Login({change}:{change:(a:boolean)=>void}){
  const [visible, setVisible] = useState(false)
  const [message,setMessage]=useState("")
  const {setUserDetail,SetLogin}=useContext(blogContext)
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
    ).then((res:any)=>{
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
      SetLogin(()=>true)
      setUserDetail((pre:any)=>pre=res.data)
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
    return <motion.div
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
    underlined 
    labelLeft="Name" 
    placeholder="" 
  />
  <Spacer/>
    <Input 
    underlined 
    labelLeft="Email" 
    placeholder="@gmail.com" 
  />
  <Spacer/>
  <Input.Password
    underlined 
    labelLeft="Password" 
    placeholder="****" 
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
        <Button size="sm" color="secondary">Signup</Button>
      </Row>
    </Card.Footer>
  </Card>
    </motion.div>
}