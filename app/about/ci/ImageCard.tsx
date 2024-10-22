import { fadeInUp } from "@/app/utils/animations";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  darkMode?: boolean;
}

const downloadImage = (imageSrc: string, fileName: string): void => {
  fetch(imageSrc)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      link.remove();
    });
};

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  darkMode = false,
}) => (
  <motion.div
    className={`rounded-lg shadow-lg p-6 ${
      darkMode ? "bg-primary" : "bg-white"
    }`}
    variants={fadeInUp}
  >
    <h3
      className={`text-xl font-medium mb-4 ${
        darkMode ? "text-white" : "text-primary"
      }`}
    >
      {title}
    </h3>
    <div
      className={`relative w-full h-48 group ${darkMode ? "bg-primary" : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className="object-contain"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => downloadImage(src, `${alt}.png`)}
          className="bg-white text-primary py-2 px-4 rounded-full flex items-center"
        >
          <Download size={16} className="mr-2" />
          Download
        </button>
      </div>
    </div>
    <p
      className={`mt-4 text-sm ${darkMode ? "text-neutral" : "text-gray-600"}`}
    >
      {darkMode
        ? "Use the gray version of the logo on dark backgrounds."
        : "Use the standard color logo on light backgrounds."}
    </p>
  </motion.div>
);

export default ImageCard;
