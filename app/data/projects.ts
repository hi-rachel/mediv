interface Project {
  title: string;
  year: string;
  tag: string[];
  description: string;
  department: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "충북 청주 강소특구 지역 특화기업 성장지원 사업",
    year: "2024",
    tag: ["AI"],
    description:
      "부정맥 진단 AI 시스템(부정맥 진단 및 Report 출력 플랫폼) 개발",
    department: "충북대학교 산학협력단",
    img: "/충북대학교의과대학.webp",
  },
  {
    title: "국가기술거래플랫폼 서비스 사업 기술사업화 프로그램",
    year: "2024",
    tag: ["SW", "AI"],
    description:
      "심전도 신호를 이용한 인공지능 기반의 심근경색 진단 시스템 기술사업화",
    department: "충북테크노파크",
    img: "/충북테크노파크.webp",
  },
  {
    title: "2024년도 소재부품산업기술개발기반구축사업",
    year: "2024",
    tag: ["SW", "AI"],
    description:
      "미세생리시스템 기반 의약품 독성평가를 위한 AI 기반 소프트웨어 및 검증 플랫폼 개발을 목표로 진행중인 사업",
    department: "산업통상자원부",
    img: "/national-logo.webp",
  },
  {
    title:
      "심전도 신호를 이용한 인공지능 기반의 심근경색 진단 시스템의 고도화를 위한 기술사업화 프로젝트",
    year: "2024",
    tag: ["SW", "AI"],
    description: "주요 대학병원과 협력하여 AI 기반 진단 시스템 개발 및 구축",
    department: "충북대학교 산학협력단",
    img: "/충북대학교의과대학.webp",
  },
  {
    title: "검색 증강 생성 기술을 활용한 의과대학 CPX 학습 플랫폼 개발",
    year: "2024",
    tag: ["AI"],
    description:
      "검색 증상 생성 기술을 활용한 언어모델 기반의 의대생 CPX 학습 플랫폼에 대한 기술 특허를 획득",
    department: "충북지식재산센터",
    img: "/충북지식재산센터.webp",
  },
  {
    title:
      "원격환자감시 헬스케어 인공지능 서비스를 위한 블록체인 기반 의료분석정보 감사추적 관리 솔루션",
    year: "2023",
    tag: ["SW"],
    description:
      "의료분야에서 활용되고 있는 EMR, 분석SW 등의 사용자 로그를 추적하고, 이를 안전하게 추출할 수 있는 감사추적관리 솔루션을 제공",
    department: "충북과학기술혁신원",
    img: "/충북과학기술혁신원.webp",
  },
  {
    title: "AI 기반 심전도 분석기술 및 분석 플랫폼 개발",
    year: "2023",
    tag: ["SW", "AI"],
    description:
      "패치형 심전도에서 수집된 데이터를 분석하는 AI모델을 개발하고, 이를 전문가가 분석할 수 있는 전용 플랫폼을 제공",
    department: "(재)SCL",
    img: "/서울의과학연구소.webp",
  },
  {
    title: "의료AI 개발용 의료데이터베이스 구축 솔루션",
    year: "2023",
    tag: ["SW"],
    description:
      "메디브가 가지고 있는 의료데이터 자원을 의료AI 개발에 관심있는 연구자에 제공할 수 있는 플랫폼을 제공",
    department: "중소벤처기업부",
    img: "/national-logo.webp",
  },
  {
    title: "스마트시티챌린지 - 충북 스마트 응급의료 빅데이터 플랫폼 구축 사업",
    year: "2023",
    tag: ["SW"],
    description:
      "시큐웨어 및 충북대병원에서 수행하는 스마트 응급의료 서비스 3세부에서 개발하는 충북 스마트 응급의료 빅데이터 플랫폼의 구축에 대한 컨설팅을 제공",
    department: "국토교통부",
    img: "/national-logo.webp",
  },
  {
    title:
      "인공지능 광학문자인식 기술 기반 심전도 스캔 영상의 텍스트 변환 기술 개발 연구",
    year: "2022",
    tag: ["AI"],
    description:
      "심전도 이미지를 디지털신호화하여 AI, 빅데이터 등의 개발에 활용할 수 있는 심전도 데이터베이스 생성 기술을 제공",
    department: "충남대학교병원",
    img: "/충남대학교병원.webp",
  },
  {
    title: "초거대 AI 기술을 활용한 흉부 방사선 영상 진단 보조 솔루션 개발",
    year: "2022",
    tag: ["DATA"],
    description:
      "카카오브레인에서 개발하는 흉부 방사선 영상을 기반으로 진단 및 판독문 작성하는 초거대 AI의 개발을 위한 데이터 솔루션 제공",
    department: "(주)카카오브레인",
    img: "/kakao-brain.webp",
  },
  {
    title: "AI 개발용 의료데이터 구축 솔루션",
    year: "2022",
    tag: ["DATA"],
    description:
      "의료분야에서 인공지능 개발에 필요한 의료데이터의 수집 및 전처리를 제공하는 솔루션을 개발",
    department: "과학기술정보통신부",
    img: "/national-logo.webp",
  },
];

export default projects;
