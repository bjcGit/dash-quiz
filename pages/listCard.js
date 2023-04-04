import Layout from "../components/Layout";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { Confirm, Loading, Report } from "notiflix";
import { useRouter } from "next/router";
import { USUARIOS } from "@/models/querys";
import { useMutation, useQuery } from "@apollo/client";
import { DESACTIVAR } from "@/models/mutation";

const ListCard = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery(USUARIOS);
  const [desactivarUsuario] = useMutation(DESACTIVAR)

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({}),
    onSubmit: async (valores) => {},
  });

  if (loading) return "cargando...";


  const eliminar = async (desactivarUsuarioId) => {  
    try {
      const {data} = await desactivarUsuario({
        variables: {
          desactivarUsuarioId
        }
      })
      console.log(data)
    } catch (error) {
      console.log(error)
      
    }
  };

  return (
    <div>
      <Layout>
        {/* <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        </div> */}

        <div className="border-t border-gray-200 ">
          <div className="px-4 py-5 sm:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.obtenerUsuarios.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    {item.nombres}
                  </h2>
                  <p className="text-gray-600">{item.apellidos}</p>
                  <p className="text-gray-600">{item.correo}</p>
                  <p className="text-gray-600">{item.numeroDocu}</p>
                  <p className="text-gray-600">{item.aspiracion}</p>
                  <p className="text-gray-600">{item.profesion}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <a
                      type="submit"
                      onClick={() => eliminar(item.id)}
                      className="group relative flex w-full justify-center rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </p>
                    </a>

                    <a
                      type="submit"
                      className="group relative  flex w-full justify-center rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ListCard;
