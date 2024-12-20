import { items } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";
import { Link } from "react-router-dom";

const Benefits = ({ route }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  }
  return (
    <Section id="services">
      <div className="container relative z-2">
        <Heading title="What We Do" />
        <Heading title="The best services we provide" />

        {/* Update to use grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {items.map((item) => (
            <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
              zIndex: 1,
            }}
            key={item.id}
          >          
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="rounded-lg"
                  />
                  <Link
                    to={item.route}
                    onClick={handleClick}
                    className="ml-auto font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Explore more
                  </Link>

                </div>
              </div>



              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

