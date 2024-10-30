const AboutSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 animate-pulse">
      {/* Tab Navigation Skeleton */}
      <div className="max-w-5xl mx-auto">
        <div className="flex border-b border-gray-300 gap-8 px-6 py-4">
          {[1, 2, 3, 4].map((tab) => (
            <div key={tab}>
              <div className="h-12 w-24 bg-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Vision Content Skeleton */}
        <div className="max-w-6xl mx-auto p-6">
          {/* Vision Title */}
          <div className="text-center py-10">
            <div className="h-12 bg-gray-200 rounded w-56 mx-auto"></div>
          </div>

          {/* Vision Content with Logo */}
          <div className="flex flex-col items-center justify-center mb-20">
            {/* Logo Placeholder */}
            <div className="w-[300px] h-[250px] bg-gray-200 rounded-md mb-6"></div>

            {/* Vision Text Content */}
            <div className="text-center w-full max-w-2xl mb-16">
              <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-full mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-full mx-auto"></div>
            </div>
          </div>

          <hr className="mb-20" />

          {/* Core Values Section */}
          <div className="pt-4 pb-12">
            {/* Core Values Title */}
            <div className="text-center mb-16">
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto"></div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon Placeholder */}
                    <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0"></div>
                    <div className="flex-1">
                      {/* Title Placeholder */}
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                      {/* Description Placeholder */}
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
