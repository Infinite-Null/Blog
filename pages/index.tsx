import CardB from '@/Components/Card/Card'
import Quote from '@/Components/Quote/Quote'
import { Inter } from 'next/font/google'
import classes from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <Quote title1='Conversation is king.' title2='Content is just something to talk about.'/>
   <div className={classes.blogs}>
      <CardB/>
    <CardB/>
    <CardB/>
    <CardB/>
    <CardB/>
    </div>
  </div>
}
