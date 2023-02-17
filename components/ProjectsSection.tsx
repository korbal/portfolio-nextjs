import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Can I Compost It?",
    description:
      "Searchable database of compostable items. Built with Nuxt.js, Google Sheets as database and Netlify for host.",
    image: "/cicidemo.gif",
    github: "https://github.com/korbal/compost-v3",
    link: "https://canicompostit.com",
  },
  {
    name: "Can I Compost It?",
    description:
      "Searchable database of compostable items. Built with Nuxt.js, Google Sheets as database and Netlify for host.",
    image: "/canicompostit.jpg",
    github: "https://github.com/korbal/compost-v3",
    link: "https://canicompostit.com",
  },
  {
    name: "Can I Compost It?",
    description:
      "Searchable database of compostable items. Built with Nuxt.js, Google Sheets as database and Netlify for host.",
    image: "/canicompostit.jpg",
    github: "https://github.com/korbal/compost-v3",
    link: "https://canicompostit.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-10">
      <h1 className="text-center font-bold text-4xl">
        My projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
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
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
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
