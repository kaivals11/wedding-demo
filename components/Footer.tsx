import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] text-white pt-32 pb-12 px-8 flex flex-col items-center">
      
      {/* Massive Interactive CTA */}
      <div className="w-full max-w-7xl text-center mb-24">
        <Link href="/inquiry">
          <h2 className="font-serif text-[clamp(3rem,10vw,10vw)] leading-tight text-white transition-colors duration-500 hover:text-[#D4C8B8]">
            Tell us about the day you are building.
          </h2>
        </Link>
      </div>

      {/* Minimal Bottom Grid */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-[12px] uppercase tracking-widest text-white/50 gap-6 md:gap-0">
        
        {/* Left Links */}
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors duration-300">Email</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
        </div>

        {/* Center / Copyright */}
        <div className="text-white/30 text-[10px]">
          © {new Date().getFullYear()} STUDIO. DEMO PORTFOLIO.
        </div>

        {/* Right Links */}
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors duration-300">Journal</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Client Login</a>
        </div>

      </div>
    </footer>
  );
}