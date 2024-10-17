import Image from "next/image";

interface PartnerCardProps {
  name: string;
  logo: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, logo }) => (
  <div className="flex flex-col items-center justify-center w-72 h-40 bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="p-4 w-full h-32 relative mb-4">
      <Image
        className="px-4"
        src={logo}
        alt={name}
        layout="fill"
        objectFit="contain"
      />
    </div>
    <p className="text-gray-800 font-bold text-center text-lg mt-2 break-keep w-full">
      {name}
    </p>
  </div>
);

export default PartnerCard;
