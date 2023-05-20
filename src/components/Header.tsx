import { HomeIcon } from "./icons/home";
import { MessageIcon } from "./icons/message";
import { SocialIcon } from "./icons/social";
export default function Header() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center bg-white/30 px-7 py-4 backdrop-blur-md">
      <div>logo</div>
      <div className="mx-auto">
        <ul className="flex gap-10">
          <a href="">
            <li className="relative flex items-center justify-center gap-1 font-semibold ">
              <HomeIcon /> Home
            </li>
          </a>
          <a href="">
            <li className="flex items-center justify-center gap-1 font-semibold">
              <MessageIcon /> Contato
            </li>
          </a>
          <a href="">
            <li className="flex items-center justify-center gap-1 font-semibold">
              <SocialIcon /> Projetos
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
