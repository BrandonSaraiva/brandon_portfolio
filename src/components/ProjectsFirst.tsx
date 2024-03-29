import { Me } from "@/Mock/me";
import React from "react";

interface Projects {
  isMobile: any;
  projectEnter: any;
  projectLeave: any;
  isActive: any;
}

export default function ProjectsFirst({
  isMobile,
  projectEnter,
  projectLeave,
  isActive,
}: Projects) {
  return (
    <div
      id="projects"
      className="z-10 mt-48  flex w-full max-w-7xl flex-col gap-20  px-6"
    >
      <div className="flex flex-col">
        <span className="font-light uppercase">Works</span>
        <span className="mt-2 font-sans text-4xl font-semibold">
          Latest projects
        </span>
        <small className="mt-4 max-w-md font-sans text-base text-white/90">
          Recent projects, in which I applied my skills as
           data scientist. Each project represented an opportunity to
           learning and practical application of key concepts, resulting in
           functional and innovative solutions.
        </small>
      </div>

      {Me.projects.map((project) => {
        return (
          <div
            ref={isActive}
            key={project.name}
            className="flex w-full flex-col-reverse justify-between gap-4 lg:flex-row lg:gap-0 "
          >
            <div className="flex flex-col">
              <p className="text-xl font-semibold lg:text-2xl">
                {project.name}
              </p>
              <span className="lg:text-md mt-2 leading-6 text-white/80 lg:max-w-md">
                {project.description}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 cursor-none text-sm "
              >
                see github
              </a>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="h-[245px] w-full  cursor-none overflow-hidden rounded-md bg-red-500 lg:max-w-md"
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
  );
}
