import Image from "next/image";

const Organization = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-center text-primary mb-8">
        조직도
      </h2>
      <Image
        src="/organization.png"
        alt="Mediv 조직도"
        width={600}
        height={600}
        className="mx-auto contain"
      />
    </div>
  );
};

export default Organization;
