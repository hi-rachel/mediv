import patents from "@/app/data/patents";

const Patents: React.FC = () => {
  return (
    <div className="space-y-4">
      {patents.map((patent, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-2">
            {patent.category}
          </span>
          <h3 className="text-xl font-semibold mb-2">{patent.title}</h3>
          <p className="text-gray-600">출원번호: {patent.patentNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default Patents;
