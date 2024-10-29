import { useTranslations } from "next-intl";
import { ContactSectionProps } from "../types";

const ContactSection = ({ emailTitle, contacts }: ContactSectionProps) => {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index}>
            <p className="font-bold">{contact.role}</p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>{contact.name}</li>
              <li>
                {emailTitle}: {contact.email}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
