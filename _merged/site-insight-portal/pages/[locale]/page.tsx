import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllProducts } from "@/lib/products";
import ProductList from "@/components/ProductList";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const products = getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t("title")}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      {/* Product List with Filters */}
      <ProductList initialProducts={products} locale={locale} />
    </div>
  );
}
