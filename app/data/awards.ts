interface Award {
  title: string;
  year: number;
  organization: string;
}

const awards: Award[] = [
  {
    title: "대한민국 AI 대상",
    year: 2023,
    organization: "과학기술정보통신부",
  },
  { title: "혁신 기업 인증", year: 2022, organization: "중소벤처기업부" },
  {
    title: "Healthcare AI Challenge 우승",
    year: 2021,
    organization: "대한의료인공지능학회",
  },
];

export default awards;
