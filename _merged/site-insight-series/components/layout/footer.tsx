import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--gray-100)]">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center bg-[var(--gray-900)]">
                  <span className="text-sm font-bold text-white">I</span>
                </div>
                <span className="font-mincho text-lg text-[var(--gray-900)]">
                  {siteConfig.name}
                </span>
              </Link>
              <p className="mt-3 text-sm text-[var(--gray-600)]">
                {siteConfig.company}
              </p>
              <p className="mt-2 text-sm text-[var(--gray-500)]">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[var(--accent)]"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="mb-4 text-xs font-medium tracking-widest text-[var(--gray-500)] uppercase">
                Products
              </h3>
              <ul className="space-y-2">
                {products.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-xs font-medium tracking-widest text-[var(--gray-500)] uppercase">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                  >
                    ドキュメント
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                  >
                    ブログ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                  >
                    価格・プラン
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-xs font-medium tracking-widest text-[var(--gray-500)] uppercase">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                  >
                    私たちについて
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                  >
                    お問い合わせ
                  </Link>
                </li>
                {siteConfig.footer.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] py-6">
          <p className="text-center text-xs text-[var(--gray-500)]">
            &copy; {currentYear} {siteConfig.company}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
