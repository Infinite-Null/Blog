import Quote from "@/Components/Quote/Quote";
import { Input, Grid, Button } from "@nextui-org/react";
import classes from "../../styles/Create/Create.module.css"
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
export default function create(){
  const Data=useSession()
  const router=useRouter()
    return <>
    <Quote title1="Share Thought" title2="Create a Blog"/>
    
    <div className={classes.main}>
      
      {Data.status!=='loading'&&(Data.status==='unauthenticated')?<Button
      auto ghost
      onPress={()=>{
        router.push("/Login")
      }}>Login</Button>:
     <>
      <div className={classes.contain}>
      <Input
      id="Title"
        rounded
        bordered
        size="xl"
        labelLeft="Title"
        placeholder="Rain In Hell"
        clearable
        color="secondary"
      />
      <p className={classes.title}>Discription</p>
      <textarea name="discription" className={classes.dis} cols={30}></textarea>
      <Button shadow color="secondary" auto>
        Create
      </Button>
      </div>
      <div className={classes.imageConatiner}>

      </div>
     </>}
  </div>
    </>
}