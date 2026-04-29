import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center text-bg font-medium text-sm">
                A
              </div>
              <span className="font-serif text-base font-medium">
                Apex Digital Bharat
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Premium Google Business Profile management for India&apos;s ambitious
              local businesses. Built in Gorakhpur, serving across India.
            </p>
            <div className="mt-6 text-xs text-subtle">
              <div>Razorpay verified · GST registered</div>
              <div className="mt-1">apexbharatdigital@gmail.com</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-accent font-medium mb-4">
              Product
            </div>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><Link href="/pricing" className="hover:text-ink transition-colors">Pricing</Link></li>
              <li><Link href="/audit" className="hover:text-ink transition-colors">Free audit</Link></li>
              <li><Link href="/about" className="hover:text-ink transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-ink transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-accent font-medium mb-4">
              Connect
            </div>
            <ul className="space-y-2.5 text-sm text-muted">
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
              <li><Link href="/privacy" className="hover:text-ink transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-ink transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-subtle">
          <div>© {new Date().getFullYear()} Apex Digital Bharat. Made in Gorakhpur, UP.</div>
          <div className="font-serif italic">Where India&apos;s businesses get found online.</div>
        </div>
      </div>
    </footer>
  );
}
