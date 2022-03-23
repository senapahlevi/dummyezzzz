import Head from "next/head";
import Image from "next/image";
import Coba from "./coba";
import Asuransilain from "./Assurancetype/Asuransilain";
import Form from "./components/Form";
import Kotak from "./components/Kotak";
import Navbar from "./components/navbar";
import Asuransii from "./Assurancetype";
import Basic from "./LatihanReactBasic/Basic";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Basic /> */}

      <Asuransii />
    </div>
  );
}
