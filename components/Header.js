import React from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router';


const Header = () => {

    const router = useRouter();


   

  

    const cerrarSesion = () => {
     
      router.push('/registro');
  }
   

  return (
    <div className='flex justify-between mb-5'>
      <p className='mr-2 text-green-600'>Online: Usuario</p>

      <button 
        onClick={() => cerrarSesion() }
        className='bg-gray-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md'
        type='button'>
        Salir
      </button>

    </div>
  )
}

export default Header
