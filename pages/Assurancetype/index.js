import React from "react";
import Asuransilain from "./../Assurancetype/Asuransilain";
import Forms from "../../Form.json";
import { Button } from "@mui/material";
import TitleAssurance from "../TitleAssurance";
const Asuransii = () => {
  return (
    <div>
      <div>
        <Button variant="contained" style={{ backgroundColor: "red" }} className="ml-3 mt-10">
          Kembali
        </Button>
        <TitleAssurance />

        {Forms.map((item) => (
          <div key={item.id}>
            <Asuransilain detail={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asuransii;
