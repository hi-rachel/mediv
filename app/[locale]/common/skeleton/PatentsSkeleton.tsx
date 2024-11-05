const PatentsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 animate-pulse"
                >
                  {/* Date */}
                  <div className="w-28 h-6 bg-gray-200 rounded-sm mb-4" />

                  {/* Category Badge */}
                  <div className="w-14 h-6 bg-gray-200 rounded-full mb-4" />

                  {/* Title - Two lines */}
                  <div className="space-y-2 mb-8">
                    <div className="h-7 bg-gray-200 rounded w-1/2" />
                  </div>

                  {/* Patent Number */}
                  <div className="h-6 bg-gray-200 rounded w-56" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatentsSkeleton;
