const BusinessSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-pulse">
      {/* Tab Navigation Skeleton */}
      <div className="max-w-5xl mx-auto">
        <div className="flex border-b pb-4 border-gray-300 mb-6 gap-8 px-6 py-4">
          {[1, 2, 3].map((tab) => (
            <div key={tab}>
              <div className="h-12 w-40 bg-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-6">
          {/* Title Skeleton */}
          <div className="flex justify-center mb-12 pt-8">
            <div className="py-6 h-10 bg-gray-200 rounded w-96"></div>
          </div>

          {/* Grid Layout Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              >
                {/* Image Placeholder */}
                <div className="w-48 h-48 bg-gray-200 rounded-full mb-4"></div>

                {/* Title Placeholder */}
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>

                {/* Description Placeholder */}
                <div className="space-y-2 w-full">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSkeleton;
