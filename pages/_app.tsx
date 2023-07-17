import type { AppProps } from 'next/app'
import  NavBar  from '@/Components/NavBar/NavBar';
import { Layout } from '@/Components/NavBar/Layout';

export default function App({ Component, pageProps }: AppProps) {
 
  return <Layout>
  <div style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"50px",
    marginBottom:"30px"
  }}>Blog</div>
   <NavBar/>
   <Component {...pageProps} />
  </Layout>
}
