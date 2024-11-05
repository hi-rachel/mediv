const AwardsAndCertificationsSkeleton = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Awards Section Skeleton */}
        <section className="mb-16">
          {/* Section Title */}
          <div className="h-14 w-48 bg-gray-200 rounded-lg mb-8 animate-pulse" />

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative p-4 pb-10"
              >
                {/* Year */}
                <div className="h-8 w-20 bg-gray-200 rounded mb-2 animate-pulse" />

                {/* Title */}
                <div className="h-6 w-full bg-gray-200 rounded mb-4 animate-pulse" />
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse" />

                {/* Blue Line */}
                <div className="w-16 h-1 bg-gray-200 mb-4 animate-pulse" />

                {/* Trophy Icon Placeholder */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded bg-gray-200 animate-pulse" />
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section Skeleton */}
        <section>
          {/* Section Title */}
          <div className="h-14 w-20 bg-gray-200 rounded-lg mb-8 animate-pulse" />

          {/* Certifications Grid */}
          <div className="flex flex-wrap gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                {/* Certificate Image Placeholder */}
                <div className="w-64 h-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />

                {/* Certificate Title */}
                <div className="h-6 w-48 bg-gray-200 rounded mx-auto animate-pulse" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AwardsAndCertificationsSkeleton;
