import { Suspense } from "react";
import TabSection from "../components/TabSection";

const AboutPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TabSection menuId="about" />
    </Suspense>
  );
};

export default AboutPage;
