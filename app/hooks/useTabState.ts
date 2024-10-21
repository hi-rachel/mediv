import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useTabState = (defaultTab: string, tabs: string[]) => {
  const router = useRouter();
  const pathname = usePathname(); // 현재 경로를 가져옴
  const searchParams = useSearchParams(); // URL의 검색 파라미터를 가져옴
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && tabs.includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams, tabs]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // URL에 쿼리 파라미터를 추가하며 페이지가 스크롤되지 않도록 함
    router.push(`${pathname}?tab=${tab}`, { scroll: false });
  };

  return {
    activeTab,
    handleTabClick,
  };
};

export default useTabState;
