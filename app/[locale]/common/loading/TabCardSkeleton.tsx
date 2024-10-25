const TabCardSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-pulse">
      {/* 탭 네비게이션 스켈레톤 */}
      <div className="max-w-5xl mx-auto">
        {/* 상단 필터 태그 스켈레톤 */}
        <div className="flex flex-wrap gap-6 mb-8">
          {[1, 2].map((tag) => (
            <div
              key={tag}
              className="rounded-full py-2 px-6 bg-gray-200 w-24 h-12"
            ></div>
          ))}
        </div>

        {/* 프로젝트 카드 그리드 스켈레톤 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <div
              key={card}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                {/* 제목과 이미지 영역 */}
                <div className="flex items-start justify-between mb-4">
                  {/* 제목 */}
                  <div className="flex-1">
                    <div className="h-7 bg-gray-200 rounded w-3/4 mb-2"></div>
                  </div>
                  {/* 이미지와 부서명 */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* 연도 태그 */}
                <div className="w-16 h-5 bg-gray-200 rounded-full mb-3"></div>

                {/* 설명 텍스트 */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>

                {/* 하단 태그들 */}
                <div className="flex flex-wrap gap-2">
                  {[1, 2].map((tag) => (
                    <div
                      key={tag}
                      className="h-6 bg-gray-200 rounded-full w-16"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabCardSkeleton;
