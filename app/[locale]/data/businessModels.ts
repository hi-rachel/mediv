interface BusinessModel {
  title: string;
  image: string;
  description: string;
}

const businessModels: BusinessModel[] = [
  {
    title: "의료 AI 개발용 데이터 구축",
    image: "/model-data.png",
    description: "고품질 의료 데이터셋 구축으로 AI 혁신 가속화.",
  },
  {
    title: "의료 AI 개발 및 컨설팅",
    image: "/model-consulting.png",
    description: "맞춤형 솔루션 제공으로 의료 혁신 실현.",
  },
  {
    title: "의료 소프트웨어 최적화",
    image: "/model-medical-research.png",
    description: "효율적이고 신뢰성 높은 시스템 구현.",
  },
  {
    title: "동물대체시험 소프트웨어",
    image: "/model-experiment.png",
    description: "윤리적이고 과학적인 대안 제공.",
  },
];

export default businessModels;
