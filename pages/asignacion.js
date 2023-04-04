import Layout from "../components/Layout";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { Loading, Report } from "notiflix";

import { useRouter } from "next/router";

const Asignar = () => {
  const router = useRouter();




  const formik = useFormik({
    initialValues: {
      code: "",
      sigla: "",
      anio: "",
      nombre: "",
      tipoId: "",
      identificacion: "",
      correo: "",
      fechaFin: "",
      fechaIni: "",
      actividad: "",
      juridica: "",
      objeto: "",
      observacion: "",
      supervisor: "",
      valor: "",
      estadoContrato: "",
      estadoArchivo: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required('Es necesario'),
      sigla: Yup.string().required('Es necesario'),
      anio: Yup.string().required('Es necesario'),
      nombre: Yup.string().required('Es necesario'),
      correo: Yup.string().email().required('Es necesario'),
      tipoId: Yup.string().required('Es necesario'),
      identificacion: Yup.string().required('Es necesario'),
      valor: Yup.number().required('Es necesario')
    }),
    onSubmit: async (valores) => {
     
      try {
      
     
        setTimeout(()=>{
          router.push('/')
          Loading.remove();
        }, 2000)
      } catch (error) {
        Report.failure(
          'Ups!!',
          `${error.message.replace('Error: ', '')}`,
          'Okay',
          );
          Loading.remove(1000);
      }
    },
  });


  return (
    <div>
      <Layout>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="border-t border-gray-200 ">
            <div className="px-4 py-5 sm:px-12">
              <h1>Aqui van se van asignar</h1>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Asignar;
