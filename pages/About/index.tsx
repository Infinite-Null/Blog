import classes from "./About.module.css";
import { motion } from 'framer-motion';
import img from '../../public/me.jpg'
import Image from "next/image";
import { Button } from "@nextui-org/react";
export default function About(){
    return <div className={classes.main}>
        <div>
        <motion.div
        initial={{
            y:-200,
            opacity:0
        }}
        animate={{
            y:0,
            opacity:1
        }}
        className={classes.Created}>Created By</motion.div>
        <motion.div
        initial={{
            y:200,
            opacity:0
        }}
        animate={{
            y:0,
            opacity:1
        }}
        className={classes.Name}>Ankit Kumar Shah</motion.div>
        <motion.p
         initial={{
            y:100,
            opacity:0
        }}
        animate={{
            y:0,
            opacity:1
        }}
        className={classes.discription}>Hi I am, a talented and ambitious software developer who is currently pursuing Bachelor's in Computer Applications (BCA). With a passion for cutting-edge technologies and a hunger for knowledge, I have already made impressive strides in the world of software development. One of my areas of expertise lies in web development, with a keen focus on modern JavaScript frameworks. Proficient in Next.js, React, and Full Stack development, I have demonstrated a deep understanding of front-end and back-end technologies, allowing me to build dynamic and interactive web applications with ease.</motion.p>
         <div style={{padding:"20px",display:"flex",gap:"20px"}}>
            <p></p>
            <motion.a
             initial={{
                y:100,
                opacity:0
            }}
            animate={{
                y:0,
                opacity:1
            }}
            transition={{
                delay:0.5
            }}
             href="https://github.com/Infinite-Null" target="_blank"><Button ghost={true} color='secondary' auto>Github</Button></motion.a>
            <motion.a 
            initial={{
                y:100,
                opacity:0
            }}
            animate={{
                y:0,
                opacity:1
            }}
            transition={{
                delay:0.7
            }}
            href="https://www.linkedin.com/in/ankit-kumar-shah-147333247/" target="_blank"><Button ghost={true} color='secondary' auto>LinkedIn</Button></motion.a>
         </div>
        </div>
        <motion.div
        initial={{
            y:200,
            opacity:0
        }}
        animate={{
            y:0,
            opacity:1
        }}
        transition={{
            delay:0.3
        }}
        >
            <Image src={img} alt="not found" className={classes.image}/>
        </motion.div>
    </div>
}