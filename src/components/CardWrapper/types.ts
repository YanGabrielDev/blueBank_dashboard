import { ReactNode } from "react";

export interface CardWrapperProps{
    title: string;
    children: ReactNode;
    description?: string;
    writerText: string
}