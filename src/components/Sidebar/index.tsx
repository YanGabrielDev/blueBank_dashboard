import { Package, Home, Settings, User } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="bg-white h-screen px-4 fixed dark:bg-darkSidebarBg" aria-label="Sidebar de navegação">
      <header className="flex items-center gap-4 px-4 py-8">
        <Package color="#0D92F4" size={24} />
        <h3 className="font-semibold text-lg text-primaryText dark:text-darkPrimaryText">BoxBank</h3>
      </header>
      <nav>
        <ul className="">
          <li className="flex cursor-pointer font-medium items-center gap-4 py-2 px-4 text-primary bg-secondary rounded-[4px]">
            <Home size={20} className="text-primary"/>
            <span>Dashboard</span>
          </li>
          <li className="flex cursor-pointer font-medium items-center gap-4 text-primary py-2 px-4">
            <User size={20} />
            <span>Perfil</span>
          </li>
          <li className="flex cursor-pointer font-medium items-center gap-4 text-primary py-2 px-4">
            <Settings size={20} />
            <span>Configurações</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
