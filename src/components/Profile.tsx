import { Me } from "@/Mock/me";
import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ArrowDown from "./icons/arrowDown";

export default function Profile({ isInView }: any) {
  const [offset, setOffset] = useState(0);
  const animate = {
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0,
      },
    },
  };

  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<null | any>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  useEffect(() => {
    setOffset(60);
  }, [scrollY]);
  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const yRangeImg = useTransform(scrollY, [initial, final], [offset, -90]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });
  const x = useSpring(yRangeImg, { stiffness: 900, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;

    const onResize = () => {
      setElementTop(
        element!.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <>
      <div ref={isInView} />
      <div className="-mt-15 flex h-[700px] w-full max-w-7xl flex-col items-center  justify-center bg-[url('/bg-hero-medium.svg')] bg-cover bg-center bg-no-repeat lg:-mt-10 lg:h-[980px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={animate.show}
          variants={animate}
          ref={ref}
          style={{ y: y }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h1 className="font-sans text-4xl font-semibold">
            Hi there <span className="text-xl">👋🏻 I&apos;m</span>
          </motion.h1>
          <span className="text-3xl font-semibold">{Me.name}</span>
          <span className="mt-4 text-xl">{Me.role}</span>
        </motion.div>

        {/* <span className="-rotate-90 mt-20 text-lg font-light flex flex-row-reverse items-center justify-center gap-4 w-fit">
				scroll <ArrowDown />
			</span> */}
      </div>
    </>
  );
}
