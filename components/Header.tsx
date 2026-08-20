import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-transparent">
      
      {/* Brand Logo - Scaled safely for mobile */}
      <Link href="/" className="font-serif text-xl md:text-2xl tracking-[0.2em] text-white uppercase">
        STUDIO
      </Link>

      {/* Navigation Links - Wrapped and spaced for small screens */}
      <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
        <Link href="/portfolio" className="naked-link text-white/80 hover:text-white">
          Portfolio
        </Link>
        <Link href="/experience" className="naked-link text-white/80 hover:text-white">
          The Experience
        </Link>
        <Link href="/inquiry" className="naked-link text-white/80 hover:text-white">
          Inquire
        </Link>
      </nav>

    </header>
  );
}