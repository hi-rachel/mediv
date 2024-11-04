import { redirect } from "next/navigation";

const AboutPage = ({ params: { locale } }: { params: { locale: string } }) => {
  redirect(`/${locale}/about/vision`);
};

export default AboutPage;
