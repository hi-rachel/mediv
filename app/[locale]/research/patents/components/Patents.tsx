import { useTranslations } from "next-intl";
import { getMonthName } from "@/app/utils/date";

interface Patent {
  id: string;
  category: string;
  title: string;
  applicationNumber: string;
  patentNumber?: string;
  year: number;
  month: number;
}

const PatentsHistory: React.FC = () => {
  const t = useTranslations("Patents");
  const patents = t.raw("list") as Patent[];

  return (
    <div className="space-y-4">
      {patents.map((patent, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-sm text-gray-500 rounded-sm bg-slate-50 p-1 mb-4 w-fit">
            {getMonthName(patent.month)}. {patent.year}
          </div>

          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full font-semibold mb-4 md:text-sm text-xs">
            {t("category")}
          </span>
          <h1 className="text-xl font-bold mb-8">{patent.title}</h1>
          <p className="text-gray-600 md:text-base text-sm">
            {patent.id === "ecg_signal_ai_diagnosis" && patent.patentNumber
              ? `${t("registrationNumber")} ${patent.patentNumber}`
              : `${t("applicationNumber")} ${patent.applicationNumber}`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PatentsHistory;
