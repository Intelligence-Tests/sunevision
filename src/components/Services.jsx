import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices } from "../constants";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section>
      <div className="container">
        <Heading tag="Why Choose Us" title="Why Choose Sun E-Vision Arch" />

        <div className="relative">
          {/* Flex Layout to reorder in mobile view */}
          <div className="flex flex-col-reverse md:flex-row items-center h-auto md:h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {/* Text section */}
            <div className="relative z-1 max-w-[17rem] ml-auto mb-8 md:mb-0">
              <h4 className="h4 mb-4">Expert design, lasting impact.</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Sun E-Vision Arch creates innovative designs that combine beauty and practicality.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image section */}
            <div className="relative z-1 w-full md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>
          </div>

          {/* Additional content */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">We are expert in</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Decoration Art, 2D/3D Designs, Interior Work
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
