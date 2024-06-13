import * as React from "react";
import PatientDetails from "@/components/pages/patientDetails";
import { Patients } from "@/components/core";
import DiagnosisHistory from "@/components/core/DiagnosisHistory";
import { AppContainer } from "@/components/core/AppContainer";

type Props = {};

const HomePage = () => {
  return (
    <div className="flex item-center w-full gap-4">
      <div className="w-full max-w-[367px] bg-white rounded-[16px] px2">
        <Patients  />
      </div>

      <PatientDetails />
    </div>
  );
};

export default HomePage;
