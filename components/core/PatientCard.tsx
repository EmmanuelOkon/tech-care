import React from "react";

import { PatientDetailsProps } from "@/components/pages/patientDetails";
import Image from "next/image";
import { Icons } from "../icons";

const PatientCard: React.FC<PatientDetailsProps> = ({ patient }) => {
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
    <>
      {patient && (
        <div className="w-full bg-red-700 max-w-[367px] rounded-[16px] p4">
          <div className="text-center flex justify-center ">
            <Image
              src={"/images/Patient12.png"}
              // src={patient.profile_picture }
              width={200}
              height={200}
              alt={patient.name}
            />
          </div>
          <h2 className="text-bgBlue text-center text-[24px] font-extrabold pt-[24px] ">
            {patient.name}
          </h2>
          <div className="mt-[32px] space-y-[24px] ">
            <div className="flex items-center gap-4">
              <div className="bg-[#F6F7F8] h-[42px] w-[42px] rounded-full flex items-center justify-center ">
                <Icons.Calendar className="font-extrabold" />
              </div>
              <div>
                <span>Date Of Birth</span>
                <p className="text-bgBlue font-bold ">
                  {formatDate(patient.date_of_birth)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#F6F7F8] h-[42px] w-[42px] rounded-full flex items-center justify-center ">
                {patient.gender === "Female" ? (
                  <Icons.FemaleIcon className="font-extrabold" />
                ) : (
                  <Icons.MaleIcon className="font-extrabold" />
                )}
              </div>
              <div>
                <span>Gender</span>
                <p className="text-bgBlue font-bold ">{patient.gender}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#F6F7F8] h-[42px] w-[42px] rounded-full flex items-center justify-center ">
                <Icons.PhoneIcon className="font-extrabold" />
              </div>
              <div>
                <span>Contact Info.</span>
                <p className="text-bgBlue font-bold ">{patient.phone_number}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#F6F7F8] h-[42px] w-[42px] rounded-full flex items-center justify-center ">
                <Icons.PhoneIcon className="font-extrabold" />
              </div>
              <div>
                <span>Emergency Contacts</span>
                <p className="text-bgBlue font-bold ">
                  {patient.emergency_contact}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#F6F7F8] h-[42px] w-[42px] rounded-full flex items-center justify-center ">
                <Icons.InsuranceIcon className="font-extrabold" />
              </div>
              <div>
                <span>Insurance Provider</span>
                <p className="text-bgBlue font-bold ">
                  {patient.insurance_type}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="w-[220px] bg-bgGreen hover:bg-bgGreen/70 text-bgBlue font-bold rounded-[41px] py-3 mt-4">
              Show All Information
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientCard;
