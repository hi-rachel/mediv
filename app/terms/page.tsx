import { Metadata } from "next";
import { PrivacyPolicyProps } from "./types";
import PrivacyPolicy from "./components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 메디브",
  description: "메디브의 개인정보처리방침입니다.",
};

const PrivacyPolicyPage = () => {
  const props: PrivacyPolicyProps = {
    sections: [
      {
        title: "개인정보처리방침",
        content: (
          <div className="prose prose-lg text-gray-600">
            <p className="leading-relaxed">
              <strong>주식회사 메디브(이하 "메디브")</strong>는 이용자의
              개인정보 보호를 매우 중요시하며, 개인정보처리자가 준수해야 하는
              개인정보 보호법 등 대한민국의 개인정보 관련 법령 및 개인정보
              보호지침 등을 준수합니다.
            </p>
            <p className="mt-4">
              이에 메디브는 개인정보 보호법 제30조에 따라 이용자의 개인정보를
              보호하고 이와 관련된 고충을 신속하고 원활하게 처리할 수 있도록
              하기 위하여 다음과 같이 개인정보 처리방침을 수립하여 공개합니다.
            </p>
          </div>
        ),
      },
      {
        title: "제 1 조 (처리하는 개인정보 항목)",
        content: (
          <div className="space-y-4">
            <p>메디브는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>
                <strong>이메일 문의</strong>
                <ul className="mt-2 pl-8">
                  <li>이메일 주소, 문의사항</li>
                </ul>
              </li>
              <li>
                <strong>전화 문의</strong>
                <ul className="mt-2 pl-8">
                  <li>전화번호, 문의사항</li>
                </ul>
              </li>
              <li>
                <strong>
                  인터넷 서비스 이용 과정에서 자동으로 생성되는 항목
                </strong>
                <ul className="mt-2 pl-8">
                  <li>
                    IP 주소, 쿠키, MAC 주소, 서비스 이용 기록, 기기정보, 방문
                    기록, 위치 정보
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        ),
      },
      {
        title: "제 2 조 (개인정보의 처리 목적)",
        content: (
          <>
            <p>
              메디브는 다음의 목적을 위하여 개인정보를 처리합니다. 이 외의
              목적으로 개인정보를 이용하거나 목적이 변경될 경우에는 개인정보
              보호법 제18조에 따라 별도 동의를 받을 예정입니다.
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>
                <strong>이메일 문의</strong> - 문의 대응
              </li>
              <li>
                <strong>전화 문의</strong> - 문의 대응
              </li>
              <li>
                <strong>방문자 관리</strong> - 출입 통제 및 기록 유지
              </li>
            </ol>
          </>
        ),
      },
      {
        title: "제 3 조 (개인정보의 처리 및 보유 기간)",
        content: (
          <>
            <p>
              ① 메디브는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체가
              동의한 기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <p>② 각 개인정보의 처리 및 보유 기간은 다음과 같습니다.</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>
                <strong>이메일 문의</strong> - 전수 이후 최대 1년
              </li>
              <li>
                <strong>전화 문의</strong> - 전수 이후 최대 1개월
              </li>
              <li>
                <strong>방문자 관리</strong> - 1년
              </li>
            </ol>
          </>
        ),
      },
      {
        title: "제 4 조 (개인정보의 제3자 제공)",
        content: (
          <p>
            메디브는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않으며,
            법령에 근거한 경우에만 제공합니다.
          </p>
        ),
      },
      {
        title: "제 5 조 (민감정보의 공개 가능성 및 비공개 방법)",
        content: (
          <p>
            메디브는 서비스 제공 중 민감정보가 공개되지 않도록 관리하며,
            정보주체의 요청에 따라 비공개 조치를 취할 수 있습니다.
          </p>
        ),
      },
      {
        title: "제 6 조 (개인정보의 파기)",
        content: (
          <>
            <p>
              ① 메디브는 문의 응대 이외의 용도로 개인정보를 수집하지 않으며,
              개인정보 보유 기간이 경과하거나 처리 목적이 달성된 경우 해당
              개인정보를 지체 없이 파기합니다.
            </p>
            <p>
              ② 전자 파일은 복원 불가능한 방법으로 삭제하며, 문서 형태는 분쇄
              또는 소각 처리합니다.
            </p>
          </>
        ),
      },
      {
        title: "제 7 조 (정보주체의 권리와 행사 방법)",
        content: (
          <>
            <p>
              ① 정보주체는 언제든지 메디브에 대해 개인정보 열람, 정정, 삭제,
              처리 정지를 요청할 수 있습니다.
            </p>
            <p>
              ② 서면 또는 이메일로 권리를 행사할 수 있으며, 메디브는 지체 없이
              처리합니다.
            </p>
          </>
        ),
      },
      {
        title: "제 8 조 (개인정보의 안전성 확보조치)",
        content: (
          <p>
            메디브는 개인정보의 안전성을 위해 내부관리계획 수립, 접근 권한 통제,
            암호화 등의 기술적·물리적 조치를 시행합니다.
          </p>
        ),
      },
      {
        title: "제 9 조 (쿠키 사용 및 거부)",
        content: (
          <p>
            메디브는 맞춤형 서비스를 제공하기 위해 쿠키를 사용하며, 이용자는
            브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
          </p>
        ),
      },
      {
        title: "제 11 조 (개인정보 열람청구)",
        content: (
          <p>
            개인정보 열람청구는 메디브의 개인정보 담당 부서에 요청할 수
            있습니다.
          </p>
        ),
      },
      {
        title: "제 12 조 (동의 없이 추가적인 이용·제공 시 기준)",
        content: (
          <p>
            메디브는 동의 없이 개인정보를 추가 이용할 경우 법령에 따른 기준에
            따라 예외적으로 처리합니다.
          </p>
        ),
      },
      {
        title: "제 13 조 (권익침해 구제 방법)",
        content: (
          <p>
            이용자는 개인정보 침해와 관련된 문제를 한국인터넷진흥원(KISA) 등
            외부 기관에 신고할 수 있습니다.
          </p>
        ),
      },
      {
        title: "제 14 조 (개인정보 처리방침 변경)",
        content: (
          <>
            <p>
              ① 법령 및 내부 방침의 변경에 따라 본 방침은 수시로 개정될 수
              있습니다.
            </p>
            <p>② 변경 사항은 홈페이지를 통해 공지됩니다.</p>
          </>
        ),
      },
    ],
    contactInfo: [
      {
        role: "개인정보 보호책임자",
        name: "박승 (대표이사)",
        email: "spark.cbnuh@gmail.com",
      },
      {
        role: "담당자",
        name: "김경모 (연구개발본부장)",
        email: "mohunk@mediv.kr",
      },
    ],
    versionInfo: {
      version: "v.0.1",
      established: "2024. 10. 14",
      lastUpdated: "-",
    },
  };

  return <PrivacyPolicy {...props} />;
};

export default PrivacyPolicyPage;
