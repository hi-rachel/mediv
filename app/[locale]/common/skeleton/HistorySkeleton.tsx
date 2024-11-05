const HistorySkeleton = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 pt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {[1, 2, 3].map((yearIndex) => (
          <div key={yearIndex} className="mb-24 relative animate-pulse">
            {/* Year Header */}
            <div className="sticky top-8 mb-8 bg-gray-50 pt-8 pb-4 z-10">
              <div className="h-16 md:h-24 md:w-60 w-32 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-8 relative">
              {/* Timeline vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>

              {/* Events */}
              {[1, 2, 3, 4, 5].map((eventIndex) => (
                <div
                  key={eventIndex}
                  className="flex items-start md:gap-8 relative gap-0"
                >
                  {/* Month */}
                  <div className="md:w-28 w-24 flex-shrink-0">
                    <div className="h-6 md:w-16 w-10 bg-gray-200 rounded mx-auto md:ml-24 ml-10"></div>
                  </div>

                  {/* Event content */}
                  <div className="flex-grow">
                    {/* Timeline dot */}
                    <div className="w-3 h-3 bg-gray-200 rounded-full absolute -left-[5px] top-2"></div>

                    {/* Event title - multiple lines for variety */}
                    <div className="space-y-2">
                      <div className="h-6 bg-gray-200 rounded w-full ml-3 md:ml-14 md:w-3/4"></div>
                      {[3, 4].includes(eventIndex) && (
                        <div className="h-6 bg-gray-200 rounded w-1/3 ml-3 md:ml-14 "></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySkeleton;
