import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import  NavBar  from '@/Components/NavBar/NavBar';

export default function App({ Component, pageProps }: AppProps) {
 
  return <>
  <div style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"50px",
    marginBottom:"30px"
  }}>Blog</div>
   <NavBar/>
   <Component {...pageProps} />
  </>
}
