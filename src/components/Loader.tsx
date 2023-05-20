import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { setCookie } from 'nookies';

export default function Loader({
	isLoading,
	setIsLoading,
	isFirstLoading,
}: any) {
	useEffect(() => {
		setTimeout(() => {
			setIsLoading();
		}, 5500);
	}, [setIsLoading]);
	if (!isFirstLoading) {
		setIsLoading();
	}
	const [text, setText] = useState('show');
	const [text2, setText2] = useState('');

	const animate = {
		show: {
			opacity: 1,
			transition: {
				duration: 2,
				ease: 'easeInOut',
			},
			y: 0,
		},
		hidden: {
			opacity: 0,
			y: -100,
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
				delay: 0,
			},
		},
	};
	const animate2 = {
		show: {
			opacity: 1,
			transition: {
				duration: 2,
				delay: 0.5,
				ease: 'easeInOut',
			},
		},
		hidden: {
			opacity: 0,
			y: -100,
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
				delay: 0.5,
			},
		},
	};

	function showLoading() {
		setCookie(null, 'show_loading', 'false', {
			maxAge: 60 * 60 * 24 * 7, // 1 week
			path: '/',
		});
	}

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className={`${
						isFirstLoading ? 'bg-gray-900' : 'bg-white/30 backdrop-blur-md'
					}  relative w-screen flex flex-col gap-2 justify-center items-center h-screen overflow-hidden cursor-none`}
					key="motiondivleave"
					exit={isFirstLoading ? { scale: 0 } : { opacity: 0, display: 'none' }}
					transition={{
						duration: 0.45,
						ease: 'easeInOut',
					}}
				>
					<motion.span
						className="text-white text-xl md:text-4xl absolute top-1/2 text-center"
						initial={{ opacity: 0 }}
						animate={text}
						variants={animate}
						onAnimationComplete={() => (setText('hidden'), setText2('show'))}
					>
						Olá Prazer 👋🏻
					</motion.span>

					<motion.span
						className="text-white text-xl md:text-4xl absolute top-1/2"
						initial={{ opacity: 0 }}
						animate={text2}
						variants={animate2}
						onAnimationComplete={() => (setText2('hidden'), showLoading())}
					>
						Seja Bem vindo ao meu portfolio 😄
					</motion.span>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
