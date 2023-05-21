/* eslint-disable @next/next/no-img-element */
import { Me } from "@/Mock/me";
import React from "react";

interface Projects {
  isMobile: any;
  projectEnter: any;
  projectLeave: any;
}

export default function ProjectsTwo({
  isMobile,
  projectEnter,
  projectLeave,
}: Projects) {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-20 px-6">
      <div className="flex flex-col">
        <span className="font-light uppercase">Trabalhos</span>
        <span className="mt-2 font-sans text-4xl font-semibold">
          Ultimos projetos
        </span>
        <small className="mt-4 max-w-md font-sans text-base text-gray-400">
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
            className="mb-10 flex w-full flex-col-reverse justify-between gap-4 rounded-lg p-4 transition-all duration-200 hover:shadow-lg hover:first:shadow-black/10 lg:flex-row lg:gap-0"
          >
            <div className="flex flex-col ">
              <p className="text-xl font-semibold lg:text-2xl">
                {project.name}
              </p>
              <span className="lg:text-md mt-2 leading-6 text-gray-400 lg:max-w-md">
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
              className="flex h-[245px] w-full overflow-hidden rounded-lg bg-red-500 transition-all duration-200 hover:shadow-lg hover:shadow-black/10 lg:max-w-md"
              onMouseEnter={!isMobile ? projectEnter : () => {}}
              onMouseLeave={!isMobile ? projectLeave : () => {}}
            >
              <img
                src={project.thumbnail}
                alt=""
                className="h-full w-full object-cover "
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
