const OrganizationSkeleton = () => {
  return (
    <div>
      {/* Title Skeleton */}
      <div className="text-center py-10 mb-2">
        <div className="h-14 md:h-16 w-80 md:w-96 bg-gray-200 rounded-lg mx-auto animate-pulse" />
      </div>

      {/* Organization Chart Image Skeleton */}
      <div className="w-full sm:h-[500px] h-[300px] flex justify-center text-center px-20">
        <div className="w-full h-full relative">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSkeleton;
