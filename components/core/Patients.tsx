"use client";

import * as React from "react";

import Image from "next/image";

import useAppState from "@/store";
import { Icons } from "../icons";
import PatientsSkeleton from "./Skeleton";
import { Patient } from "@/interface";

type PatientsProps = {
  patients: Patient[] | null;
  onSelectPatient: (patient: Patient) => void;
};

const Patients: React.FC<PatientsProps> = ({ patients, onSelectPatient }) => {
  const { isLoading } = useAppState();
  const [activePatient, setActivePatient] = React.useState<Patient | null>(
    null
  );

  const handleSelectPatient = (patient: Patient) => {
    onSelectPatient(patient);
    setActivePatient(patient);
  };

  return (
    <>
      <div className="bg-none pr-1">
        <div className=" text-bgBlue flex items-center p-4 justify-between">
          <span className="text-[24px] font-extrabold ">Patients</span>
          <Icons.Search aria-label="Search Icon" />
        </div>
        <div className="mb-6 h-screen md:overflow-y-scroll overflow-auto md:hover:overflow-auto pr-1">
          {isLoading ? (
            <PatientsSkeleton />
          ) : patients ? (
            <div>
              {patients.map((patient) => (
                <div
                  key={patient.name}
                  onClick={() => handleSelectPatient(patient)}
                  className={`flex items-center justify-between hover:cursor-pointer gap-3 py-[16px] px-[20px] pr-[16px] w-full ${
                    patient === activePatient
                      ? "bg-[#D8FCF7]  "
                      : "hover:bg-[#D8FCF7]/40"
                  } `}
                >
                  <div className="flex items-center">
                    <Image
                      src={patient.profile_picture}
                      alt="patient-image"
                      width={38}
                      height={38}
                      className="rounded-full"
                    />
                    <div className="flex flex-col pl-[12px]">
                      <span className="text-bgBlue font-bold">
                        {patient.name}
                      </span>
                      <div className="flex items-center text-[#707070]">
                        <span>{patient.gender}</span>,&nbsp;
                        <span>{patient.age}</span>
                      </div>
                    </div>
                  </div>
                  <div className="justify-end p-2 flex items-center rounded-sm">
                    <Icons.MenuHorizontal
                      className="text-bgBlue"
                      aria-label="Menu Icon"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 w-full bg-red-00 ">No patients found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Patients;
