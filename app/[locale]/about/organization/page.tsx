import { Suspense } from "react";
import Organization from "./components/Organization";
import OrganizationSkeleton from "../../common/skeleton/OrganizationSkeleton";

const OrganizationPage = () => {
  return (
    <Suspense fallback={<OrganizationSkeleton />}>
      <Organization />
    </Suspense>
  );
};

export default OrganizationPage;
