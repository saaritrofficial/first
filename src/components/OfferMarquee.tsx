import React from 'react';

const OfferMarquee = () => {
  const offerText = "Launch Offer - Upto 30% off | Free Domestic Shipping on Orders Above ₹999 |";
  // Replace this URL with your actual image path (e.g., a flower or gift icon)
  const iconUrl = "https://flaticon.com"; 

  const MarqueeItem = () => (
    <div className="flex items-center gap-8 px-4">
      <span className="text-lg font-bold uppercase tracking-widest">{offerText}</span>
      {/* <img src={iconUrl} alt="Offer Icon" className="h-8 w-8 object-contain" /> */}
    </div>
  );

  return (
    <div className="relative flex overflow-x-hidden bg-pink-500 py-3 text-white">
      {/* Container for the sliding content */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* We repeat the items multiple times to fill the width and loop smoothly */}
        {[...Array(10)].map((_, i) => (
          <MarqueeItem key={i} />
        ))}
      </div>

      {/* Second identical set for the seamless loop transition */}
      <div className="absolute top-0 flex animate-marquee whitespace-nowrap py-3">
        {[...Array(10)].map((_, i) => (
          <MarqueeItem key={`loop-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default OfferMarquee;