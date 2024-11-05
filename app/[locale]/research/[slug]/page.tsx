import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PublicationDetail from "../publications/components/PublicationDetail";
import { Publication } from "@/types/publication";

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateMetadata({
  params: { locale, slug },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Publications" });
  const publications = t.raw("list") as Publication[];
  const publication = publications.find(
    (pub) => encodeURIComponent(pub.title) === slug
  );

  if (!publication) {
    return {
      title: "Publication Not Found",
    };
  }

  return {
    title: publication.title,
    description: `${publication.author.join(", ")} - ${
      publication.publication
    }`,
  };
}

export default function PublicationDetailPage({ params: { slug } }: Props) {
  return <PublicationDetail slug={decodeURIComponent(slug)} />;
}
