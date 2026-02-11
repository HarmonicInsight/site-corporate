"use client";

import { useTranslations } from "next-intl";
import { Platform, Stage } from "@/lib/types";

interface FilterButtonsProps {
  selectedPlatform: Platform | "all";
  selectedStage: Stage | "all";
  onPlatformChange: (platform: Platform | "all") => void;
  onStageChange: (stage: Stage | "all") => void;
}

export default function FilterButtons({
  selectedPlatform,
  selectedStage,
  onPlatformChange,
  onStageChange,
}: FilterButtonsProps) {
  const t = useTranslations("home");

  const platforms: { value: Platform | "all"; labelKey: string }[] = [
    { value: "all", labelKey: "filterAll" },
    { value: "android", labelKey: "filterAndroid" },
    { value: "ios", labelKey: "filterIPhone" },
    { value: "windows", labelKey: "filterWindows" },
  ];

  const stages: { value: Stage | "all"; labelKey: string }[] = [
    { value: "all", labelKey: "stageAll" },
    { value: "public", labelKey: "stagePublic" },
    { value: "beta", labelKey: "stageBeta" },
    { value: "dev", labelKey: "stageDev" },
  ];

  return (
    <div className="space-y-3">
      {/* Platform Filter */}
      <div className="flex flex-wrap gap-2">
        {platforms.map((p) => (
          <button
            key={p.value}
            onClick={() => onPlatformChange(p.value)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${
                selectedPlatform === p.value
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }
            `}
          >
            {t(p.labelKey)}
          </button>
        ))}
      </div>

      {/* Stage Filter */}
      <div className="flex flex-wrap gap-2">
        {stages.map((s) => (
          <button
            key={s.value}
            onClick={() => onStageChange(s.value)}
            className={`
              px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
              ${
                selectedStage === s.value
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }
            `}
          >
            {t(s.labelKey)}
          </button>
        ))}
      </div>
    </div>
  );
}
