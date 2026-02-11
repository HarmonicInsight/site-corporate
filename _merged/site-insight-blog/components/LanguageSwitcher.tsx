'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLocale('ja')}
        className={`transition-colors ${
          locale === 'ja'
            ? 'text-[var(--foreground)] font-medium'
            : 'text-[var(--muted)] hover:text-[var(--accent)]'
        }`}
        disabled={isPending}
      >
        JP
      </button>
      <span className="text-[var(--border)]">|</span>
      <button
        onClick={() => switchLocale('en')}
        className={`transition-colors ${
          locale === 'en'
            ? 'text-[var(--foreground)] font-medium'
            : 'text-[var(--muted)] hover:text-[var(--accent)]'
        }`}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  );
}
