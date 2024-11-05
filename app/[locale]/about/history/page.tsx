import { Suspense } from "react";
import HistoryTimeline from "./components/History";
import HistorySkeleton from "../../common/skeleton/HistorySkeleton";

const HistoryPage = () => {
  return (
    <Suspense fallback={<HistorySkeleton />}>
      <HistoryTimeline />
    </Suspense>
  );
};

export default HistoryPage;
