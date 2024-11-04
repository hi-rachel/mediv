import { useTranslations } from "next-intl";
import PartnersRowAnimation from "./PartnersRowAnimation";

const PartnersSection = () => {
  const t = useTranslations("Partners");
  const partners = t.raw("list");
  return (
    <section className="bg-gray-100 pt-20 pb-40">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Partners
        </h2>
        <div className="space-y-12">
          <PartnersRowAnimation partners={partners} direction="left" />
        </div>
      </div>
    </section>
  );
};
export default PartnersSection;
