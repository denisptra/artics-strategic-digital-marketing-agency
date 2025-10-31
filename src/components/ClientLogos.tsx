import { Building2 } from 'lucide-react';

export default function ClientLogos() {
  const clients = [
    'Telkomsel',
    'BCA',
    'BNI',
    'Tokopedia',
    'Shopee',
    'Gojek',
    'Traveloka',
    'Bukalapak',
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">
          Trusted by Leading Brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Building2 size={32} className="text-[#003366]" />
              <span className="text-xs font-medium text-[#1B1B1B]">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
