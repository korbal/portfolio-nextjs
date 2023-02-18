import React from "react";
import Image from "next/image";

const beliefs = [
  {
    belief: "Saying no",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, at.",
  },
  {
    belief: "Avoid noise",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, at.",
  },
  {
    belief: "Stay curious",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, at.",
  },
];

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "React" },
  { skill: "Vue" },
  { skill: "Next.js" },
  { skill: "Nuxt.js" },
  { skill: "Tailwind CSS" },
  { skill: "Github" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-4 md:pb-20">
        <h2 className="text-center">
          About me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h2>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h3 className="text-center  mb-6 md:text-left">What I do</h3>
            <p>
              I&#39;m Balint, a self-taught coder with a TAFE diploma in
              Business Programming. I love solving real-world problems through
              data, code and automations. I&#39;m obsessed with optimization and
              running the leanest possible tech stack.
            </p>
            <br />
            <p>
              In addition to my passion for coding, I&#39;m also a full-stack
              solopreneur with over a decade of experience running online
              businesses.
            </p>
            <br />
            <p>
              I&#39;m committed to taking my programming skills to the next
              level. That&#39;s why I&#39;m coding every day for a year. Thanks
              for stopping by my website.
            </p>
            <br />

            <p>
              <a
                href="mailto:balint.j.korosi@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Say hi in email
              </a>{" "}
              if you think we have things in common!
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-center  mb-6 md:text-left">My skills</h3>

            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold dark:text-gray-500"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div>
              {/* <Image
                src="/desktop-computer.jpg"
                alt=""
                width={325}
                height={325}
              ></Image> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
