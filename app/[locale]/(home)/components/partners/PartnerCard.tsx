import Image from "next/image";

interface PartnerCardProps {
  name: string;
  logo: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, logo }) => (
  <div className="flex flex-col items-center justify-between md:w-72 md:h-48 w-52 h-36 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="relative w-full h-28 flex items-center justify-center">
      <Image src={logo} alt={name} fill className="object-contain p-2" />
    </div>
    <p className="text-gray-800 font-bold text-center w-full min-h-[2.5rem] flex items-center justify-center">
      <span className="text-md leading-tight">{name}</span>
    </p>
  </div>
);

export default PartnerCard;
