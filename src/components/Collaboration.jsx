import { brainwaveSymbol, check, curve } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { socials } from "../constants";
import React, { useEffect, useState } from "react";
import ClipPath from "../assets/svg/ClipPath";
import image2 from "../assets/benefits/image-2.jpg";

const Collaboration = () => {
  const [experience, setExperience] = useState(1); // Initial value for spinning effect

  useEffect(() => {
    // Spin numbers from 1 to 9, then set to 20
    const spinInterval = setInterval(() => {
      setExperience((prev) => (prev < 5 ? prev + 1 : 1)); // Cycle numbers 1 through 9
    }, 100);

    // Stop the spin and set to "20" after 2 seconds
    const stopTimeout = setTimeout(() => {
      clearInterval(spinInterval);
      setExperience(5); // Final value
    }, 2500);

    return () => {
      clearInterval(spinInterval);
      clearTimeout(stopTimeout);
    };
  }, []); 
  return (
    <Section className="overflow-hidden" id="aboutus">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="text-xl md:text-2xl mb-2 md:mb-4">
            Welcome to
            <br />
            <span className="inline-block relative">
              Sun E-Vision Arch{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h2>
          <h3 className="h2 mb-4 md:mb-8">
            Interior Design with different approach
          </h3>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Learn More </Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          {/* Photo Card */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            {/* Social Media Icons */}
            <div className="flex flex-col items-center bg-[#A67C52] p-4 space-y-4">
              <ul className="flex flex-col items-center space-y-4">
                {socials.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                  >
                    <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                  </a>
                ))}
              </ul>

            </div>

            {/* Image and Text */}
            <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
            <img
                src={image2}
                alt="Interior Design Sample"
                className="w-full object-cover rounded-md"
              />
              <div className="mt-4">
                <span className="text-2xl font-bold">{experience} +</span>
                <span className="text-xl font-semibold ml-2">Years Experience</span>
              </div>
            </div>
          </div>


        </div>
      </div>
      <ClipPath />

    </Section>
  );
};

export default Collaboration;
