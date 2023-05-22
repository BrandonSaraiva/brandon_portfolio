import { useState } from "react";
import { HomeIcon } from "./icons/home";
import { MessageIcon } from "./icons/message";
import ProjectIcon from "./icons/projectIcon";
import UserIcon from "./icons/userIcon";

interface HeaderProps {
  isOnTop: boolean;
  isOnAbout: boolean;
  isOnProject: boolean;
  isOnContact: boolean;
}

export default function Header({
  isOnTop,
  isOnAbout,
  isOnProject,
  isOnContact,
}: HeaderProps) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="fixed top-0 z-50  flex w-full flex-col items-center bg-black/10 px-7 py-4 backdrop-blur-md">
      <div className="flex w-full items-center justify-center">
        <ul className="relative hidden gap-10 lg:flex">
          <div className="relative">
            <a
              href="#top"
              className={`flex flex-col after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:rounded-full after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 ${
                isOnTop && "after:scale-x-100"
              }`}
            >
              <li className="relative flex items-center justify-center gap-1 font-semibold ">
                <HomeIcon />
                Inicio
              </li>
            </a>
          </div>
          <div className="relative">
            <a
              href="#about"
              className={`flex flex-col after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:rounded-full after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 ${
                isOnAbout && "after:scale-x-100"
              }`}
            >
              <li className="relative flex items-center justify-center gap-1 font-semibold ">
                <UserIcon /> Sobre
              </li>
            </a>
          </div>
          <div className="relative">
            <a
              href="#projects"
              className={`flex flex-col after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:rounded-full after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 ${
                isOnProject && "after:scale-x-100"
              }`}
            >
              <li className="relative flex items-center justify-center gap-1 font-semibold ">
                <ProjectIcon /> Projetos
              </li>
            </a>
          </div>
          <div className="relative">
            <a
              href="#contact"
              className={`flex flex-col after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:rounded-full after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 ${
                isOnContact && "after:scale-x-100"
              }`}
            >
              <li className="relative flex items-center justify-center gap-1 font-semibold ">
                <MessageIcon /> Contato
              </li>
            </a>
          </div>
        </ul>

        <div className="flex w-full items-center justify-end self-end md:hidden">
          <button onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {openMenu && (
        <div className="flex w-full items-center justify-center md:hidden">
          <div className="flex flex-col">
            <a
              onClick={() => setOpenMenu(false)}
              href="#top"
              className="flex w-full items-center justify-center rounded-md p-2 transition-all duration-150 hover:bg-black/5 "
            >
              Inicio
            </a>
            <a
              href="#about"
              onClick={() => setOpenMenu(false)}
              className="flex w-full items-center justify-center rounded-md p-2 transition-all duration-150 hover:bg-black/5 "
            >
              Sobre
            </a>
            <a
              href="#projects"
              onClick={() => setOpenMenu(false)}
              className="flex w-full items-center justify-center rounded-md p-2 transition-all duration-150 hover:bg-black/5 "
            >
              Projetos
            </a>
            <a
              href="#contact"
              onClick={() => setOpenMenu(false)}
              className="flex w-full items-center justify-center rounded-md p-2 transition-all duration-150 hover:bg-black/5 "
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
