import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center text-bg font-medium text-sm group-hover:rotate-12 transition-transform duration-300">
            A
          </div>
          <span className="font-serif text-base font-medium tracking-tight">
            Apex Digital Bharat
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm text-muted">
          <Link href="/#services" className="fancy-link hover:text-ink transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="fancy-link hover:text-ink transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="fancy-link hover:text-ink transition-colors">
            About
          </Link>
          <Link href="/audit" className="btn-primary !py-2.5 !px-4 !text-[13px]">
            Get Free Audit
          </Link>
        </nav>

        <Link
          href="/audit"
          className="md:hidden btn-primary !py-2 !px-3 !text-[13px]"
        >
          Free Audit
        </Link>
      </div>
    </header>
  );
}
