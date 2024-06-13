"use client";

import * as React from "react";
import PatientDetails from "@/components/pages/patientDetails";
import { Patients } from "@/components/core";


import useAppState from "@/store";
import { Patient } from "@/interface";

const HomePage = () => {
  const { activeMenu, setActiveMenu, screenSize, fetchPatients, patients } =
    useAppState();
    const [selectedPatient, setSelectedPatient] = React.useState<Patient | null>(null);

  React.useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
  };


  return (
    <div className="flex item-center w-full gap-4">
      <div className="w-full max-w-[367px] bg-white rounded-[16px] px2">
        <Patients patients={patients} onSelectPatient={handleSelectPatient} />
      </div>

      <PatientDetails patient={selectedPatient} />
    </div>
  );
};

export default HomePage;
