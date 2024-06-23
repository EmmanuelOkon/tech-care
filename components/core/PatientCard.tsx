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

  console.log(patient);

  return (
    <>
      {patient && (
        <div className="flex flex-col gap-4 w-full max-w-[367px]">
          <div className="w-full bg-white max-w-[367px] rounded-[16px] p-5">
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
                  <p className="text-bgBlue font-bold ">
                    {patient.phone_number}
                  </p>
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
            <div className="text-center mb-[32px] ">
              <button className="w-[220px] bg-bgGreen hover:bg-bgGreen/70 text-bgBlue font-bold rounded-[41px] py-3 mt-4">
                Show All Information
              </button>
            </div>
          </div>

          
          <div className="bg-white rounded-[16px] px-4">
            <div className=" text-bgBlue p-5">
              <span className="text-[24px] font-extrabold ">Lab Results</span>
            </div>

            <div className="mb-6 max-h-[296px] md:overflow-y-scroll overflow-auto md:hover:overflow-auto pr-1">
              <div className="pl-5">
                {patient.lab_results.map((result, _) => (
                  <div
                    key={_}
                    className="flex items-center justify-between gap-4 my-[5px] pl-3 hover:cursor-pointer hover:bg-lightGray py-2 bg-red-00 "
                  >
                    <div>
                      <span className="text-bgBlue font-normal">{result}</span>
                    </div>
                    <div className="justify-end p-2 flex items-center rounded-sm">
                      <Icons.Download
                        className="text-bgBlue"
                        aria-label="Menu Icon"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default PatientCard;
