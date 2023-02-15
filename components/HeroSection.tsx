import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  // scrolling to part of page identified by id
  return (
    <section id="home">
      <div className="flex flex-col justify-center text-center items-center my-10 py-16  md:flex-row md:space-x-4 md:text-left md:py-32">
        <div className="md:w-1/2 md:mt-8">
          <Image
            src="/balint-korosi.jpg"
            width={300}
            height={300}
            alt="Balint Korosi Portrait"
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I'm Balint!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I'm a{" "}
            <span className="font-semibold text-teal-600">
              software engineer
            </span>{" "}
            based in Hungary. Working towards creating software that mes life
            easier and more meaningful.
          </p>
          <div>
            <Link
              href="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-row">
        <Link
          href="#about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
