import { ColorPalette } from "../../data/ci";
import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const ColorCard: React.FC<ColorPalette> = ({ name, color }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = (color: string): void => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <motion.div className="text-center" variants={fadeInUp}>
      <div
        className="w-full h-24 rounded-t-lg cursor-pointer relative group"
        style={{ backgroundColor: color }}
        onClick={() => copyColor(color)}
      >
        <div className="rounded-lg absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white">Click to copy</span>
        </div>
      </div>
      <div className="bg-white rounded-b-lg shadow-lg p-4">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-600 flex items-center justify-center">
          {color}
          {copiedColor === color && (
            <Check size={16} className="ml-2 text-green-500" />
          )}
        </p>
      </div>
    </motion.div>
  );
};

export default ColorCard;
