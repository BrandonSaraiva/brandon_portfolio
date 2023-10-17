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
          className="flex w-full max-w-5xl flex-col items-center justify-center rounded-2xl bg-gray-500 px-5 py-8 text-gray-900 lg:px-8"
        >
          <p className="text-md font-jetbrains uppercase">Enviar mensagem</p>
          <span className="mb-5 mt-5 max-w-md text-center text-2xl font-semibold lg:text-4xl">
            Gostaria de entrar em contato ?
          </span>
          <textarea
            {...register("message", {
              required: {
                value: true,
                message: "a mensagem é obrigatória.",
              },
            })}
            className={`mt-2 h-40 w-full resize-none rounded-lg border-none bg-gray-50 p-2 outline-none transition-all duration-200 placeholder:opacity-95   ${
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
              className="lg:text-md mt-5 hidden rounded-lg bg-black px-4 py-1 font-alt font-semibold text-white lg:flex lg:px-7 lg:py-2"
            >
              Enviar mensagem
            </button>
            <button
              type="submit"
              className="lg:text-md mt-5 flex rounded-lg bg-black px-4 py-1 font-alt font-semibold text-white lg:hidden lg:px-7 lg:py-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div
        onMouseEnter={!isMobile ? footerEnter : () => {}}
        onMouseLeave={!isMobile ? footerLeave : () => {}}
        className="absolute bottom-[calc(22.4%)] left-[calc(50%_-_45px)] md:bottom-[calc(23.7%)] md:left-[calc(50%_-_45px)] lg:bottom-[calc(31%)] lg:left-[calc(50%_-_45px)]"
      >
        <Connector />
      </div>

      <div
        onMouseEnter={!isMobile ? footerEnter : () => {}}
        onMouseLeave={!isMobile ? footerLeave : () => {}}
        className="flex w-full flex-col items-center rounded-2xl bg-gray-500 px-5 pb-5 pt-14  lg:px-20 lg:pb-10"
      >
        <div className="flex w-full items-center justify-between">
          <div className="hidden w-full max-w-lg gap-3 lg:flex lg:justify-around lg:gap-0">
            <a
              href={Me.linkedin}
              target="_blank"
              rel="noreferer"
              className="md:text-md flex cursor-none items-center justify-center gap-2 text-sm text-black/80 transition-colors duration-200  hover:text-black/50"
            >
              Linkedin <ArrowUp />
            </a>
            <a
              href={Me.gitHub}
              target="_blank"
              rel="nore"
              className="md:text-md flex cursor-none items-center justify-center gap-2 text-sm text-black/80 transition-colors duration-200  hover:text-black/50"
            >
              Github <ArrowUp />
            </a>
            <a
              href={Me.youtube}
              target="_blank"
              rel="nore"
              className="md:text-md flex cursor-none items-center justify-center gap-2 text-sm text-black/80 transition-colors duration-200  hover:text-black/50"
            >
              Youtube <ArrowUp />
            </a>
          </div>

          <div className="flex w-full max-w-lg gap-3 lg:hidden lg:justify-around lg:gap-0">
            <a
              href={Me.linkedin}
              target="_blank"
              rel="noreferer"
              className="md:text-md flex cursor-none items-center justify-center gap-2 text-sm text-black/80 transition-colors duration-200  hover:text-black/50"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 0C0.447715 0 0 0.447715 0 1V12C0 12.5523 0.447715 13 1 13H12C12.5523 13 13 12.5523 13 12V1C13 0.447715 12.5523 0 12 0H1ZM2.05 5H3.95V11H2.05V5ZM4.075 3.005C4.075 3.59871 3.59371 4.08 3 4.08C2.4063 4.08 1.925 3.59871 1.925 3.005C1.925 2.41129 2.4063 1.93 3 1.93C3.59371 1.93 4.075 2.41129 4.075 3.005ZM11 7.35713C11 5.55208 9.83343 4.85033 8.67449 4.85033C8.29502 4.83163 7.91721 4.91119 7.57874 5.08107C7.32172 5.21007 7.05265 5.50523 6.84516 6.01853H6.79179V5.00044H5V11.0047H6.90616V7.8112C6.8786 7.48413 6.98327 7.06142 7.19741 6.80987C7.41156 6.55832 7.71789 6.49825 7.95015 6.46774H8.02258C8.62874 6.46774 9.07859 6.84301 9.07859 7.78868V11.0047H10.9847L11 7.35713Z"
                  fill="black"
                />
              </svg>
            </a>
            <a
              href={Me.gitHub}
              target="_bl"
              rel="nore"
              className="md:text-md flex cursor-none items-center justify-center gap-2 text-sm text-black/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="black"
                />
              </svg>
            </a>
            <a
              href={Me.youtube}
              target="_bl"
              rel="nore"
              className="md:text-md flex cursor-none items-center justify-center gap-2 text-sm text-black/80 transition-colors duration-200 hover:cursor-pointer hover:text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 57 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.7704 1.19091C53.2278 1.85455 55.1592 3.79091 55.8121 6.24545C57 10.7 57 20 57 20C57 20 57 29.3 55.8121 33.7545C55.1502 36.2182 53.2187 38.1545 50.7704 38.8091C46.3272 40 28.5 40 28.5 40C28.5 40 10.6818 40 6.22956 38.8091C3.77219 38.1455 1.84076 36.2091 1.18788 33.7545C0 29.3 0 20 0 20C0 20 0 10.7 1.18788 6.24545C1.84982 3.78182 3.78126 1.84546 6.22956 1.19091C10.6818 0 28.5 0 28.5 0C28.5 0 46.3272 0 50.7704 1.19091ZM37.6131 20L22.8055 28.5727V11.4273L37.6131 20Z"
                  fill="#000000"
                />
              </svg>
            </a>
          </div>

          <h1 className="mx-auto hidden max-w-[100px] text-center text-lg font-semibold leading-5 text-black lg:flex">
            {Me.name}
          </h1>

          <div className="flex w-fit max-w-lg justify-end lg:w-full lg:justify-around">
            <a
              href="#top"
              className="md:text-md flex cursor-none gap-2 text-sm text-black/80 transition-colors duration-200  hover:text-black/50"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="md:text-md hidden cursor-none  gap-2 text-sm text-black/80 transition-colors duration-200  hover:text-black/50 lg:flex"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="md:text-md hidden cursor-none gap-2  text-sm text-black/80 transition-colors duration-200  hover:text-black/50 lg:flex"
            >
              Projetos
            </a>
          </div>
        </div>
        <div className="my-2 h-[1px] w-full bg-black/10 lg:my-6" />
        <div className="mt-2 flex w-full items-end justify-center text-sm text-black lg:mt-6">
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
      className="h-[60px] w-[90px] fill-white"
    >
      <path d="M0 0H92L90.5527 1.51457C79.5633 13.0151 80.2174 31.3135 92 42V42H0V42C13.2039 31.9029 13.8931 12.2586 1.42915 1.26102L0 0Z" />
    </svg>
  );
}
