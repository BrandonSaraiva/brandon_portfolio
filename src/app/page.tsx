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
import ProjectsFirst from "@/components/ProjectsFirst";
import ProjectsTwo from "@/components/ProjectsTwo";
import Footer from "@/components/Footer";

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

  return (
    <div
      ref={ref}
      onMouseEnter={!isMobile ? pageEnter : () => {}}
      onMouseLeave={!isMobile ? pageLeave : () => {}}
      className="h-screen w-full"
    >
      {showContent && (
        <>
          {/* <Header /> */}
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
            <Profile />
            <About />
            <ProjectsFirst
              isMobile={isMobile}
              projectEnter={projectEnter}
              projectLeave={projectLeave}
            />
            {/* 
            <ProjectsTwo
              isMobile={isMobile}
              projectEnter={projectEnter}
              projectLeave={projectLeave}
            /> */}
          </div>

          <div className=" flex w-full items-center justify-center px-4 lg:px-0">
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
