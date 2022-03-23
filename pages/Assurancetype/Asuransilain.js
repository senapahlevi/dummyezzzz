import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { Button, CardActionArea, Typography } from "@mui/material";
import Link from "next/link";
import { Description } from "@mui/icons-material";
import Form from "../components/Form";
import TitleAssurance from "../TitleAssurance";

const Asuransilain = ({ detail }) => {
  return (
    <div className="grid grid-rows mt-5 mb-5">
      <div className="grid grid-cols justify-center ">
        <div className="block p-6  md:max-w-lg sm:max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md text-justify">
          <div className="grid grid-cols justify-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Asuransi {detail.type} </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"> {detail.desc}</p>
            <h1 className="ezycolor">Pengajuan Asuransi</h1>

            <div className="grid grid-cols mt-5">
              <Link href={detail.slug} passHref>
                <Button variant="contained" className="dark:hover:bg-gray-700 ezycolor">
                  Ajukan Sekarang!{" "}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asuransilain;
