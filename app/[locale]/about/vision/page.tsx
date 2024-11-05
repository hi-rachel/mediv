import { Suspense } from "react";
import Vision from "./components/Vision";
import VisionSkeleton from "../../common/skeleton/VisionSkeleton";

const VisionPage = () => {
  return (
    <Suspense fallback={<VisionSkeleton />}>
      <Vision />
    </Suspense>
  );
};

export default VisionPage;
