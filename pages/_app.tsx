import type { AppProps } from 'next/app'
import  NavBar  from '@/Components/NavBar/NavBar';
import { NextUIProvider } from '@nextui-org/react'
import BlogState from '@/Context/blogState';
export default function App({ Component, pageProps }: AppProps) {
 
  return <NextUIProvider>
 
  <div style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"50px",
    marginBottom:"30px"
  }}>Blog</div>
   <BlogState>
   <NavBar/>
   <Component {...pageProps} />
   </BlogState>
   </NextUIProvider>
}
