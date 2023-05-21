/* eslint-disable react/no-unescaped-entities */
import { Me } from "@/Mock/me";
import { stylesWithCssVar } from "@/utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.5],
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
    [0.7, 0.8, 0.9],
    [0, 1, 0]
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
      className="flex h-[350vh] w-full max-w-7xl flex-col items-center justify-start"
    >
      <div className="sticky top-[16.7vh] flex h-[66.8vh] w-full flex-col justify-center px-16">
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8 text-black lg:w-fit lg:px-0"
        >
          <span className="text-4xl font-semibold text-black">
            Olá visitante prazer <span className="text-xl"> 👋🏻 😄</span>
          </span>
          <br />
          <span className="mt-2 flex max-w-3xl text-lg">
            Me chamo {Me.name}, atualmente estou no terceiro semestre da
            faculdade de Data Science and Artificial Intelligence pelo centro
            universitário IESB.
          </span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y,
          })}
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8 text-black lg:w-fit lg:px-0"
        >
          <span className="text-4xl font-semibold text-black">
            Sobre mim 👨🏻‍💻
          </span>
          <br />
          <span className="mt-2 flex max-w-3xl text-lg">
            Descobri na área de Ciência de Dados uma forma de unir minha paixão
            por tecnologia e minha curiosidade em entender o mundo, atualmente o
            profissional de Dados se faz cada vez mais importante, por isso me
            sinto honrado em poder contribuir de alguma forma para o
            desenvolvimento da sociedade através dessa área.
          </span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            "--y": text3Y,
          })}
          className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-8 text-black lg:w-fit lg:px-0"
        >
          <span className="text-4xl font-semibold text-black">Atualmente</span>
          <br />
          <span className="mt-2 flex max-w-3xl text-lg">
            No atual momento estou estudando bastante sobre Bot's , Web Scraping
            e automação, utilizando bibliotecas como Selenium, Beautiful Soup,
            pandas, PyAutoGUI e Bot API.
          </span>
        </motion.p>
      </div>
    </section>
  );
};
