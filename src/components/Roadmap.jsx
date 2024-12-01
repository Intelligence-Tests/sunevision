import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";

const Roadmap = ({ route }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  }
  return (
    <Section className="overflow-hidden" id="blog">
      <div className="container md:pb-10">
        <Heading tag="Latest Projects" title="Our Latest Projects and Designs" />
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <Gradient />
                  <div className="relative z-1">
                    <h4 className="h4 text-lg sm:text-xl md:text-2xl mb-2">{item.title}</h4>
                    <p className="body-2 text-n-4 text-sm sm:text-base">{item.text}</p>
                    <div className="image-container mb-10 -my-10 -mx-15 mt-10">
                      <Link to={item.route} onClick={handleClick}>
                        <div className="overlay-container">
                          <img
                            className="image-click-animation"
                            src={item.imageUrl}
                            alt={item.title}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
