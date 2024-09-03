'use client';

import { useRef, useEffect } from "react";
import Image from "next/image";

const LandingPage = () => {

  const offerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Ensure the video is muted
      video.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const scrollToOffer = () => {
    if (offerRef.current) {
      const elementPosition = offerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2) + (offerRef.current.offsetHeight / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col items-center p-2 w-full">
      <section className="flex flex-col items-center w-full">
        <div className="flex justify-center w-full bg-white py-2 rounded">
          <h2 className="text-black font-extrabold text-lg">PRODUS</h2>
        </div>
        <div>
          <video
            ref={videoRef}
            className="flex justify-center max-w-96"
            playsInline
            loop
            autoPlay
            muted
            preload="auto"
            tabIndex={-1}
          >
            <source src="/main.mp4" type="video/mp4" />
          </video>
          <div className="relative -top-28 flex flex-col items-center text-center gap-3">
            <h1 className="font-medium text-3xl tracking-wide">PRODUS CLUB</h1>
            <p className="font-sans font-thin text-base">
              Sente que está preso, não importa o quanto tente?
              <br />É porque você está fazendo tudo sozinho.
            </p>
            <button
              onClick={scrollToOffer}
              className="bg-white text-black py-2 px-7 mt-5 rounded-full text-center"
            >
              SE TORNE MEMBRO
            </button>
          </div>
        </div>
      </section>

      <section className="relative -top-16 flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-5 bg-[#181818] px-10 py-10 text-center rounded-lg">
          <h3 className="font-medium text-2xl">Aulas Semanais Com o Marcelo</h3>
          <p className="text-[16.8px] font-sans font-thin text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            architecto, sequi ex eaque impedit modi?
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 bg-[#181818] px-10 py-10 text-center rounded-lg">
          <h3 className="font-medium text-2xl">Material Exclusivo</h3>
          <p className="text-[16.8px] font-sans font-thin text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            architecto, sequi ex eaque impedit modi?
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 bg-[#181818] px-10 py-10 text-center rounded-lg">
          <h3 className="font-medium text-2xl">Clube do Livro</h3>
          <p className="text-[16.8px] font-sans font-thin text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            architecto, sequi ex eaque impedit modi?
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 bg-slate-200 px-10 py-10 text-center rounded-lg">
          <h3 className="font-medium text-2xl text-black">Comunidade</h3>
          <p className="text-[16.8px] font-sans font-light text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            architecto, sequi ex eaque impedit modi?
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center text-center gap-5">
        <h2 className="text-2xl font-bold px-10">
          Formando a próxima geração de Estudantes de Elite
        </h2>
        <p className="font-sans font-thin px-3">
          Domine as habilidades que vão te tornar bem-sucedido(a) nos estudos (e
          na vida):
        </p>
        <div className="h-[1px] bg-gray-400 w-56 mx-24"></div>
        <ul className="flex flex-col gap-2 [&>*:nth-child(odd)]:text-white [&>*:nth-child(even)]:text-gray-400 text-lg">
          <li>- Técnicas de Estudos -</li>
          <li>- Foco & Atenção -</li>
          <li>- Genrenciamento de Tempo -</li>
          <li>- Construçã0 de Rotina -</li>
          <li>- Sistemas de Produtividade -</li>
          <li>- Criação de Hábitos -</li>
          <li>- Comunicação -</li>
          <li>- Inteligência Emocional -</li>
          <li>- I.A. nos estudos -</li>
        </ul>

        <div className="h-[1px] bg-gray-400 w-56"></div>

      </section>

      <section id="offer" ref={offerRef} className="flex flex-col items-start w-full py-12 mb-10">
        <div className="px-8 bg-[#141414] w-full py-8 rounded-2xl">
          <div>
            <h6 className="border rounded-xl py-1 px-2 text-xs w-fit">
              OFERTA ESPECIAL
            </h6>
            <h3 className="text-2xl mt-3">Plano Mensal</h3>
          </div>

          <span className="flex h-[.5px] w-full bg-[#282828] my-6"></span>

          <div className="grid grid-cols-2 gap-y-5">
            <div className="flex gap-2 items-center font-sans font-thin text-sm">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h4>Todas as aulas</h4>
            </div>

            <div className="flex gap-2 items-center font-sans font-thin text-sm">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h4>Materias de Apoio</h4>
            </div>

            <div className="flex gap-2 items-center font-sans font-thin text-sm">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h4>Livros selecionados</h4>
            </div>

            <div className="flex gap-2 items-center font-sans font-thin text-sm">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h4>Sabedoria & Insights</h4>
            </div>

            <div className="flex gap-2 items-center font-sans font-thin text-sm">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h4>Comunidade Privada</h4>
            </div>

            <div className="flex gap-2 items-center font-sans font-thin text-sm">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h4>Wallpapers</h4>
            </div>

            <div className="flex gap-2 items-center font-sans font-thin text-sm">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h4>7 dias de garantia</h4>
            </div>
          </div>

          <span className="flex h-[.5px] w-full bg-[#282828] my-8"></span>

          <div className="flex justify-between items-center">
            <p className="font-sans font-medium">
              R$ 39,90 <span className="text-[#545454]">/ mês</span>
            </p>
            <a
              href="#"
              className="flex bg-[#ddff44] text-black py-2 px-2 font-medium rounded-3xl"
            >
              Comece agora
              <span className="ml-1">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full">
            <h2 className="w-full text-center mb-6 mt-4 text-2xl">Se inscreva na nossa newsletter</h2>
            <Image className="rounded-lg" width={414} height={111.31} src="/papers.png" alt="paper" />
            <p className="font-sans font-thin my-6 text-center px-12">Tenha acesso à Sabedoria Semanal para ajudar você a crescer e se desenvolver ao longo de sua jornada.</p>
            <form className="flex flex-col items-center px-4 w-full" action="">
              <input type="email" placeholder="Digite seu e-mail" className="bg-black border-[0.1em] border-[rgb(90,90,103)] w-full h-10 rounded-lg px-4" />
              <button className="bg-[#3c3c3a] text-white py-3 px-4 rounded-3xl mt-4">Inscrever-se</button>
            </form>
      </section>

      <footer className="mt-24">
        <div className="flex justify-center items-center w-full py-4">
          <p className="text-white font-sans font-thin text-xs">
            © 2024 PRODUS GROUP. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
