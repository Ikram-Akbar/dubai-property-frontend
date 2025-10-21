import PropertyFilter from "./PropertyFilter";

export const Hero = () => {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/566234859_1546697516341808_1749938906811850063_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0h5LGcKgoKT9UZUllw9HMIMzaf3mbHjAgzNp_eZseMPvV8_j5sOCL-1ZQz3Iu_b2qTX307c__4MThPCJ7RJOP&_nc_ohc=L48EGsQjDewQ7kNvwHnB5Aq&_nc_oc=AdnlzxlJdk3nlZD-kPaOB0K9SZRdDQMLVYe5YfMXVNPzUOOL5ZiSnvpAT6kAS8_O5Kw&_nc_zt=23&_nc_ht=scontent.fdac7-1.fna&_nc_gid=Jf8Soivw5G2WIHXHFscKZg&oh=00_Afd8yVQMMWMdKGCNIYiF0cRIQ3UwCMdAEe80aev9uxmO1A&oe=68FD710C')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative text-center text-white max-w-3xl z-10 px-4">
        <p className="text-[#f6c75f] text-lg mb-2 italic">
          Get an Overview of
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          The Most Iconic Architectural Landmarks in Dubai
        </h1>
        <p className="text-gray-300 mb-10">
          Secure Your Property Investment Without Paying any Commission or Fees
        </p>

        {/* Filter Component */}
        <PropertyFilter />
      </div>
    </section>
  );
};

export default Hero;
