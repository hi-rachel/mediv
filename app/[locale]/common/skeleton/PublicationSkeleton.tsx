const PublicationSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content Area with proper spacing for header */}
      <div>
        {/* Add top padding to account for header */}
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4">
              {/* Mobile Search and Filter Skeleton */}
              <div className="lg:hidden">
                <div className="h-10 bg-gray-200 rounded-lg mb-4 animate-pulse" />
                <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
              </div>

              {/* Sidebar Skeleton */}
              <aside className="hidden lg:block lg:w-48">
                <div className="space-y-6">
                  {/* Search Skeleton */}
                  <div>
                    <div className="h-8 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded-lg animate-pulse" />
                  </div>

                  {/* Tags Filter Skeleton */}
                  <div>
                    <div className="h-8 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-8 bg-gray-200 rounded-full w-full animate-pulse"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Year Filter Skeleton */}
                  <div>
                    <div className="h-10 bg-gray-200 rounded-lg mb-2 animate-pulse" />
                    {/* <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-8 bg-gray-200 rounded-full w-full animate-pulse"
                        />
                      ))}
                    </div> */}
                  </div>
                </div>
              </aside>

              {/* Main Content Skeleton */}
              <main className="flex-1">
                <div className="grid gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          {/* Date */}
                          <div className="w-24 h-6 bg-gray-200 rounded mb-4 animate-pulse" />

                          {/* Publication Badge */}
                          <div className="w-64 h-6 bg-gray-200 rounded-full mb-4 animate-pulse" />

                          {/* Title */}
                          <div className="h-8 bg-gray-200 rounded mb-4 animate-pulse" />
                          <div className="h-8 w-1/2 bg-gray-200 rounded mb-4 animate-pulse" />

                          {/* Authors */}
                          <div className="h-6 bg-gray-200 rounded w-40 animate-pulse" />
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                        {[1].map((j) => (
                          <div
                            key={j}
                            className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationSkeleton;
