import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; 2025 Harmonic Insight LLC
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Strategy &amp; Architecture by Erik Arthur
            </p>
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              href="/services"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/company"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Company
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
