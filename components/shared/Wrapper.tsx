import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};
const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("p-5 max-w-screen-xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
