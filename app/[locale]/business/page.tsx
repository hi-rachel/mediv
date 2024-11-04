import { redirect } from "next/navigation";

const BusinessPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  redirect(`/${locale}/business/business-model`);
};

export default BusinessPage;
