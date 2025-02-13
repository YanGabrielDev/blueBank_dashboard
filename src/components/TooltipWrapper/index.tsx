import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { TooltipWrapperProps } from "./types";
import SummaryDisplay from "../SummaryDisplay";

export const TooltipWrapper = ({
  children,
  text ,
}: TooltipWrapperProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <div className="rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-2 shadow-lg border border-gray-700 transition-transform duration-200 scale-100 hover:scale-105 w-96">
            <SummaryDisplay  text={text} />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
