import Heading from "./Heading";
import Section from "./Section";

const steps = [
    { id: 1, title: "Visit Project", description: "Understand the workflow and processes involved in the project.", icon: "src/assets/project-management 2.png" },
    { id: 2, title: "Planning Design", description: "Outline design requirements and create a roadmap for visual and functional aspects.", icon: "src/assets/interior-design.png" },
    { id: 3, title: "Project Sketch", description: "Create preliminary drawings to illustrate core concepts and design elements.", icon: "src/assets/blueprint.png" },
    { id: 4, title: "Start Working", description: "Begin development to translate concepts into a tangible product.", icon: "src/assets/closure.png" },
];

const Progress = () => (
    <Section className="overflow-hidden">
        <div className="overflow-hidden container mx-auto md:pb-10 px-4">
            {/* Heading */}
            <Heading tag="Working Process" title="Our Working Process" />
            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center text-center">
                        {/* Number with Icon */}
                        <div className="relative mb-4">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gray-300 flex items-center justify-center bg-gray-300">
                                <img src={step.icon} alt={`${step.title} Icon`} className="w-12 h-12 sm:w-16 sm:h-16" />
                            </div>
                            <span className="absolute top-0 left-0 bg-[#D4C7A3] text-black w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">
                                {step.id < 10 ? `0${step.id}` : step.id}
                            </span>
                        </div>
                        {/* Title */}
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                        {/* Description */}
                        <p className="text-gray-500 mt-2 max-w-xs">{step.description}</p>
                    </div>
                ))}
            </div>
            {/* Contact Us Section */}
        </div>
    </Section>
);

export default Progress;
