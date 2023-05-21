import { Me } from "@/Mock/me";
import ArrowUp from "./icons/arrowUp";
import { FormEvent, useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
interface Projects {
  isMobile: any;
  footerEnter: any;
  footerLeave: any;
}

export default function Footer({
  isMobile,
  footerEnter,
  footerLeave,
}: Projects) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  function handleSubmitMessage(values: any) {
    window.location.href = `mailto:${Me.email}?body=${values.message}&subject=Novo%20Contato`;
    resetField("message");
  }

  return (
    <div className="relative mb-4 mt-auto flex w-full max-w-screen-2xl flex-col gap-7">
      <div id="teste" className="flex w-full items-center justify-center">
        <form
          onMouseEnter={!isMobile ? footerEnter : () => {}}
          onMouseLeave={!isMobile ? footerLeave : () => {}}
          onSubmit={handleSubmit(handleSubmitMessage)}
          className="flex w-full max-w-5xl flex-col items-center justify-center rounded-2xl bg-gray-900 px-5 py-8 text-white lg:px-16"
        >
          <p className="text-md font-jetbrains uppercase">contato</p>
          <span className="mb-5 mt-5 max-w-md text-center font-alt text-2xl font-semibold lg:text-4xl">
            Gostaria de entrar em contato ?
          </span>
          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "a mensagem é obrigatória.",
              },
            })}
            className={`mt-2 h-40 w-full resize-none rounded-lg border-none bg-gray-700 p-2 outline-none transition-all duration-200 placeholder:opacity-95 hover:cursor-pointer  ${
              errors.message
                ? "ring-2 ring-red-500"
                : "focus:ring-2 focus:ring-blue-800"
            }`}
            placeholder="Digite sua mensagem"
          />
          <div className=" flex w-full items-start justify-between">
            <span className="mt-2 text-xs text-red-500">
              {errors.message && errors.message.message?.toString()}
            </span>

            <button
              type="submit"
              className="lg:text-md mt-5 hidden rounded-lg bg-white px-4 py-1 font-alt font-semibold text-black lg:flex lg:px-7 lg:py-2"
            >
              Enviar mensagem
            </button>
            <button
              type="submit"
              className="lg:text-md mt-5 flex rounded-lg bg-white px-4 py-1 font-alt font-semibold text-black lg:hidden lg:px-7 lg:py-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div
        onMouseEnter={!isMobile ? footerEnter : () => {}}
        onMouseLeave={!isMobile ? footerLeave : () => {}}
        className="absolute bottom-[calc(20.4%)] left-[calc(50%_-_45px)] md:bottom-[calc(23.7%)] md:left-[calc(50%_-_45px)] lg:bottom-[calc(31%)] lg:left-[calc(50%_-_45px)]"
      >
        <Connector />
      </div>
      {/* <div
        onMouseEnter={!isMobile ? footerEnter : () => {}}
        onMouseLeave={!isMobile ? footerLeave : () => {}}
        className="flex w-full flex-col items-center rounded-2xl bg-gray-900 px-5 pb-5 pt-14 lg:px-20 lg:pb-10"
      >
        <div className="flex w-full items-center justify-between">
          <a
            href={Me.linkedin}
            target="_blank"
            rel="noreferer"
            className="md:text-md  flex items-center justify-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
          >
            Linkedin <ArrowUp />
          </a>
          <a
            href={Me.gitHub}
            target="_bl"
            rel="nore"
            className="md:text-md  flex items-center justify-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
          >
            Github <ArrowUp />
          </a>
          <h1 className="-ml-[56px] hidden max-w-[100px] text-center text-lg font-semibold leading-5 text-white lg:flex">
            {Me.name}
          </h1>

          <a
            href={Me.youtube}
            target="_bl"
            rel="nore"
            className="md:text-md  flex items-center justify-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
          >
            Youtube <ArrowUp />
          </a>
          <a
            href="#"
            target="_bl"
            rel="nore"
            className="md:text-md  flex items-center justify-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
          >
            subir
          </a>
        </div>
        <div className="my-2 h-[1px] w-full bg-white/10 lg:my-6" />
        <div className="mt-2 flex w-full items-end justify-center text-sm text-white lg:mt-6">
          <span>&copy; Made by {Me.name} 2023</span>
        </div>
      </div> */}
      <div
        onMouseEnter={!isMobile ? footerEnter : () => {}}
        onMouseLeave={!isMobile ? footerLeave : () => {}}
        className="flex w-full flex-col items-center rounded-2xl bg-gray-900 px-5 pb-5 pt-14 lg:px-20 lg:pb-10"
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full max-w-lg gap-3 lg:justify-around lg:gap-0">
            <a
              href={Me.linkedin}
              target="_blank"
              rel="noreferer"
              className="md:text-md  flex items-center justify-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
            >
              Linkedin <ArrowUp />
            </a>
            <a
              href={Me.gitHub}
              target="_bl"
              rel="nore"
              className="md:text-md  flex items-center justify-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
            >
              Github <ArrowUp />
            </a>
            <a
              href={Me.youtube}
              target="_bl"
              rel="nore"
              className="md:text-md  flex items-center justify-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
            >
              Youtube <ArrowUp />
            </a>
          </div>
          <h1 className="mx-auto hidden max-w-[100px] text-center text-lg font-semibold leading-5 text-white lg:flex">
            {Me.name}
          </h1>

          <div className="flex w-fit max-w-lg justify-end lg:w-full lg:justify-around">
            <a
              href="#top"
              className="md:text-md hidden  gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white lg:flex"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="md:text-md  hidden  gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white md:flex"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="md:text-md  flex  gap-2 text-sm text-white/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
            >
              Projetos
            </a>
          </div>
        </div>
        <div className="my-2 h-[1px] w-full bg-white/10 lg:my-6" />
        <div className="mt-2 flex w-full items-end justify-center text-sm text-white lg:mt-6">
          <span>&copy; Made by {Me.name} 2023</span>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <svg
      viewBox="0 0 92 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[60px] w-[90px] fill-gray-900"
    >
      <path d="M0 0H92L90.5527 1.51457C79.5633 13.0151 80.2174 31.3135 92 42V42H0V42C13.2039 31.9029 13.8931 12.2586 1.42915 1.26102L0 0Z" />
    </svg>
  );
}
