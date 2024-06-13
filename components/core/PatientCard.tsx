import React from "react";

import { PatientDetailsProps } from "@/components/pages/patientDetails";
import Image from "next/image";

const PatientCard: React.FC<PatientDetailsProps> = ({ patient }) => {
  console.log(patient);

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
          <Image
            src={patient.profile_picture}
            width={200}
            height={200}
            alt={patient.name}
          />
          <h2>{patient.name}</h2>

          <p>{formatDate(patient.date_of_birth)}</p>

          <p>{patient.phone_number}</p>
        </div>
      )}
    </div>
  );
};

export default PatientCard;
