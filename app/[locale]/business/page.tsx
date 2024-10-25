import { Suspense } from "react";
import TabSection from "../common/TabSection";
import TabCardSkeleton from "../common/loading/TabCardSkeleton";

const BusinessPage = () => {
  return (
    <Suspense fallback={<TabCardSkeleton />}>
      <TabSection menuId="business" />
    </Suspense>
  );
};

export default BusinessPage;
