import { Suspense } from "react";
import TabSection from "../common/TabSection";
import TabTextImageSkeleton from "../common/loading/TabTextImageSkeleton";

const AboutPage = () => {
  return (
    <Suspense fallback={<TabTextImageSkeleton />}>
      <TabSection menuId="about" />
    </Suspense>
  );
};

export default AboutPage;
