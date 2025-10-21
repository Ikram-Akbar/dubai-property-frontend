const PaymentMethods = () => {
  return (
    <section className="bg-[#041326] text-white py-16 px-6 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to- from-[#D5B870] to-[#7C6E3B] text-[#041326] font-semibold text-lg px-6 py-2 rounded-t-2xl shadow-md">
          Our Payment Methods
        </div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
          Figma ipsum component variant main layer. Duplicate ellipse draft scrolling move select ipsum link.
          Font image boolean library invite hand create. Ipsum image text bold strikethrough.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-6xl mx-auto">
        {/* Left side buttons */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 items-start">
          <button className="bg-[#0A2342] border-l-4 border-[#D5B870] text-sm font-semibold px-6 py-3 rounded-r-full hover:bg-[#132B4D] transition-all">
            CASH
          </button>
          <button className="bg-[#0A2342] border-l-4 border-[#D5B870] text-sm font-semibold px-6 py-3 rounded-r-full hover:bg-[#132B4D] transition-all">
            CRYPTO
          </button>
          <button className="bg-[#0A2342] border-l-4 border-[#D5B870] text-sm font-semibold px-6 py-3 rounded-r-full hover:bg-[#132B4D] transition-all">
            MORTGAGE
          </button>
        </div>

        {/* Right side image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/images/payment-device.png"
            alt="Payment Device"
            className="w-64 md:w-80 relative z-10"
          />
          <img
            src="/assets/images/coin.png"
            alt="Coins"
            className="absolute left-8 top-10 w-12 md:w-16 animate-bounce-slow"
          />
          <img
            src="/assets/images/bitcoin.png"
            alt="Bitcoin"
            className="absolute right-10 top-0 w-12 md:w-16 animate-float"
          />
          <img
            src="/assets/images/mortgage.png"
            alt="Mortgage Icon"
            className="absolute bottom-2 right-16 w-12 md:w-16"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
