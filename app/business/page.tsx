import { Suspense } from "react";
import TabSection from "../components/TabSection";

const BusinessPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TabSection menuId="business" />
    </Suspense>
  );
};

export default BusinessPage;
