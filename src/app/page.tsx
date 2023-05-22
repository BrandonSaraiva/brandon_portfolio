/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import Loader from "@/components/Loader";
import useMouse from "@react-hook/mouse-position";
import { useEffect, useRef, useState } from "react";

import { motion, useInView } from "framer-motion";
import { parseCookies, setCookie } from "nookies";
import Profile from "@/components/Profile";
import Header from "@/components/Header";
import { Me } from "@/Mock/me";
import { About } from "@/components/About";
import ProjectsFirst from "@/components/ProjectsFirst";
import ProjectsTwo from "@/components/ProjectsTwo";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { show_loading } = parseCookies();
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const isOnTop = useInView(topRef);
  const isOnContact = useInView(contactRef);
  const isOnAbout = useInView(aboutRef);
  const isOnProject = useInView(projectRef);
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
    footer: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#fff",
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

  function footerEnter(event: any) {
    setCursorText("");
    setCursorVariant("hidden");
  }

  function footerLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function projectEnter(event: any) {
    setCursorText("ver <br /> projeto");
    setCursorVariant("project");
  }

  function projectLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function submitButtonEnter(event: any) {
    setCursorText("✉️");
    setCursorVariant("contact");
  }

  function submitButtonLeave(event: any) {
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
  const sliderItems = [
    "Automação",
    "Node Js",
    "Web",
    "Ciência de dados",
    "Inteligência Artificial",
    "Machine Learning",
    "Python",
    "Web Scraping",
    "Linguagem C",
    "Java",
    "SAS",
    "Pandas",
    "Power BI",
    "Matplotlib",
    "PYAUTOGUI",
    "SQL",
  ];
  return (
    <div
      ref={ref}
      onMouseEnter={!isMobile ? pageEnter : () => {}}
      onMouseLeave={!isMobile ? pageLeave : () => {}}
      className="h-screen w-full"
    >
      <NextSeo
        title="Brandon Cardoso"
        description="Portfolio pessoal Brandon Cardoso"
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://brandon-portfolio-theta.vercel.app/",
          site_name: "Brandon Cardoso",
          title: "Brandon Cardoso",
          images: [
            {
              url: "/cover.jpeg",
              width: 800,
              height: 600,
              alt: "Portfolio pessoal",
            },
          ],
        }}
      />
      {showContent && (
        <>
          <Header
            isOnTop={isOnTop}
            isOnAbout={isOnAbout}
            isOnProject={isOnProject}
            isOnContact={isOnContact}
          />
          {!isMobile && (
            <motion.div
              variants={variants}
              className="pointer-events-none fixed left-0 top-0 z-40 flex h-[20px] w-[20px] flex-row content-center justify-center rounded-full bg-black text-center text-base text-white"
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
          <div
            className="mt-5 flex w-full flex-col items-center pb-52"
            id="top"
          >
            <Profile isInView={topRef} />
            <div className="flex w-full items-center justify-center overflow-hidden border-b border-t border-gray-100 bg-[#f8f8f8] py-4">
              <div className="slider flex w-full items-center justify-center gap-4 ">
                {sliderItems.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-10">
                      <span className="flex whitespace-nowrap text-gray-800 transition-colors duration-200 hover:text-gray-300">
                        {item}
                      </span>
                      {sliderItems.length - 1 == index ? (
                        ""
                      ) : (
                        <img
                          src="/icon-lightning.svg"
                          alt=""
                          className="mr-5"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-10 flex w-full items-center justify-center bg-gradient-to-b from-transparent via-[#ededed] to-transparent">
              <About isInView={aboutRef} />
            </div>

            <div className="flex w-full items-center justify-center">
              <ProjectsFirst
                isActive={projectRef}
                isMobile={isMobile}
                projectEnter={projectEnter}
                projectLeave={projectLeave}
              />
            </div>
            {/* 
            <ProjectsTwo
              isMobile={isMobile}
              projectEnter={projectEnter}
              projectLeave={projectLeave}
            /> */}
          </div>

          <div
            ref={contactRef}
            id="contact"
            className="flex w-full items-center justify-center px-4 lg:px-0"
          >
            <Footer
              isMobile={isMobile}
              footerEnter={footerEnter}
              footerLeave={footerLeave}
            />
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
