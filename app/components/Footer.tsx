import Link from "next/link";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Apex Digital Bharat"
                width={150}
                height={40}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              India&apos;s end-to-end digital partner. We help businesses of
              every scale build, grow, and dominate their digital presence —
              from local retailers to multi-state enterprises.
            </p>
            <div className="mt-6 text-xs text-subtle">
              <div>apexbharatdigital@gmail.com</div>
              <div className="mt-1">+91 70520 67066</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-accent font-medium mb-4">
              Services
            </div>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-ink transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-ink transition-colors"
                >
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-ink transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-ink transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-ink transition-colors"
                >
                  Local SEO &amp; GBP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-accent font-medium mb-4">
              Company
            </div>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-ink transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-ink transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/917052067066?text=Hi%20Apex%20Digital%20Bharat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-ink transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span>
              © {new Date().getFullYear()} Apex Digital Bharat. Made in Bharat.
            </span>
            <span className="hidden sm:inline">·</span>
            <a
              href="https://www.linkedin.com/in/ashwini-m-phd-02140112/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              <Linkedin className="w-3 h-3" />
              Built by Ashwini Kumar Maurya, PhD
            </a>
          </div>
          <div className="font-serif italic">
            Software, design, and growth — under one roof.
          </div>
        </div>
      </div>
    </footer>
  );
}
