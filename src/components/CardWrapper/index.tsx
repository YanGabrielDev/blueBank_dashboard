import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import type { CardWrapperProps } from "./types"
import { Brain } from "lucide-react"
import { TooltipWrapper } from "../TooltipWrapper"

export const CardWrapper = ({children, description, title, writerText}: CardWrapperProps) => {
  console.log(writerText);
  
    return(
        <Card className="w-full">
        <CardHeader>
        <div className="w-full flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
    

        <TooltipWrapper text={writerText}>
        <div className="rounded-xl p-2  bg-[#e0ecff] ">
          <Brain color="#5884d1"  />

          </div>
        </TooltipWrapper>
        </div>


          {description && <CardDescription>{description}</CardDescription>}
          
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
               {children}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    )
}
