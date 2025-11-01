import Gojek from "../assets/Gojek.svg";
import LogoBCA from "../assets/LogoBCA.jpg";
import LogoBNI from "../assets/LogoBNI.png";
import Shopee from "../assets/Shopee.svg";
import Tokopedia from "../assets/Tokopedia.svg";
import Traveloka from "../assets/Traveloka.svg";

export default function ClientLogos() {
  const clients = [
    { logo: LogoBCA },
    { logo: LogoBNI },
    { logo: Tokopedia },
    { logo: Shopee },
    { logo: Gojek },
    { logo: Traveloka },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">
          Trusted by Leading Brands
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt="Logo"
                className="w-24 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
