import { useTranslations } from "next-intl";
import { VersionInfo } from "../types";

const VersionInfoSection = ({
  version,
  established,
}: // lastUpdated,
VersionInfo) => {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="border-t pt-8 mt-16">
      <div className="text-sm text-gray-500 space-y-1">
        <p>
          <b>{t("versionInfo.versionNumber")}</b>: {version}
        </p>
        <p>
          <b>{t("versionInfo.established")}</b>: {established}
        </p>
        {/* <p>
          <strong>변경일자</strong>: {lastUpdated}
        </p> */}
      </div>
    </div>
  );
};

export default VersionInfoSection;
