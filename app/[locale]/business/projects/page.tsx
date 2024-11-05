import { Suspense } from "react";
import ProjectHistory from "./components/ProjectHistory";
import ProjectHistorySkeleton from "../../common/skeleton/ProjectHistorySkeleton";

const ProjectHistoryPage = () => {
  return (
    <Suspense fallback={<ProjectHistorySkeleton />}>
      <ProjectHistory />
    </Suspense>
  );
};

export default ProjectHistoryPage;
