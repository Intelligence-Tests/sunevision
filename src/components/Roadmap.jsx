// import Button from "./Button";
// import Heading from "./Heading";
// import Section from "./Section";
// import Tagline from "./Tagline";
// import { roadmap } from "../constants";
// import { check2, grid, loading1 } from "../assets";
// import { Gradient } from "./design/Roadmap";
// import ClipPath from "../assets/svg/ClipPath";
// import { Link } from "react-router-dom";

// const handleClick = () => {
//   window.scrollTo(0, 0);
// }
// const Roadmap = () => (
//   <Section className="overflow-hidden" id="blog">
//     <div className="container md:pb-10">
//       <Heading tag="Latest Projects" title="Our Latest Projects and Designs" />

//       <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
//         {roadmap.map((item) => {
//           const status = item.status === "done" ? "Done" : "In progress";

//           return (
//             <div
//               className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
//                 }`}
//               key={item.id}
//             >
//               <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
//                 <div className="absolute top-0 left-0 max-w-full">
//                   {/* <img
//                     className="w-full"
//                     src={grid}
//                     width={550}
//                     height={550}
//                     alt="Grid"
//                   /> */}
//                 </div>
//                 <div className="relative z-1 ">
//                   <Gradient/>
//                   <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20 ">
//                     {/* <Tagline>{item.date}</Tagline>

//                     <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
//                       <img
//                         className="mr-2.5"
//                         src={item.status === "done" ? check2 : loading1}
//                         width={16}
//                         height={16}
//                         alt={status}
//                       />
//                       <div className="tagline">{status}</div> */}
//                     {/* </div> */}
//                   </div>
//                   <h4 className="h4 text-lg sm:text-xl md:text-2xl mb-2">{item.title}</h4>
//                   <p className="body-2 text-n-4 text-sm sm:text-base">{item.text}</p>
//                   <div className="image-container mb-10 -my-10 -mx-15 mt-10">
//                     <Link to={item.route}
//                       onClick={handleClick}
//                     >
//                       <div className="overlay-container">
//                         <img
//                           className="image-click-animation"
//                           src={item.imageUrl}
//                           alt={item.title}
//                         />
//                         <div className="overlay">
//                           {/* <h3 className="overlay-title"></h3>
//                           <p className="overlay-subtitle text-sm md:text-lg">Explore Project</p> */}
//                         </div>
//                       </div>

//                     </Link>

//                   </div>


//                 </div>
//               </div>

//             </div>
//           );
//         })}

//         <Gradient />
//       </div>

//       {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
//         <Button href="/roadmap">Our roadmap</Button>
//       </div> */}
//     </div>
//   </Section>
// );

// export default Roadmap;
import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Improved scroll handling function
  const handleClick = (route) => {
    // Option 1: Window scroll method
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Option 2: More robust scroll method
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Navigate to the specified route
    navigate(route);
  };

  return (
    <Section className="overflow-hidden" id="blog">
      <div className="container md:pb-10">
        <Heading tag="Latest Projects" title="Our Latest Projects and Designs" />
        
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="relative z-1">
                  <Gradient/>
                  
                  <h4 className="h4 text-lg sm:text-xl md:text-2xl mb-2">
                    {item.title}
                  </h4>
                  
                  <p className="body-2 text-n-4 text-sm sm:text-base">
                    {item.text}
                  </p>
                  
                  <div className="image-container mb-10 -my-10 -mx-15 mt-10">
                    {/* Use an onClick handler that passes the route */}
                    <div 
                      onClick={() => handleClick(item.route)} 
                      className="cursor-pointer"
                    >
                      <div className="overlay-container">
                        <img
                          className="image-click-animation"
                          src={item.imageUrl}
                          alt={item.title}
                        />
                        <div className="overlay">
                          {/* Optional overlay content */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;