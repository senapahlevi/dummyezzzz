import { Button, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const FormSchema = yup.object().shape({
//   names: yup.string().required(),
//   emails: yup.string().email().required(),
//   phones: yup.number().positive().integer(),
//   company: yup.string(),
//   typesAssurance: yup.string(),
// });

const FormsPages = () => {
  const router = useRouter();
  const id = router.query.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState(" ");
  const insurance = `Asuransi ${id}`.replace(/-/gi, " ");
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(FormSchema),
  //   defaultValues: {
  //     typesAssurance: "",
  //   },
  // });
  const onSubmit = (e) => {
    e.preventDefault();
    const liat = { name, email, phone, insurance, company };
    console.log(liat);
  };
  return (
    <div className=" container mx-auto mt-5">
      <Button onClick={() => router.back()} variant="contained" style={{ backgroundColor: "red" }} className="ml-3 mt-10">
        Kembali
      </Button>
      <div className="grid grid-rows justify-content-center mt-5 md:mx-72">
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={onSubmit}>
          <div className="mb-6 ">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jenis Asuransi</label>
            <input
              type="text"
              // {...register("typesAssurance")}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
              value={insurance} //these for delete
              readOnly
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>

            <input
              // {...register("names")}
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="input your name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* {errors.names && <p className="text-red-500">{errors.names.message}</p>} */}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input
              // {...register("emails")}
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* {errors.emails && <p className="text-red-500">{errors.emails.message}</p>} */}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama Perusahaan (*Opsional)</label>
            <input
              // {...register("company")}
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="input Perusahaan Anda"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Phones</label>
            <input
              // {...register("phones")}
              type="number"
              // id="number"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* {errors.phones && <p className="text-red-500">Ooopps you should input valid phone number</p>} */}
          </div>

          <div className="flex justify-center ">
            <button type="submit" className="text-white bg-blue-700 px-5 py-2.5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">
              Ajukan Asuransi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormsPages;
