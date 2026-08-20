import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-transparent">
      
      {/* Brand Logo / Home Link */}
      <Link href="/" className="font-serif text-3xl text-white">
        STUDIO
      </Link>

      {/* Navigation Links */}
      <nav className="flex gap-8 text-white">
        <Link href="/portfolio" className="naked-link">
          PORTFOLIO
        </Link>
        <Link href="/experience" className="naked-link">
          THE EXPERIENCE
        </Link>
        <Link href="/inquiry" className="naked-link">
          INQUIRE
        </Link>
      </nav>
      
    </header>
  );
}