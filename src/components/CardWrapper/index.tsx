import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CardWrapperProps } from "./types";
import { Brain } from "lucide-react";

export const CardWrapper = ({
  children,
  description,
  title,
}: CardWrapperProps) => {
  return (
    <Card className="w-full bg-background hover:inset-shadow-lg hover:shadow-primary dark:bg-darkSecondaryBackground dark:border-darkSecondaryBackground">
      <CardHeader>
        <div className="w-full flex justify-between items-center">
          <CardTitle className="text-primaryText dark:text-darkPrimaryText">{title}</CardTitle>

          <div className="rounded-xl p-2  bg-secondary ">
            <Brain color="#0D92F4" />
          </div>
        </div>

        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">{children}</div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
