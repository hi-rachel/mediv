import { redirect } from "next/navigation";

const ResearchPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  redirect(`/${locale}/research/publications`);
};

export default ResearchPage;
