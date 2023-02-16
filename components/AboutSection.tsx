import React from "react";
import Image from "next/image";

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
        <h1 className="text-center font-bold text-4xl">
          About me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h2>
            <p>
              Lorem. ipsum dolor sit amet consectetur adipisicing elit. Quia
              doloribus unde blanditiis commodi minus doloremque nisi omnis, ea
              et fugit numquam repellendus, vitae, voluptates eveniet iste.
              officiis similique dolorum explicabo!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad
              omnis sed pariatur accusamus. Animi autem, enim in ducimus illum,
              natus laborum expedita tempora, dolor quisquam ea et voluptate
              quae.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ad
              omnis sed pariatur accusamus. Animi autem, enim in ducimus illum,
              natus laborum expedita tempora, dolor quisquam ea et voluptate
              quae.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
              My skills
            </h2>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div>
              <Image
                src="/desktop-computer.jpg"
                alt=""
                width={325}
                height={325}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
