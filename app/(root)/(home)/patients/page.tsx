"use client";

import * as React from "react";
import PatientDetails from "@/components/pages/patientDetails";
import { Patients } from "@/components/core";
import { Patient } from "@/interface";

import useAppState from "@/store";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { activeMenu, setActiveMenu, screenSize, fetchPatients, patients } =
    useAppState();
  const [selectedPatient, setSelectedPatient] = React.useState<Patient | null>(
    null
  );

  const router = useRouter();

  React.useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  React.useEffect(() => {
    if (patients && patients.length > 0) {
      setSelectedPatient(patients[0]);
    }
  }, [patients]);

  function generateParams(patient: Patient) {
    const params = new URLSearchParams();
    params.append("name", patient.name);
    params.append("date_of_birth", patient.date_of_birth);
    return params.toString();
  }

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    const params = generateParams(patient);
    const url = `/patients?${params}`;

    router.replace(url);
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
