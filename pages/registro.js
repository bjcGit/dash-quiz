import React, { useState } from "react";
import Layout from "@/components/Layout";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import { NUEVO_REGISTRO } from "@/models/mutation";
import { USUARIOS } from "@/models/querys";




const Registro = () => {
  const router = useRouter();

  const [nuevoUsuario] = useMutation(NUEVO_REGISTRO, {
    // update(cache, {data: {nuevoUsuario}}){
     
    //    const {obtenerUsuarios} = cache.readQuery({query:USUARIOS });
     

    //    cache.writeQuery({
    //     query: USUARIOS,
    //     data: {
    //       obtenerUsuarios : [...obtenerUsuarios, nuevoUsuario]
    //     }
    //    })
    // }
  });
  const [mensaje, guardarMensaje] = useState(null);

  const formik = useFormik({
    initialValues: {
        apellidos: "",
        aspiracion: '',
        correo: "",
        fechaNaci: "",
        nombres: "",
        numeroDocu: "",
        profesion: "",
        tipoDocu: ""
    },
    validationSchema: Yup.object({
      tipoDocu: Yup.string().required("Es necesario"),
      numeroDocu: Yup.string().required("Es necesario"),
      nombres: Yup.string().required("Es necesario"),
      apellidos: Yup.string().required("Es necesario"),
      fechaNaci: Yup.date('yyyy/MM/dd').required("Es necesario"),
      profesion: Yup.string().required("Es necesario"),
      aspiracion: Yup.number().required("Es necesario"),
      correo: Yup.string().required("Es necesario"),
    }),
    onSubmit: async (valores, {resetForm}) => {
        try {
            Loading.standard('Validando...');
            const {data} = await nuevoUsuario({
              variables: {
                input: valores
              }
           });
        
           Report.success(
            'Genial!!!',
            'Esta registrado',
            'Okay',
            );
            setTimeout(()=>{
            //   router.push('/contrato')
            Loading.remove();
            resetForm()
            }, 2000)
          } catch (error) {
            console.log(error)
            Report.failure(
              'Ups!!',
              `${error.message.replace('Error: ', '')}`,
              'Okay',
              );
              Loading.remove(1000);
          }

    },
  });

  const mostrarMensaje = () => {
    return (
      <div className="bg-white bg-black-100 border-l-4 black-500 text-blue-700 py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
        <p>{mensaje}</p>
      </div>
    );
  };

  return (
    <>
      <Layout>
        {mensaje && mostrarMensaje()}
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Registro al ciudadano
                  </h2>
                </div>
                <form
                  className="mt-4 space-y-6 bg-white rounded shadow-md px-8 pt-2 pb-4 mb-4"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="rounded-md shadow-sm">
                    <div className="sm:col-span-1">
                      <label htmlFor="tipoDocu" className="sr-only bg-gray-900">
                       tipo
                      </label>
                      <div className="mb-4">
                        <select
                          id="tipoDocu"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.tipoDocu}
                          className="relative block w-full rounded-t-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-10 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        >
                          <option value=""> Tipo de Documento </option>
                          <option value="CC"> CC </option>
                          <option value="NIT"> NIT </option>
                          <option value="EXT"> EXT </option>
                        </select>

                        {formik.touched.tipoDocu && formik.errors.tipoDocu ? (
                          <span className="text-red-300 border-l-2 border-red-500">
                            {formik.errors.tipoDocu}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="numeroDocu"
                        className=" text-blue sr-only bg-gray-900"
                      >
                        # Documento
                      </label>
                      <input
                        id="numeroDocu"
                        type="text"
                        className="relative block w-full rounded-t-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-10 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        placeholder="# Documento"
                        value={formik.values.numeroDocu}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.numeroDocu && formik.errors.numeroDocu ? (
                        <span className="text-red-300 border-l-2 border-red-500">
                          {formik.errors.numeroDocu}
                        </span>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="nombres" className="sr-only bg-gray-900">
                        Nombre
                      </label>
                      <input
                        id="nombres"
                        type="text"
                        className="relative block w-full rounded-t-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-10 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Nombres"
                        value={formik.values.nombres}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.nombres && formik.errors.nombres ? (
                        <span className="text-red-300 border-l-2 border-red-500">
                          {formik.errors.nombres}
                        </span>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="apellidos"
                        className="sr-only bg-gray-900"
                      >
                        Apellidos
                      </label>
                      <input
                        id="apellidos"
                        type="text"
                        className="relative block w-full rounded-t-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-10 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Apellidos"
                        value={formik.values.apellidos}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.apellidos && formik.errors.apellidos ? (
                        <span className="text-red-300 border-l-2 border-red-500">
                          {formik.errors.apellidos}
                        </span>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="fechaNaci" className="m-2">
                        Fecha de nacimiento
                      </label>
                      <input
                        id="fechaNaci"
                        type="date"
                        className="relative block w-full rounded-t-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-10 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Fecha de nacimiento"
                        value={formik.values.fechaNaci}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.fechaNaci && formik.errors.fechaNaci ? (
                        <span className="text-red-300 border-l-2 border-red-500">
                          {formik.errors.fechaNaci}
                        </span>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="profesion"
                        className="sr-only bg-gray-900"
                      >
                        Profesion
                      </label>
                      <input
                        id="profesion"
                        type="text"
                        className="relative block w-full rounded-t-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-10 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Profesion"
                        value={formik.values.profesion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.profesion && formik.errors.profesion ? (
                        <span className="text-red-300 border-l-2 border-red-500">
                          {formik.errors.profesion}
                        </span>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="aspiracion"
                        className="sr-only bg-gray-900"
                      >
                        Profesion
                      </label>
                      <input
                        id="aspiracion"
                        type="number"
                        className="relative block w-full rounded-t-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-10 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Aspiracion salarial"
                        value={formik.values.aspiracion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.aspiracion && formik.errors.aspiracion ? (
                        <span className="text-red-300 border-l-2 border-red-500">
                          {formik.errors.aspiracion}
                        </span>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="correo" className="sr-only bg-gray-900">
                        Correo
                      </label>
                      <input
                        id="correo"
                        type="email"
                        className="relative block w-full rounded-t-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-10 focus:ring-1 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Correo"
                        value={formik.values.correo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.correo && formik.errors.correo ? (
                        <span className="text-red-300 border-l-2 border-red-500">
                          {formik.errors.correo}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="h-5 w-5 text-white-500 group-hover:text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Registro;
