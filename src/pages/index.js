import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/client";

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title> 
      </Head>

      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        {/*Banner */}
         <Banner/>

         <ProductFeed products={products}/>
        {/*ProductFeed */}
      </main>     
           
    </div>
  );
}
 
export const  getServerSideProps = async (context) => {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(  
  (res) => res.json()

  );

  return {
    props: {
    products,
    session
  },
  
  };
};

