import Link from 'next/link';

interface TagListProps {
  tags: string[];
  className?: string;
}

export default function TagList({ tags, className = '' }: TagListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/search?q=${encodeURIComponent(tag)}`}
          className="rounded-full bg-[var(--gray-100)] border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
