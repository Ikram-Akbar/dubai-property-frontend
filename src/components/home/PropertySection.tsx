
import { offPlanProperties } from "../../data/properties"
import SectionTitle from "../common/SectionTitle";
import PropertyCard from "./PropertyCard";

 const PropertySection = ({ title }: { title: string }) => (
  <section className="py-16 container mx-auto px-6">
    <SectionTitle title={title} />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {offPlanProperties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  </section>
)

export default PropertySection;