/* eslint-disable @next/next/no-img-element */
'use client';

import Loader from '@/components/Loader';
import useMouse from '@react-hook/mouse-position';
import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { parseCookies, setCookie } from 'nookies';
import Profile from '@/components/Profile';
import Header from '@/components/Header';
import { Me } from '@/Mock/me';
export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const { show_loading } = parseCookies();
	const [showLoading, setShowLoading] = useState<null | boolean>(true);
	const [showContent, setShowContent] = useState(false);
	const [cursorText, setCursorText] = useState('');
	const [cursorVariant, setCursorVariant] = useState('hidden');
	const [isMobile, setIsMobile] = useState<Boolean | null>(false);
	const ref = useRef(null);
	const mouse = useMouse(ref, {
		enterDelay: 100,
		leaveDelay: 100,
	});
	const [mx, setMx] = useState(0);
	const [my, setMy] = useState(0);

	useEffect(() => {
		if (mouse.x !== null) {
			setMx(Number(mouse.clientX));
		}

		if (mouse.y !== null) {
			setMy(Number(mouse.clientY));
		}
	}, [mouse]);

	const variants = {
		hidden: {
			opacity: 0,
			height: 0,
			width: 0,
			x: mx,
			y: my,
			fontSize: '16px',
			backgroundColor: '#000',
			transition: {
				type: 'spring',
				mass: 0.6,
			},
		},
		default: {
			opacity: 1,
			height: 10,
			width: 10,
			fontSize: '16px',
			backgroundColor: '#000',
			x: mx,
			y: my,
			transition: {
				type: 'spring',
				mass: 0.6,
			},
		},
		project: {
			opacity: 1,
			// backgroundColor: "rgba(255, 255, 255, 0.6)",
			backgroundColor: '#000000c0',
			color: '#FFF',
			height: 80,
			width: 80,
			fontSize: '12px',
			x: mx - 32,
			y: my - 32,
		},
		contact: {
			opacity: 1,
			backgroundColor: 'black',
			color: '#000',
			height: 64,
			width: 64,
			fontSize: '32px',
			x: mx - 48,
			y: my - 48,
		},
	};

	const spring = {
		type: 'spring',
		stiffness: 500,
		damping: 28,
	};

	function pageEnter(event: any) {
		setCursorText('');
		setCursorVariant('default');
	}

	function pageLeave(event: any) {
		setCursorText('');
		setCursorVariant('hidden');
	}

	function projectEnter(event: any) {
		setCursorText('ver <br /> projeto');
		setCursorVariant('project');
	}

	function projectLeave(event: any) {
		setCursorText('');
		setCursorVariant('default');
	}

	function contactEnter(event: any) {
		setCursorText('👋');
		setCursorVariant('contact');
	}

	function contactLeave(event: any) {
		setCursorText('');
		setCursorVariant('default');
	}

	const handleLoaderLoaded = () => {
		if (isLoading) {
			setIsLoading(false);
			setTimeout(() => setShowContent(true), 450);
		}
		setTimeout(() => setShowContent(true), 450);
	};

	useEffect(() => {
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	useEffect(() => {
		if (show_loading === undefined) {
			setCookie(null, 'show_loading', 'true', {
				maxAge: 30 * 24 * 60 * 60,
				path: '/',
			});
			setShowLoading(true);
		} else {
			setShowLoading(!show_loading);
		}
	}, []);

	return (
		<div
			ref={ref}
			onMouseEnter={!isMobile ? pageEnter : () => {}}
			onMouseLeave={!isMobile ? pageLeave : () => {}}
			className="w-full h-screen"
		>
			{showContent && (
				<>
					<Header />
					{!isMobile && (
						<motion.div
							variants={variants}
							className="circle"
							animate={cursorVariant}
							transition={spring}
						>
							<span
								className="cursorText"
								dangerouslySetInnerHTML={{
									__html: cursorText,
								}}
							/>
						</motion.div>
					)}
					<div className="flex flex-col w-full items-center mt-5">
						<Profile />
						<div className="max-w-7xl w-full gap-20 flex flex-col px-6">
							<div className="flex flex-col">
								<span className="uppercase font-light">Trabalhos</span>
								<span className="font-semibold text-4xl font-sans mt-2">
									Ultimos projetos
								</span>
								<small className="max-w-md font-sans text-base text-gray-400 mt-4">
									Projetos recentes, nos quais apliquei minhas habilidades como
									desenvolvedor, Cada projeto representa uma oportunidade de aprendizado
									e aplicação prática de conceitos-chave, resultando em soluções
									funcionais e inovadoras.
								</small>
							</div>
							{Me.projects.map((project) => {
								return (
									<div
										key={project.name}
										className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row w-full justify-between"
									>
										<div className="flex flex-col">
											<p className="font-semibold text-2xl">{project.name}</p>
											<span className="lg:max-w-md mt-2 text-md text-gray-400">
												{project.description}
											</span>
											<a
												href={project.link}
												target="_blank"
												rel="noreferrer"
												className="text-sm mt-5 "
											>
												ver github
											</a>
										</div>
										<a
											href={project.link}
											target="_blank"
											rel="noreferrer"
											className="lg:max-w-md h-[245px] rounded-md w-full overflow-hidden bg-red-500"
											onMouseEnter={!isMobile ? projectEnter : () => {}}
											onMouseLeave={!isMobile ? projectLeave : () => {}}
										>
											<img
												src={project.thumbnail}
												alt=""
												className="w-full h-full object-cover"
											/>
										</a>
									</div>
								);
							})}
						</div>
					</div>
				</>
			)}

			<Loader
				isLoading={isLoading}
				setIsLoading={handleLoaderLoaded}
				isFirstLoading={showLoading}
			/>
		</div>
	);
}
