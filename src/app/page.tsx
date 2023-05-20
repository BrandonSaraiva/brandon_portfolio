/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import Loader from "@/components/Loader";
import useMouse from "@react-hook/mouse-position";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { parseCookies, setCookie } from "nookies";
import Profile from "@/components/Profile";
import Header from "@/components/Header";
import { Me } from "@/Mock/me";
import { About } from "@/components/About";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { show_loading } = parseCookies();
  const [showLoading, setShowLoading] = useState<null | boolean>(true);
  const [showContent, setShowContent] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("hidden");
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
      fontSize: "16px",
      backgroundColor: "#000",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#000",
      x: mx,
      y: my,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#000000c0",
      color: "#FFF",
      height: 80,
      width: 80,
      fontSize: "12px",
      x: mx - 32,
      y: my - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "black",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mx - 48,
      y: my - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function pageEnter(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function pageLeave(event: any) {
    setCursorText("");
    setCursorVariant("hidden");
  }

  function projectEnter(event: any) {
    setCursorText("ver <br /> projeto");
    setCursorVariant("project");
  }

  function projectLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event: any) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
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
      setCookie(null, "show_loading", "true", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setShowLoading(true);
    } else {
      setShowLoading(!show_loading);
    }
    if (!isMobile && !show_loading) {
      setCursorVariant("default");
    }
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={!isMobile ? pageEnter : () => {}}
      onMouseLeave={!isMobile ? pageLeave : () => {}}
      className="h-screen w-full"
    >
      {showContent && (
        <>
          <Header />
          {!isMobile && (
            <motion.div
              variants={variants}
              className="pointer-events-none fixed left-0 top-0 z-10 flex h-[20px] w-[20px] flex-row content-center justify-center rounded-full bg-black text-center text-base text-white"
              animate={cursorVariant}
              transition={spring}
            >
              <span
                className="pointer-events-none m-auto flex-auto text-inherit"
                dangerouslySetInnerHTML={{
                  __html: cursorText,
                }}
              />
            </motion.div>
          )}
          <div className="mt-5 flex w-full flex-col items-center">
            <Profile />
            <About />
            <div className="-mt-60 flex w-full max-w-7xl flex-col gap-20 px-6">
              <div className="flex flex-col">
                <span className="font-light uppercase">Trabalhos</span>
                <span className="mt-2 font-sans text-4xl font-semibold">
                  Ultimos projetos
                </span>
                <small className="mt-4 max-w-md font-sans text-base text-gray-400">
                  Projetos recentes, nos quais apliquei minhas habilidades como
                  desenvolvedor, Cada projeto representa uma oportunidade de
                  aprendizado e aplicação prática de conceitos-chave, resultando
                  em soluções funcionais e inovadoras.
                </small>
              </div>
              {Me.projects.map((project) => {
                return (
                  <div
                    key={project.name}
                    className="flex w-full flex-col-reverse justify-between gap-4 lg:flex-row lg:gap-0"
                  >
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold lg:text-2xl">
                        {project.name}
                      </p>
                      <span className="lg:text-md mt-2 text-gray-400 lg:max-w-md">
                        {project.description}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 text-sm "
                      >
                        ver github
                      </a>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="h-[245px] w-full overflow-hidden rounded-md bg-red-500 lg:max-w-md"
                      onMouseEnter={!isMobile ? projectEnter : () => {}}
                      onMouseLeave={!isMobile ? projectLeave : () => {}}
                    >
                      <img
                        src={project.thumbnail}
                        alt=""
                        className="h-full w-full object-cover"
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
