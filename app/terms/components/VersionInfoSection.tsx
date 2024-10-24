import { VersionInfo } from "../types";

const VersionInfoSection = ({
  version,
  established,
}: // lastUpdated,
VersionInfo) => {
  return (
    <div className="border-t pt-8 mt-16">
      <div className="text-sm text-gray-500 space-y-1">
        <p>
          <b>버전번호</b>: {version}
        </p>
        <p>
          <b>제정</b>: {established}
        </p>
        {/* <p>
          <strong>변경일자</strong>: {lastUpdated}
        </p> */}
      </div>
    </div>
  );
};

export default VersionInfoSection;
