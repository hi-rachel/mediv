import certifications from "@/app/data/certifications";
import Image from "next/image";

const Certifications = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">인증</h2>
      <div className="flex gap-4">
        {certifications.map((certifications) => (
          <div key={certifications.alt}>
            <Image
              width={300}
              height={300}
              src={certifications.src}
              alt={certifications.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
