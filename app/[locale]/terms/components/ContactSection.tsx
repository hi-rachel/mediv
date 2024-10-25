import { ContactSectionProps } from "../types";

const ContactSection = ({ contactInfo }: ContactSectionProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="space-y-4">
        {contactInfo.map((contact, index) => (
          <div key={index}>
            <p className="font-bold">{contact.role}</p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>{contact.name}</li>
              <li>이메일: {contact.email}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
