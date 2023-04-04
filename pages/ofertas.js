import Layout from "../components/Layout";
import { useQuery, gql } from "@apollo/client";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { useRouter } from "next/router";
import { OFERTAS } from "@/models/querys";

const Ofertas = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery(OFERTAS);

  if (loading) return "Cargando...";

  return (
    <div>
      <Layout>
        <h1 className="text-base font-semibold text-gray-800 font-light mb-3">
          Ofertas actuales
        </h1>
        {/* <Link href="">
            <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold w-full lg:w-auto text-center">Nuevo Cliente</a>
          </Link> */}
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-900">
              <tr className="text-white text-left">
                <th className="text-base font-semibold leading-6 text-gray-900 bg-white px-6 py-4">
                  Código
                </th>
                <th className="text-base font-semibold leading-6 text-gray-900 bg-white px-6 py-4">
                  Cargo
                </th>
                <th className="text-base font-semibold leading-6 text-gray-900 bg-white px-6 py-4">
                  Decripción
                </th>
                <th className="text-base font-semibold leading-6 text-gray-900 bg-white px-6 py-4">
                  Empresa
                </th>
                <th className="text-base font-semibold leading-6 text-gray-900 bg-white px-6 py-4">
                  Salario
                </th>
                <th className="text-base font-semibold leading-6 text-gray-900 bg-white px-6 py-4">
                  Vacante
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.obtenerOfertas.map((item) => (
                <tr key={item.codigo} className="px-6 py-4">
                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">
                      {item.codigo}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">
                      {item.cargo}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">
                      {item.descripcion}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">
                      {item.empresa}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">
                      {item.salario}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">
                      {item.vacante}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default Ofertas;
