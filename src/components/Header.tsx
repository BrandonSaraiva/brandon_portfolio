import { HomeIcon } from './icons/home';
import { MessageIcon } from './icons/message';
import { SocialIcon } from './icons/social';
export default function Header() {
	return (
		<div className="w-full flex fixed top-0 items-center px-7 py-4 bg-white/30 backdrop-blur-md z-50">
			<div>logo</div>
			<div className="mx-auto">
				<ul className="flex gap-10">
					<a href="">
						<li className="flex items-center relative justify-center gap-1 font-semibold ">
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
