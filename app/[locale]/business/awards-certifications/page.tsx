import { Suspense } from "react";
import AwardsAndCertifications from "./components/AwardsAndCertifications";
import AwardsAndCertificationsSkeleton from "../../common/skeleton/AwardsAndCertificationsSkeleton";

const AwardsAndCertificationsPage = () => {
  return (
    <Suspense fallback={<AwardsAndCertificationsSkeleton />}>
      <AwardsAndCertifications />
    </Suspense>
  );
};

export default AwardsAndCertificationsPage;
