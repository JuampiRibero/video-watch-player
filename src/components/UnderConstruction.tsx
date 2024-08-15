"use client"

import { FC } from "react";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";

const UnderConstruction: FC = () => {
  const { isEnglish } = useLanguage();

  return (
    <section className="container rounded-md flex flex-col items-center py-8 md:py-12 lg:py-24 bg-white text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
        {isEnglish ? "Page under construction" : "Pagina en construcción"}
      </h1>
      <Image
        src="/under-construction.gif"
        width={500}
        height={500}
        alt={isEnglish ? "Gif showing that this page is under construction image" : "Gif mostrando que la página está en construcción"}
        title={isEnglish ? "Under construction image" : "Imagen de en construcción"}
        priority
      />
    </section>
  );
}

export default UnderConstruction;