import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
 
  // if(loading) return 'Cargando'
  // console.log(data)
//legacyBehavior
  return (
    <aside className="bg-gray-800 sm:w-1/4 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="font-black text-2xl font-bold tracking-tight text-white sm:text-2xl">Modulo Admin</p>
      </div>

      <hr className="mt-5 mb-5" />

        <nav className="mt-5 list-none">
                <li className={router.pathname === "/" ? "bg-blue-900 p-2 rounded" : "p-2"}>
                    <Link href="/" legacyBehavior>
                        <a className="text-white text-lg leading-8 text-gray-300">
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/listCard" ? "bg-blue-900 p-2 rounded" : "p-2"}>
                    <Link href="/listCard" legacyBehavior>
                        <a className="mt-1 max-w-2xl text-sm text-gray-500 text-white">
                            Ciudadanos
                        </a>
                    </Link>
                </li>       
                <li className={router.pathname === "/ofertas" ? "bg-blue-900 p-2 rounded" : "p-2"}>
                    <Link href="/ofertas" legacyBehavior>
                        <a className="mt-1 max-w-2xl text-sm text-gray-500 text-white">
                            Ofertas
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/asignacion" ? "bg-blue-900 p-2 rounded" : "p-2"}>
                    <Link href="/asignacion" legacyBehavior>
                        <a className="mt-1 max-w-2xl text-sm text-gray-500 text-white">
                          Asignar
                        </a>
                    </Link>
                </li>
        </nav>
        
    </aside>
  );
};

export default Sidebar;
