import Image from "next/image";

interface PartnerCardProps {
  name: string;
  logo: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ name, logo }) => (
  <div className="flex flex-col items-center justify-center w-72 h-40 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
    <div className="p-4 w-full h-32 relative mb-4">
      <Image
        className="object-contain px-4"
        src={logo}
        alt={name}
        layout="fill"
      />
    </div>
    <p className="text-gray-800 font-bold text-center text-lg mt-2 break-keep w-full">
      {name}
    </p>
  </div>
);

export default PartnerCard;
