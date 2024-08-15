"use client";

import { FC } from "react";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

const Footer: FC = () => {
  const { isEnglish } = useLanguage();

  return (
    <footer className="w-full bg-background border-t py-5 mt-10 text-center">
      <div className="flex justify-center items-center gap-4 mb-5">
          <Link
            href="https://www.linkedin.com/in/juanpabloriberomazzoni/"
            target="_blank"
            className="hover:text-gray-500 transition ease-in-out duration-500"
          >
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://riberomazzoniportfolio.netlify.app/"
            target="_blank"
            className="hover:text-gray-500 transition ease-in-out duration-500"
          >
            <ImProfile className="h-6 w-6" />
          </Link>
      </div>
      <p className="text-sm">
        {isEnglish
          ? "© 2024 Juan Pablo Ribero Mazzoni. All rights reserved."
          : "© 2024 Juan Pablo Ribero Mazzoni. Todos los derechos reservados."}
      </p>
    </footer>
  );
};

export default Footer;
