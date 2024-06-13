import React from "react";
import { PatientDetailsProps } from "@/components/pages/patientDetails";
import Image from "next/image";


const DiagnosisHistory: React.FC<PatientDetailsProps> = ({ patient }) => {

  const formatDate = (dateString: string) => {
    const options = "numeric";
    const month = "long";
    const day = "numeric";
    return new Date(dateString).toLocaleDateString(undefined, { year: options, month, day });
  }


  return (
    <div>
      
      {patient && (
        <div className="w-full max-w-[367px] bg-blue-500 rounded-[16px] p-4">
          
          <h2>{patient.insurance_type}</h2>

          <p>{formatDate(patient.date_of_birth)}</p>

          <p>{patient.phone_number}</p>
        </div>
      )}
    </div>
  );
};

export default DiagnosisHistory;
