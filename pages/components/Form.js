import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Asuransilain from "../Assurancetype/Asuransilain";
import Forms from "../../Form.json";
const Form = () => {
  // const assuranceType = [
  //   {
  //     id: 1,
  //     type: "kredit",
  //     desc: "Asuransi pengangkutan memberikan perlindungan terhadap barang seperti emas, plastik, dan barang lainnya mulai dari titik awal pengiriman, transit, hingga ke tujuan akhir pengiriman barang",
  //   },
  //   {
  //     id: 2,
  //     type: "Tanaman",
  //     desc: "Asuransi tanaman memberikan perlindungan terhadap penggantian biaya produksi apabila terjadi gagal panen akibat bencana alam seperti kebakaran, kekeringan, atau banjir",
  //   },
  //   {
  //     id: 3,
  //     type: "Binatang Peliharaan",
  //     desc: "Asuransi binatang peliharaan adalah asuransi khusus anjing dan kucing dengan memberikan jaminan perlindungan atas kematian hewan peliharaan yang disebabkan karena kecelakaan seperti tabrakan, tenggelam, atau terjatuh. Selain itu kehilangan binatang peliharaan yang didahului atau disertai kekerasan atau paksaan , serta memberikan ganti rugi rugi atas luka badan manusia disebabkan akibat langsung oleh binatang peliharaan dan luka pada hewan peliharaan pihak ketiga akibat langsung dari binatang peliharaan yang diasuransikan.",
  //   },
  // ];
  return (
    <div className="mx-auto px-10 text-center">
      <div className="grid grid-cols-2">
        {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-5">Your Name</label>
        <input
          type="text"
          id="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="enter your Full name"
          required
        />{" "}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="enter your valid email"
          required
        /> */}
      </div>

      {/* <Stack direction="flex row justify-center" spacing={2}>
        <Button variant="contained">Contained</Button>
      </Stack> */}

      {/* <div className="grid sm:grid-cols-2 gap-y-4 md:grid-cols-6 ">
        <div className=""></div>
      </div> */}
      <div className="">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Kembali
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>

      {/* <div>
        {Forms.map((item, i) => (
          <div key={i}>
            <Asuransilain detail={item} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Form;
