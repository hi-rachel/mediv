const TabTextImageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-pulse">
      {/* 탭 네비게이션 스켈레톤 */}
      <div className="max-w-5xl mx-auto">
        <div className="flex border-b pb-4 border-gray-300 gap-6 mb-6">
          {[1, 2, 3, 4].map((tab) => (
            <div key={tab}>
              <div className="h-12 w-24 bg-gray-200 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* 큰 컨텐츠 영역 스켈레톤 */}
        <div className="p-6">
          <div className="overflow-hidden min-h-[600px] p-8">
            {/* 헤더 영역 */}
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>

            {/* 메인 컨텐츠 영역 */}
            <div className="space-y-8">
              <div className="h-40 bg-gray-200 rounded w-full"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabTextImageSkeleton;
