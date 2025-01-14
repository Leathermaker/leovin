import { CgAlignLeft } from "react-icons/cg";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const services = [
    {
      icon: "df",
      title: "Automobile Industry",
      desc: "We manufactures vinyl for automotive industry in Mumbai.",
      redirect: "/#",
      theme: "yellow-500",
    },
    {
      icon: "df",
      title: "Luggage Industry",
      desc: "We are rich in offering its customers, coated vinyl textile fabric to any industry.",
      redirect: "/#",
      theme: "purple-500",
    },
    {
      icon: "df",
      title: "Garment Industry",
      desc: "Vinyl fabric and textiles are being used for manufacturing various designer and styled garments.",
      redirect: "/#",
      theme: "orange-500",
    },
    {
      icon: "df",
      title: "Stationery Industry",
      desc: "We render its Vinyl to almost each industry including Stationery, manufactured in Delhi.",
      redirect: "/#",
      theme: "green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-28 mt-8">
      {services.map((data, index) => (
        <div
          key={`SERVICES_${index}`}
          className="bg-white relative w-full rounded-xl shadow-md p-4 flex flex-col gap-4"
        >
          <div>
            <CgAlignLeft size={65} />
          </div>
          <h1 className="text-3xl text-blue-950 font-bold">{data.title}</h1>
          <p className="text-lg text-gray-500">{data.desc}</p>
          <Link to={"/#"} className="flex items-center gap-2">
            <h1
              className={`text-${data.theme} text-xl underline underline-offset-8`}
            >
              Learn More
            </h1>
            <HiArrowLongRight size={20} />
          </Link>
          <svg
            className="absolute h-[8rem] -top-16 right-2"
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(251, 168, 31, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M29.8,-10.7C33.2,0.8,26.8,14.4,15.3,23.2C3.9,31.9,-12.5,35.8,-20.9,29.5C-29.3,23.2,-29.8,6.7,-25,-6.7C-20.1,-20.1,-10.1,-30.5,1.6,-31C13.2,-31.5,26.4,-22.2,29.8,-10.7Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
              style={{ transition: "0.3s" }}
              stroke="url(#sw-gradient)"
            ></path>
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              fill="white"
              fontSize="25"
              fontFamily="Arial"
              fontWeight="bold"
            >
              0{index+1}
            </text>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;