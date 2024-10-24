import { Section } from "../types";

const ArticleSection = ({ title, content }: Section) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-4">{content}</div>
    </section>
  );
};

export default ArticleSection;
