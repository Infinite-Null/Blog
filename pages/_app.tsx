
import type { AppProps } from 'next/app'
import  NavBar  from '@/Components/NavBar/NavBar';
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react';
import BlogState from '@/Context/blogState';

export default function App({ Component, pageProps }: AppProps) {
 
  return <SessionProvider>
   <BlogState>
   <NextUIProvider>
  <div style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"50px",
    marginBottom:"30px"
  }}>Blog</div>
   <NavBar/>
   <Component {...pageProps} />
   </NextUIProvider>
   </BlogState>
  </SessionProvider>
}
