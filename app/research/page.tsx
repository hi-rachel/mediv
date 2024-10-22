import { Suspense } from "react";
import TabSection from "../components/TabSection";

const ResearchPage: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TabSection menuId="research" />
    </Suspense>
  );
};

export default ResearchPage;
