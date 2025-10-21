import { MapPin, Building2, Home, BedDouble } from "lucide-react";
import type { PropertyProps } from "../../types";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-primary/50 transition duration-300">
      {/* Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#0a0f15] text-white p-5">
        <h3 className="text-lg font-semibold mb-1">{property.title}</h3>

        {/* Sub Info */}
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Home className="w-4 h-4 mr-2 text-primary" />
          {property.location || "Forest Villas"}
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-3 gap-3 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            <span>{property.developer || "Sobha Group"}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{property.type || "Villas"}</span>
          </div>

          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-primary" />
            <span>{property.bedrooms || "1, 2, 3"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
