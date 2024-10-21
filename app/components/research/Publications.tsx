import publications from "@/app/data/publications";
import Link from "next/link";

const Publications: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {publications.map((publication, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6">
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
              {publication.category}
            </span>
            <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
            <p className="text-gray-600 mb-2">{publication.author}</p>
            <p className="text-gray-500 text-sm">{publication.publication}</p>
          </div>
          <div className="px-6 py-4 bg-gray-50">
            <Link
              href={publication.href}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              target="_blank"
            >
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publications;
