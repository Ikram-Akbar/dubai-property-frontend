import { Search } from "lucide-react";

const PropertyFilter = () => {
  return (
    <div className="bg-[#0e1319]/80 backdrop-blur-md border border-yellow-500/30 rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-3 items-center justify-center max-w-4xl mx-auto shadow-lg">
      <select className="bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-yellow-400 w-full md:w-auto">
        <option className="bg-[#0e1319]">Damac Hills</option>
        <option className="bg-[#0e1319]">Downtown Dubai</option>
        <option className="bg-[#0e1319]">Business Bay</option>
      </select>

      <select className="bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-yellow-400 w-full md:w-auto">
        <option className="bg-[#0e1319]">All Dubai Developer</option>
        <option className="bg-[#0e1319]">Emaar</option>
        <option className="bg-[#0e1319]">Sobha</option>
      </select>

      <select className="bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-yellow-400 w-full md:w-auto">
        <option className="bg-[#0e1319]">All Property Type</option>
        <option className="bg-[#0e1319]">Villas</option>
        <option className="bg-[#0e1319]">Apartments</option>
      </select>

      <select className="bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-yellow-400 w-full md:w-auto">
        <option className="bg-[#0e1319]">All Completion</option>
        <option className="bg-[#0e1319]">Ready</option>
        <option className="bg-[#0e1319]">Off Plan</option>
      </select>

      <select className="bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-yellow-400 w-full md:w-auto">
        <option className="bg-[#0e1319]">All Development Type</option>
        <option className="bg-[#0e1319]">Luxury</option>
        <option className="bg-[#0e1319]">Budget</option>
      </select>

      <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg shadow-md transition">
        <Search className="w-4 h-4" />
        Search
      </button>
    </div>
  );
};

export default PropertyFilter;
