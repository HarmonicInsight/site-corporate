"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Product, Platform, Stage } from "@/lib/types";
import { filterProducts, shuffleProducts, getAllTags } from "@/lib/products";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import TagChips from "./TagChips";

interface ProductListProps {
  initialProducts: Product[];
  locale: string;
}

export default function ProductList({ initialProducts, locale }: ProductListProps) {
  const t = useTranslations("home");
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState<Platform | "all">("all");
  const [stage, setStage] = useState<Stage | "all">("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [shuffleKey, setShuffleKey] = useState(0);

  const allTags = useMemo(() => getAllTags(), []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleShuffle = () => {
    setShuffleKey((prev) => prev + 1);
  };

  const filteredProducts = useMemo(() => {
    let result = filterProducts(initialProducts, {
      search,
      platform,
      stage,
      tags: selectedTags,
    });

    if (shuffleKey > 0) {
      result = shuffleProducts(result);
    }

    return result;
  }, [initialProducts, search, platform, stage, selectedTags, shuffleKey]);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <SearchBar value={search} onChange={setSearch} placeholder={t("searchPlaceholder")} />

      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <FilterButtons
          selectedPlatform={platform}
          selectedStage={stage}
          onPlatformChange={setPlatform}
          onStageChange={setStage}
        />

        <button
          onClick={handleShuffle}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {t("shuffle")}
        </button>
      </div>

      {/* Tag Chips */}
      {allTags.length > 0 && (
        <div>
          <p className="text-sm text-gray-500 mb-2">{t("filterByTag")}</p>
          <TagChips
            tags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
          />
        </div>
      )}

      {/* Results Count */}
      <p className="text-sm text-gray-500">
        {t("showingApps", { count: filteredProducts.length })}
      </p>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">{t("noResults")}</p>
          <p className="text-gray-400 text-sm mt-2">{t("noResultsHint")}</p>
        </div>
      )}
    </div>
  );
}
