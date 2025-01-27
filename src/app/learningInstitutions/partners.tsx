import React from "react";

const PartnerLogos = [
  { name: "Tori", imgSrc: "/partners/tori.png" },
  { name: "GDG Kigali", imgSrc: "/partners/Gdg_Kigali.png" },
  {
    name: "The Education Collaborative",
    imgSrc: "/partners/educationCollaborative.png",
  },
  { name: "Kepler", imgSrc: "/partners/KeplerLogo.png" },
  { name: "Hiil", imgSrc: "/partners/hil.png" },
  { name: "CIB", imgSrc: "/partners/CIBA.png" },
  { name: "Ared", imgSrc: "/partners/ared.png" },
  { name: "Igihe", imgSrc: "/partners/igihe.png" },
  { name: "Viamo", imgSrc: "/partners/viamo.png" },
  { name: "Laterite", imgSrc: "/partners/laterite.png" },
  { name: "SokoFund", imgSrc: "/partners/sokofund.png" },
];

const Partners = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-start ssm:text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-800">
          Join a few Educational Institutions using
          <span className="inline ssm:block">
            {" "}
            Skills Challenges by Umurava
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {PartnerLogos.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <img
                src={partner.imgSrc}
                alt={partner.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
