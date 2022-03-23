import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TitleAssurance = () => {
  const steps = ["Pilih Jenis Asuransi", "Input Data"];
  const [activeStep, setActiveStep] = useState(0);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const isStepOptional = (step) => {
    return step === 1;
  };
  return (
    <div className="grid grid-rows justify-content-center mt-5">
      <div className="flex justify-center ">
        {/* <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}zzz</StepLabel>
              </Step>
            );
          })}
        </Stepper> */}
        <h1 className="text-blue-600 text-5xl">Pengajuan Asuransi</h1>
      </div>
    </div>
  );
};

export default TitleAssurance;
