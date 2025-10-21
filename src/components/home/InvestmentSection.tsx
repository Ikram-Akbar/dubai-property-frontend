
import { Home, Map } from "lucide-react"; 
import propertyImg from "../../assets/property-1.jpg";

export const InvestmentSection = () => (
  <section className="py-20 bg-dark/95 border-t border-primary/10">
    <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10 items-center">
      {/* Left: Text + Image */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Which property investment is right for you?
          </h2>
          <p className="text-gray-400 mb-6">
            Discover the best off-plan & ready projects in Dubai and secure your dream home today.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={propertyImg}
            alt="Luxury Property"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/60 p-6 text-white">
            <h3 className="font-semibold text-sm text-yellow-300 mb-2">
              THE PREMIER LUXURY PROPERTY DEVELOPER IN DUBAI
            </h3>
            <p className="text-gray-200 text-sm mb-4">
              DAMAC Properties has been shaping the Middle East’s luxury real estate market since
              2002, delivering iconic residential, commercial, and leisure properties for sale in
              Dubai, across the region and beyond.
            </p>
            <button className="bg-primary text-dark font-semibold px-5 py-2 rounded-lg">
              Get in Touch with Our Property Experts
            </button>
          </div>
        </div>
      </div>

      {/* Right: Off-plan and Ready icons */}
      <div className="flex flex-col items-center gap-12">
        <div className="text-center">
          <h4 className="text-sm text-gray-300 mb-3 uppercase tracking-wide">Off-Plan</h4>
          <div className="p-6 border border-primary/20 rounded-xl hover:bg-primary/10 transition">
            <Map className="w-16 h-16 text-primary mx-auto" />
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-sm text-gray-300 mb-3 uppercase tracking-wide">Ready</h4>
          <div className="p-6 border border-primary/20 rounded-xl hover:bg-primary/10 transition">
            <Home className="w-16 h-16 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentSection;
