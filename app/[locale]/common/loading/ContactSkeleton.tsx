const ContactSkeleton = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="w-40 h-10 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
        <div className="w-64 h-6 bg-gray-200 rounded animate-pulse mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
                <div className="flex-1">
                  <div className="w-24 h-5 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                  {index === 0 && (
                    <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse mt-2" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-full bg-gray-200 animate-pulse min-h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
