import { HomeIcon } from "./icons/home";
import { MessageIcon } from "./icons/message";
import { SocialIcon } from "./icons/social";

interface HeaderProps {
  isOnTop: boolean;
  isOnAbout: boolean;
  isOnProject: boolean;
}

export default function Header({
  isOnTop,
  isOnAbout,
  isOnProject,
}: HeaderProps) {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center bg-white/30 px-7 py-4 backdrop-blur-md">
      <div className="flex w-full items-center justify-center">
        <ul className="relative flex gap-10">
          <div className="relative">
            <a
              href="#top"
              className={`flex flex-col after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:rounded-full after:bg-gray-950 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 ${
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
              className={`flex flex-col after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:rounded-full after:bg-gray-950 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 ${
                isOnAbout && "after:scale-x-100"
              }`}
            >
              <li className="relative flex items-center justify-center gap-1 font-semibold ">
                <HomeIcon /> Sobre
              </li>
            </a>
          </div>
          <div className="relative">
            <a
              href="#projects"
              className={`flex flex-col after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:rounded-full after:bg-gray-950 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100 ${
                isOnProject && "after:scale-x-100"
              }`}
            >
              <li className="relative flex items-center justify-center gap-1 font-semibold ">
                <HomeIcon /> Projetos
              </li>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}
