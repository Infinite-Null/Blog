
import CardB from '@/Components/Card/Card'
import Quote from '@/Components/Quote/Quote'
import classes from '../../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/router'
export default function Favourite(){
  const Data=useSession()
  const router=useRouter()
    return <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <Quote title1='Your Liking' title2='Is what defines you.'/>
    {(Data.status!=='loading')&&(Data.status==='unauthenticated')?<Button css={
      {
        marginTop:"40px"
      }
    }
    auto ghost
    onPress={()=>{
      router.push('/Login')
    }}
    >Login</Button>:<div className={classes.blogs}>
      {/* <CardB/>
    <CardB/>
    <CardB/>
    <CardB/>
    <CardB/> */}
    </div>
    }
  </div>
}