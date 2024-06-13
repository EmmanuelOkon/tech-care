import { AppContainer } from "@/components/core/AppContainer";
import React from "react";

type Props = {};

const PatientsSkeleton = (props: Props) => {
  return (
    <AppContainer className="flex flex-col gap-3 py-[16px] px-[20px] pr-[16px] w-full">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex justify-between">
          <div className="flex items-center my-2 ">
            <span className="h-[38px] w-[38px] animate-pulse rounded-full bg-gray-200" />
            <div className="flex flex-col pl-[12px] gap-2 ">
              <span className="h-4 w-40 animate-pulse rounded-xl bg-gray-200" />
              <span className="h-4 w-40 animate-pulse rounded-xl bg-gray-200" />
            </div>
          </div>
          <div className="justify-end nd p-2 flex items-center">
            <span className="h-4 w-10 animate-pulse rounded-xl bg-gray-200" />
          </div>
        </div>
      ))}
    </AppContainer>
  );
};

export default PatientsSkeleton;
