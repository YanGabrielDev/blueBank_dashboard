import { SidebarMenuLinkProps } from "./types";

export const SidebarMenuLink = ({ children }: SidebarMenuLinkProps) => {
  return (
    <li className="flex font-medium items-center gap-4 py-2 px-4 text-primary bg-secondary rounded-[4px]">
      {children}
    </li>
  );
};
