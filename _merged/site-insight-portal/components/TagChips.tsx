"use client";

interface TagChipsProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export default function TagChips({
  tags,
  selectedTags,
  onTagToggle,
}: TagChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-colors
              ${
                isSelected
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
