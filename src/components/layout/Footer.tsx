import Logo from "../../assets/ft.png"

const Footer = () => {
  return (
    <footer className="bg-[#0a1429] text-gray-400 border-t border-[#d4af37]/30 py-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 px-6">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-10 relative">
          <div className="hidden md:block w-1/4 h-px bg-[#d4af37]/40"></div>
          <div className="mx-6 flex flex-col items-center">
            <img src={Logo} alt="My Dubai Properties" className="h-20 w-auto" />
          </div>
          <div className="hidden md:block w-1/4 h-px bg-[#d4af37]/40"></div>
        </div>

        {/* Grid Columns */}
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4 tracking-wide">WHY US</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Meet The Team</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4 tracking-wide">OFF PLAN DEVELOPERS</h4>
            <ul className="space-y-2">
              <li>Emaar Properties</li>
              <li>Dubai Properties</li>
              <li>Damac Properties</li>
              <li>Sobha Group</li>
              <li>Nakheel</li>
              <li>Meraas</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4 tracking-wide">FEATURED PROJECTS</h4>
            <ul className="space-y-2">
              <li>Burj Crown in Downtown Dubai</li>
              <li>The Valley EDEN by Emaar</li>
              <li>Featured Projects</li>
              <li>Featured Projects</li>
              <li>Featured Projects</li>
              <li>Featured Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#d4af37] font-semibold mb-4 tracking-wide">PROPERTY TYPES</h4>
            <ul className="space-y-2">
              <li>Dubai Apartments for Sale</li>
              <li>Dubai Villas for Sale</li>
              <li>Property Types</li>
              <li>Property Types</li>
              <li>Property Types</li>
              <li>Property Types</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-[#d4af37]/20 pt-6 text-center text-xs text-gray-500">
          <ul className="flex justify-center flex-wrap gap-6 mb-3">
            <li>PRIVACY POLICY</li>
            <li>TERMS & CONDITIONS</li>
            <li>COOKIE POLICY</li>
          </ul>
          <p>© 2025 MyDubai Properties — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
