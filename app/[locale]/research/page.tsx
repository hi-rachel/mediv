import { Suspense } from "react";
import TabSection from "../common/TabSection";
import TabCardSkeleton from "../common/loading/TabCardSkeleton";

const ResearchPage: React.FC = () => {
  return (
    <Suspense fallback={<TabCardSkeleton />}>
      <TabSection menuId="research" />
    </Suspense>
  );
};

export default ResearchPage;
