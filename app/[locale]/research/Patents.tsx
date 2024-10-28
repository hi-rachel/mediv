import { useTranslations } from "next-intl";
import { getMonthName } from "@/app/utils/helpers";

interface Patent {
  category: string;
  title: string;
  patentNumber: string;
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

          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            {t("category")}
          </span>
          <h3 className="text-xl font-semibold mb-8">{patent.title}</h3>
          <p className="text-gray-600">
            {t("applicationNumber")} {patent.patentNumber}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PatentsHistory;
