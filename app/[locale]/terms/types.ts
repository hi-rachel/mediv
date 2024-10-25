export interface Section {
  title: string;
  content: React.ReactNode;
}

export interface ContactInfo {
  role: string;
  name: string;
  email: string;
}

export interface ContactSectionProps {
  contactInfo: ContactInfo[];
}

export interface VersionInfo {
  version: string;
  established: string;
  lastUpdated: string;
}

export interface PrivacyPolicyProps {
  sections: Section[];
  contactInfo: ContactInfo[];
  versionInfo: VersionInfo;
}
