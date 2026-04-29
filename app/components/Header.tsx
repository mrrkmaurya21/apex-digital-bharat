import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="Apex Digital Bharat — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Apex Digital Bharat"
            width={150}
            height={40}
            className="h-9 w-auto group-hover:opacity-80 transition-opacity duration-200"
          />
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
