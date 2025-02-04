import React from 'react';

const partners = [
  { id: 1, name: 'Arb', logo: '/icons/arb-icon.svg' },
  { id: 2, name: 'Avax', logo: '/icons/avax-icon.svg' },
  { id: 3, name: 'Base', logo: '/icons/base-icon.svg' },
  { id: 4, name: 'Blast', logo: '/icons/blast-icon.svg' },
  { id: 5, name: 'BNB', logo: '/icons/bnb-icon.svg' },
  { id: 6, name: 'Celo', logo: '/icons/celo-icon.svg' },
  { id: 7, name: 'ETH', logo: '/icons/eth-icon.svg' },
  { id: 8, name: 'OPT', logo: '/icons/opt-icon.svg' },
  { id: 9, name: 'Polygon', logo: '/icons/polygon-icon.svg' },
];

const PartnerSection = () => {
  return (
    <div className="overflow-hidden bg-[#1A1A1A] py-12">
      <div className="overflow-x-auto whitespace-nowrap flex gap-4 items-center animate-scroll md:justify-between md:overflow-hidden md:flex-nowrap hide-scrollbar">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-[rgba(255,255,255,0.1)] rounded-lg p-6 w-44 h-24 flex items-center justify-center shrink-0"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="hover:scale-115 block transition-transform duration-300"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
