/* eslint-disable react/no-unescaped-entities */
import { Me } from "@/Mock/me";
import { stylesWithCssVar } from "@/utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const About = ({ isInView }: any) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [0, 1, 1, 0.5]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );

  return (
    <section
      ref={targetRef}
      id="about"
      className="flex h-[280vh] w-full max-w-7xl flex-col items-center justify-start bg-transparent"
    >
      <div
        ref={isInView}
        className="sticky top-[16.7vh] flex h-[66.8vh] w-full flex-col justify-center px-16 bg-transparent"
      >
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8 text-white lg:w-fit lg:px-0 bg-transparent"
        >
          <span className="text-4xl font-semibold text-white">
            Hello visitor, nice to see you. <span className="text-xl"> 👋🏻 😄</span>
          </span>
          <br />
          <span className="mt-2 flex max-w-3xl text-lg">
            My name is {Me.name}, I'm currently in the fourth semester of
             faculty of Data Science and Artificial Intelligence at the center
             university IESB.
          </span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y,
          })}
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8 text-white lg:w-fit lg:px-0"
        >
          <span className="text-4xl font-semibold text-white">
            About me 👨🏻‍💻
          </span>
          <br />
          <span className="mt-2 flex max-w-3xl text-lg">
           I discovered in the area of Data Science a way to combine my passion for technology and my curiosity in understanding the world.
             Today in the era of (mis)information, Data professionals are becoming increasingly important, whether for companies, governments or even ordinary citizens, which is why I feel honored to be able to contribute in some way to the development of society through this area. .
          </span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            "--y": text3Y,
          })}
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8 text-white lg:w-fit lg:px-0"
        >
          <span className="text-4xl font-semibold text-white">Atualmente</span>
          <br />
          <span className="mt-2 flex max-w-3xl text-lg">
            I am currently developing the ELK toolset (Elasticsearch, Logstash, Kibana) for data processing and dashboard development.
          </span>
        </motion.p>
      </div>
    </section>
  );
};
