import { cn } from "@/lib/utils";
import { FC } from "react";

type AppContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppContainer: FC<AppContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("mt8 px-5 py-4 bg-lime-500", className)}>
      {children}
    </div>
  );
};
