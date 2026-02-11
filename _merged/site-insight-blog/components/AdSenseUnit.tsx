'use client';

import { useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/constants';

interface AdSenseUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSenseUnit({
  slot,
  format = 'auto',
  className = '',
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!siteConfig.adsenseId || isLoaded.current) return;

    try {
      if (typeof window !== 'undefined' && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Don't render if no AdSense ID is configured
  if (!siteConfig.adsenseId) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--card)] p-4 text-sm text-[var(--muted)] ${className}`}
      >
        広告スペース
      </div>
    );
  }

  const formatStyles: Record<string, React.CSSProperties> = {
    auto: { display: 'block' },
    rectangle: { display: 'inline-block', width: '300px', height: '250px' },
    horizontal: { display: 'block', width: '100%', height: '90px' },
    vertical: { display: 'inline-block', width: '160px', height: '600px' },
  };

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={formatStyles[format]}
        data-ad-client={siteConfig.adsenseId}
        data-ad-slot={slot}
        data-ad-format={format === 'auto' ? 'auto' : undefined}
        data-full-width-responsive={format === 'auto' ? 'true' : undefined}
      />
    </div>
  );
}
