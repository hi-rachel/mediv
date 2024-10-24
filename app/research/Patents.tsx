import patents from "@/app/data/patents";
import { getMonthName } from "../utils/helpers";

const Patents: React.FC = () => {
  return (
    <div className="space-y-4">
      {patents.map((patent, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-sm text-gray-500 rounded-sm bg-gray-50 p-1 mb-4 w-fit">
            {getMonthName(patent.month)}. {patent.year}
          </div>

          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            {patent.category}
          </span>
          <h3 className="text-xl font-semibold mb-8">{patent.title}</h3>
          <p className="text-gray-600">출원번호: {patent.patentNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default Patents;
