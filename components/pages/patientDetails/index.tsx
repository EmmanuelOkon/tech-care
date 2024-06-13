import React from "react";
import { Patient } from "@/interface";
import { AppContainer } from "@/components/core/AppContainer";
import DiagnosisHistory from "@/components/core/DiagnosisHistory";
import PatientCard from "@/components/core/PatientCard";

export interface PatientDetailsProps {
  patient: Patient | null;
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  return (
    <AppContainer className="flex item-center w-full gap-4 p-0">
      <div className=" w-full max-w-[766px] bg-green-400 p-4 rounded-[16px] ">
        <DiagnosisHistory patient={patient} />
      </div>
      <div className="w-full max-w-[367px] bg-yellow-500 rounded-[16px] p-4  ">
        <PatientCard patient={patient} />
      </div>
    </AppContainer>
  );
};

export default PatientDetails;
