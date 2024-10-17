interface Project {
  title: string;
  description: string;
  department: string;
}

const projects: Project[] = [
  {
    title: "병원 내 AI 진단 시스템 구축",
    description: "주요 대학병원과 협력하여 AI 기반 진단 시스템 개발 및 구축",
    department: "보건복지부",
  },
  {
    title: "의료 영상 데이터 구축 사업",
    description: "AI 학습을 위한 대규모 의료 영상 데이터베이스 구축",
    department: "과학기술정보통신부",
  },
  {
    title: "동물대체시험 AI 모델 개발",
    description: "화장품 및 의약품 개발을 위한 AI 기반 동물대체시험 모델 개발",
    department: "산업통상자원부",
  },
];

export default projects;
