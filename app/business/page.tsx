import awards from "../data/awards";
import projects from "../data/projects";

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Business</h1>
          <p className="text-xl mb-8">
            혁신적인 의료 AI 솔루션으로 더 나은 미래를 만듭니다
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            수행 사업 이력
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-blue-600">{project.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            인증 및 수상 내역
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-2">{award.organization}</p>
                <p className="text-sm text-blue-600">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            우리의 혁신이 만드는 변화
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Mediv의 AI 기술은 의료 현장에 실질적인 변화를 가져오고 있습니다.
            우리의 솔루션은 진단 정확도를 높이고, 의료진의 업무 효율을 개선하며,
            궁극적으로 환자의 생명을 구하는 데 기여하고 있습니다.
          </p>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            자세히 알아보기
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
