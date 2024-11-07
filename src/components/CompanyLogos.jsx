import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/100">
      Turning your dreams into reality with innovative design. 
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={534} height={28} alt={logo} style={{ marginLeft: '40px' }} />

          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
