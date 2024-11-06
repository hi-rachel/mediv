export interface Section {
  title: string;
  content: React.ReactNode;
}

export interface VersionInfo {
  version: string;
  established: string;
  lastUpdated: string;
}

export interface PrivacyPolicyProps {
  sections: Section[];
  versionInfo: VersionInfo;
}
