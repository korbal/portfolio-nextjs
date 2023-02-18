"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import GithubStreak from "../components/GithubStreak";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-4 sm:py-12 md:pt-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/balint-korosi.jpg"
            alt=""
            width={325}
            height={325}
            className=" rounded-full shadow-2xl p-1 dark:bg-orange-300 border "
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl ">
            Hi, I&#39;m Balint!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&apos;m committed to commit code for
            <span className="font-semibold text-purple-400"> 365 Days </span>
            straight on GitHub so I can expand my skills and become a proficient
            web developer.
          </p>

          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer dark:bg-red-400 dark:hover:bg-orange-300"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900">
        <GithubStreak />
      </div>

      <div className="flex flex-row items-center text-center justify-center mt-5">
        <Link
          className="cursor-pointer"
          to="about"
          activeClass="active"
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
