"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Product } from "@/lib/types";
import {
  getCoverImage,
  getPlatformLabel,
  getStageLabel,
  getProductName,
  getProductCatch,
  getProductTags,
} from "@/lib/products";

interface ProductCardProps {
  product: Product;
  locale: string;
}

function PlatformBadge({ platform }: { platform: string }) {
  const bgColor = {
    android: "bg-green-500",
    ios: "bg-gray-800",
    windows: "bg-blue-500",
  }[platform] || "bg-gray-500";

  return (
    <span
      className={`${bgColor} text-white text-xs font-bold px-2 py-0.5 rounded`}
    >
      {getPlatformLabel(platform as "android" | "ios" | "windows")}
    </span>
  );
}

function StageBadge({ stage }: { stage: string }) {
  const styles = {
    dev: "bg-yellow-100 text-yellow-800 border-yellow-300",
    beta: "bg-purple-100 text-purple-800 border-purple-300",
    public: "bg-green-100 text-green-800 border-green-300",
  }[stage] || "bg-gray-100 text-gray-800 border-gray-300";

  return (
    <span
      className={`${styles} text-xs font-bold px-2 py-0.5 rounded border`}
    >
      {getStageLabel(stage as "dev" | "beta" | "public")}
    </span>
  );
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  const t = useTranslations("common");
  const coverImage = getCoverImage(product);
  const displayTags = getProductTags(product, locale).slice(0, 3);
  const name = getProductName(product, locale);
  const catchText = getProductCatch(product, locale);

  const getStoreButton = (): { labelKey: string; href: string } | null => {
    const { links, platforms } = product;

    if (platforms.includes("android") && links.googlePlay) {
      return { labelKey: "viewOnGooglePlay", href: links.googlePlay };
    }

    if (platforms.includes("ios")) {
      if (links.testFlight) {
        return { labelKey: "tryOnTestFlight", href: links.testFlight };
      }
      if (links.appStore) {
        return { labelKey: "viewOnAppStore", href: links.appStore };
      }
    }

    if (platforms.includes("windows") && links.download) {
      return { labelKey: "download", href: links.download };
    }

    return null;
  };

  const storeButton = getStoreButton();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={coverImage}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Platform Badge - Top Left */}
        <div className="absolute top-3 left-3 flex gap-1">
          {product.platforms.map((platform) => (
            <PlatformBadge key={platform} platform={platform} />
          ))}
        </div>

        {/* Stage Badge - Top Right */}
        <div className="absolute top-3 right-3">
          <StageBadge stage={product.stage} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-1">{catchText}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <Link
            href={`/${locale}/p/${product.slug}`}
            className="w-full text-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
          >
            {t("learnMore")}
          </Link>

          {storeButton && (
            <a
              href={storeButton.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              {t(storeButton.labelKey)}
            </a>
          )}

          {product.links.github && (
            <a
              href={product.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-3 py-1.5 text-gray-500 hover:text-gray-700 text-xs"
            >
              {t("github")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
