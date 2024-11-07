import Section from "./Section";
import Heading from "./Heading";

const teamMembers = [
  {
    name: "Ar. Prakyath R",
    position: "Managing Director & Co-Founder",
    imgSrc: <img src="src/assets/prakyathphoto.jpg" alt="Daniel Smith's profile" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
  },
  {
    name: "Ar. Sanjan R",
    position: "Managing Director & Co-Founder",
    imgSrc: <img src="src/assets/photoss.jpeg" alt="William Lucas's profile" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
  },
  {
    name: "Ar. Azeem Nawaz Khan",
    position: "Managing Director & Co-Founder",
    imgSrc: <img src="src/assets/sphoto.jpeg" alt="Daniel Jack's profile" className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
  },
];

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="team">
      <div className="container mx-auto text-center py-10">
        <Heading tag="Our Team" title="Meet Our Professional Team" />
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-80 h-96 bg-gray-800 rounded-lg overflow-hidden group"
              >
              {/* Render the image directly */}
              {member.imgSrc}

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-white text-center transition-opacity duration-300 ease-in-out group-hover:bg-opacity-80">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
