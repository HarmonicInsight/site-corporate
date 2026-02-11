import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

interface AmazonEmbedProps {
  asin: string;
  title?: string;
}

export default function AmazonEmbed({ asin, title }: AmazonEmbedProps) {
  const associateId = siteConfig.amazonAssociateId;
  const amazonUrl = associateId
    ? `https://www.amazon.co.jp/dp/${asin}?tag=${associateId}`
    : `https://www.amazon.co.jp/dp/${asin}`;

  return (
    <div className="my-6 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {/* Amazon image embed - using their standard image URL pattern */}
            <img
              src={`https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ.jpg`}
              alt={title || 'Amazon商品'}
              className="w-24 h-auto rounded border border-[var(--border)]"
            />
          </a>
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-medium mb-2 text-[var(--foreground)]">
              {title}
            </h4>
          )}
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#FF9900] px-4 py-2 text-sm font-medium text-black hover:bg-[#FF9900]/90 transition-colors"
          >
            Amazonで見る
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs text-[var(--muted)]">
            ※ アフィリエイトリンクを使用しています
          </p>
        </div>
      </div>
    </div>
  );
}
