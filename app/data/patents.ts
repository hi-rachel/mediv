interface Patent {
  category: string;
  title: string;
  patentNumber: string;
}

const patents: Patent[] = [
  {
    category: "특허",
    title: "심전도 신호를 이용한 신경망 기반의 심근경색 진단 시스템",
    patentNumber: "10-2024-0056511",
  },
  {
    category: "특허",
    title: "블록체인 네트워크 기반의 의료정보 추적 시스템의 동작 방법",
    patentNumber: "10-2023-0171590",
  },
  {
    category: "특허",
    title: "심전도 기록지의 각 구역을 분할하여 저장하는 전자 장치의 제어 방법",
    patentNumber: "10-2022-0191118",
  },
];

export default patents;
