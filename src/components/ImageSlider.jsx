import Heading from "./Heading";
import Section from "./Section";
import ReactCompareImage from 'react-compare-image';

const Image = () => (
    <Section className="overflow-hidden">
        <div className="container mx-auto md:pb-10 px-4 flex items-center justify-center">

            {/* Centered container for Heading and Image Comparison */}
            <div className="w-[900px] h-[300px] mt-[10vh] mb-[5vh] mx-auto flex items-center justify-center">

                {/* React Compare Image Component */}
                <ReactCompareImage 
                    leftImage="src/assets/services/service-1.jpg" 
                    rightImage="src/assets/services/service-2.jpg" 
                />
            </div>

        </div>
    </Section>
);

export default Image;
