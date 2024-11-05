import { Suspense } from "react";
import CIShowcase from "./components/CI";
import CISkeleton from "../../common/skeleton/CISkeleton";

const CIPage = () => {
  return (
    <Suspense fallback={<CISkeleton />}>
      <CIShowcase />
    </Suspense>
  );
};

export default CIPage;
