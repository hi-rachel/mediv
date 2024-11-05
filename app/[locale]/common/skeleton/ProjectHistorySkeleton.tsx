const ProjectHistorySkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Tag Filter Skeleton */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-full py-2 px-4 bg-gray-200 h-9 w-16"
          />
        ))}
      </div>

      {/* Project Cards Grid Skeleton */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="flex flex-col h-full">
              {/* Content Area */}
              <div className="flex-grow p-4">
                {/* Title */}
                <div className="h-7 bg-gray-200 rounded w-3/4 mb-4" />

                {/* Year Badge */}
                <div className="w-16 h-6 bg-gray-200 rounded-full mb-3" />

                {/* Description */}
                <div className="space-y-3 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                  <div className="h-4 bg-gray-200 rounded w-4/6" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {[1, 2].map((tag) => (
                    <div
                      key={tag}
                      className="h-7 bg-gray-200 rounded-full w-12"
                    />
                  ))}
                </div>
              </div>

              {/* Footer Area */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  {/* Logo/Image */}
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                  {/* Department */}
                  <div className="h-4 bg-gray-200 rounded w-32" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHistorySkeleton;
