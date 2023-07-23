import { Card,  Input, Text, Button, Row , Spacer} from "@nextui-org/react";
import { motion } from "framer-motion"
import { useState } from 'react';
export default function App(){
    const [login,setlogin]=useState(true)
    function change(a:boolean){
        setlogin(()=>a)
    }
    return <div style={{display:"flex",height:"80vh",alignItems:"center",justifyContent:"center"}}>
        {(login==true)?<Login change={change}/>:
        <Signup change={change}/>}
    </div>
}

function Login({change}:{change:(a:boolean)=>void}){
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
      <Text b>Login</Text>
    </Card.Header>
    <Card.Body css={{ py: "$10" }}>
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
        <Button size="sm"  light onClick={()=>{
            change(false)
        }}>
          Signup
        </Button>
        <Button size="sm" color="secondary">Login</Button>
      </Row>
    </Card.Footer>
  </Card>
    </motion.div>
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