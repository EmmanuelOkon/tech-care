import { AppContainer } from "@/components/core/AppContainer";
import React from "react";
import { Icons } from "../icons";

type Props = {};

const DetailsSkeleton = (props: Props) => {
  return (
    <AppContainer className="relative flex h-screen w-full items-start gap-10 ">
      <div className="mt[200px] flex w-full flex-col items-center justify-start gap-6 rounded-xl border border-[#F0F5F8] bg-[#ffffff] p-5 md:p-8">
        <div className="flex w-full flex-col gap-2.5 py-3 first:pt-0">
          <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
          <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
          <div className="flex--col flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="h-4 w-20 animate-pulse rounded-xl bg-red-700" />
              <span className="h-4 w-72 animate-pulse rounded-xl bg-gray-200" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full w-[38px] h-[38px] animate-pulse bg-gray-200 " />

            {Array.from({ length: 3 }).map((_, index) => (
              <span
                key={index}
                className="h-3 w-20 animate-pulse rounded-xl bg-gray-200"
              />
            ))}
          </div>
          <span className="h-12 w-40 animate-pulse rounded-xl bg-gray-200" />
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <span className="h-4 w-40 animate-pulse rounded-xl bg-gray-200" />
          <div className="flex w-full flex-col gap-2">
            <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
            <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
            <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
            <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
          </div>
          <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <span className="h-4 w-40 animate-pulse rounded-xl bg-gray-200" />
          <div className="flex w-full flex-col gap-2">
            <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
            <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
            <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
            <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
          </div>
          <span className="h-4 w-full animate-pulse rounded-xl bg-gray-200" />
        </div>
      </div>
    </AppContainer>
  );
};

export default DetailsSkeleton;
