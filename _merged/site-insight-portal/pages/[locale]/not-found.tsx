import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="mb-8">
        <span className="text-7xl font-bold text-gray-200">404</span>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        ページが見つかりません
      </h1>
      <p className="text-gray-600 mb-8">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
        >
          アプリ一覧に戻る
        </Link>
        <Link
          href="/support"
          className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          サポートに問い合わせる
        </Link>
      </div>
    </div>
  );
}
