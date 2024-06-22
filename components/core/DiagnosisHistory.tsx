import React from "react";
import { PatientDetailsProps } from "@/components/pages/patientDetails";
import { Icons } from "../icons";

const DiagnosisHistory: React.FC<PatientDetailsProps> = ({ patient }) => {
  const formatDate = (dateString: string) => {
    const options = "numeric";
    const month = "long";
    const day = "numeric";
    return new Date(dateString).toLocaleDateString(undefined, {
      year: options,
      month,
      day,
    });
  };

  return (
    <div>
      {patient && (
        <div className="w-full max-w-[367px]">
          <div className=" text-bgBlue flex items-center justify-between">
            <span className="text-[24px] font-extrabold ">
              Diagnosis History
            </span>
          </div>
          <div className="bg-[#F4F0FE] rounded-[12px] flex items-center justify-between ">
            <div>
              <span>Blood Pressure</span>
            </div>
            <span className="flex items-center">
              Last 6 months <Icons.ExpandMore />
            </span>
          </div>

          <h2>{patient.insurance_type}</h2>
          <p>{formatDate(patient.date_of_birth)}</p>
          <p>{patient.phone_number}</p>
        </div>
      )}
    </div>
  );
};

export default DiagnosisHistory;
