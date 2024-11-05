const CISkeleton = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Title Skeleton */}
      <div className="mb-12 text-center">
        <div className="h-14 w-64 bg-gray-200 rounded-lg mx-auto animate-pulse" />
      </div>

      {/* Logo Section */}
      <div className="mb-20">
        <div className="h-10 w-32 bg-gray-200 rounded-lg mb-6 animate-pulse" />
        <div className="flex justify-center items-center">
          <div className="relative w-full h-80 bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>

      {/* Logo Variations Section */}
      <div className="mb-20">
        <div className="h-10 w-48 bg-gray-200 rounded-lg mb-6 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-video bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-video bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>

      {/* Logo Usage Section */}
      <div className="mb-20">
        <div className="h-10 w-40 bg-gray-200 rounded-lg mb-6 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="aspect-video bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Color Palette Section */}
      <div>
        <div className="h-10 w-44 bg-gray-200 rounded-lg mb-6 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CISkeleton;
