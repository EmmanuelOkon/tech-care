import { AppContainer } from "@/components/core/AppContainer";
import DiagnosisHistory from "@/components/core/DiagnosisHistory";
import PatientCard from "@/components/core/PatientCard";
import React from "react";

type Props = {};

const PatientDetails = (props: Props) => {
  return (
    <AppContainer className="flex item-center w-full gap-4 p-0">
      <div className=" w-full max-w-[766px] bg-green-400 p-4 rounded-[16px] ">
        <DiagnosisHistory />
      </div>
      <div className="w-full max-w-[367px] bg-yellow-500 rounded-[16px] p-4  ">
        <PatientCard />
      </div>
    </AppContainer>
  );
};

export default PatientDetails;
