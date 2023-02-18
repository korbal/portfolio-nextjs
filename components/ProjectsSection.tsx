import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsGithub,
  BsArrowUpRightSquare,
  BsApple,
  BsReddit,
  BsWindow,
} from "react-icons/bs";

const projects = [
  {
    name: "Can I Compost It?",
    description:
      "Find out if you can put a particular item in your home composting bin. Searchable database built with Nuxt.js, Tailwind CSS and Google Sheets as backend API. Code, copy, design and API were all developed by me. Reddit loved it.",
    extra: "Reddit loved it.",
    extralink:
      "https://www.reddit.com/r/lifehacks/comments/xicg1y/find_out_fast_if_something_can_go_into_the/",
    image: "/demo-cici.gif",
    github: "https://github.com/korbal/compost-v3",
    link: "https://canicompostit.com",
  },
  {
    name: "PagodApp Tracking",
    description:
      "I made PagodApp for my Kyokushin karate klub to monitor members' progress via a Google sheet backend and an embeddable iframe frontend. Charts were created using Chart.js.",
    image: "/demo-pagodapp.gif",
    github: "https://github.com/korbal/",
    link: "https://script.google.com/macros/s/AKfycbxbb2k-LKrYxpuzRsAFQEKRuqaNwTnrsdfdoieEnY3ADP36F3XP/exec",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-10">
      <h2 className="text-center">
        My projects
        <hr className="w-6 h-1 mx-auto my-10 bg-teal-500 border-0 rounded" />
      </h2>
      <div className="flex flex-col space-y-28 mt-8">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12 ">
                <div className="md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="md:w-1/2 flex flex-col justify-start ">
                  <h3 className=" my-6">{project.name}</h3>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  {/* <p>
                    {project.extra ? (
                      <a href="https://www.reddit.com/r/lifehacks/comments/xicg1y/find_out_fast_if_something_can_go_into_the/">
                        Reddit loved it.
                      </a>
                    ) : null}
                  </p> */}
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsWindow
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>

                    {project.extra && (
                      <Link href={project.extralink} target="_blank">
                        <BsReddit
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
