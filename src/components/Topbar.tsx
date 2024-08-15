"use client";

import { FC } from "react";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import LanguageSelector from "./LanguageSelector";

const Topbar: FC = () => {
  return (
    <div className="bg-foreground">
      <div className="container flex justify-between items-center py-2">
        <div className="flex justify-start items-center">
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-white hover:text-gray-200 transition ease-in-out duration-500"
            >
              <AiFillTwitterSquare className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-200 transition ease-in-out duration-500"
            >
              <AiFillInstagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-200 transition ease-in-out duration-500"
            >
              <AiFillLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Topbar;
