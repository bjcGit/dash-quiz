import React from "react";
import Layout from "@/components/Layout";

import { useRouter } from 'next/router';





const Index = () => { 
  // const queries = {
  //   query1: useQuery(MY_QUERY_1),
  //   query2: useQuery(MY_QUERY_2)
  // };
  const router = useRouter();
 

  // if(!data) {
  //   return router.push('/login');
  // }
  // console.log(error)



  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Numerar", href: "/numeracion" },
    { name: "Contratos", href: "/contrato" },
  ];
  const stats = [
    { name: "En ejecución",value: `20` },
    { name: "Pendientes",value: `20` },
    { name: "No ejecutados", value: `20` },
  ];
  return (
    <Layout>
      <div className="relative  sm:rounded-3xl isolate overflow-hidden bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Bienvenido!!!
           
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Esta es la adminsitración de la plataforma de empleos.

            </p>
          </div>
        
        </div>
      </div>
    </Layout>
  );
};

export default Index;
