"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Product, Platform, Stage } from "@/lib/types";

interface FormData {
  name: string;
  slug: string;
  catch: string;
  description: string;
  longDescription: string;
  platforms: Platform[];
  stage: Stage;
  tags: string;
  updatedAt: string;
  cover: string;
  googlePlay: string;
  appStore: string;
  testFlight: string;
  download: string;
  github: string;
  storyWhy: string;
  storyForWho: string;
  storyPhilosophy: string;
  storyRoadmap: string;
}

const initialFormData: FormData = {
  name: "",
  slug: "",
  catch: "",
  description: "",
  longDescription: "",
  platforms: [],
  stage: "dev",
  tags: "",
  updatedAt: new Date().toISOString().split("T")[0],
  cover: "",
  googlePlay: "",
  appStore: "",
  testFlight: "",
  download: "",
  github: "",
  storyWhy: "",
  storyForWho: "",
  storyPhilosophy: "",
  storyRoadmap: "",
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch {
      console.error("Failed to fetch products");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlatformChange = (platform: Platform) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const generateSlug = () => {
    const slug = formData.name
      .toLowerCase()
      .replace(/[^a-z0-9\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]+/g, "-")
      .replace(/^-|-$/g, "");
    setFormData((prev) => ({ ...prev, slug }));
  };

  const handleEdit = (product: Product) => {
    setEditingSlug(product.slug);
    setFormData({
      name: product.name,
      slug: product.slug,
      catch: product.catch,
      description: product.description,
      longDescription: product.longDescription || "",
      platforms: product.platforms,
      stage: product.stage,
      tags: product.tags.join(", "),
      updatedAt: product.updatedAt,
      cover: product.cover || "",
      googlePlay: product.links.googlePlay || "",
      appStore: product.links.appStore || "",
      testFlight: product.links.testFlight || "",
      download: product.links.download || "",
      github: product.links.github || "",
      storyWhy: product.story?.why || "",
      storyForWho: product.story?.forWho || "",
      storyPhilosophy: product.story?.philosophy || "",
      storyRoadmap: product.story?.roadmap || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (slug: string) => {
    if (!confirm(`「${slug}」を削除しますか？`)) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "削除しました" });
        fetchProducts();
      } else {
        const data = await res.json();
        setMessage({ type: "error", text: data.error || "削除に失敗しました" });
      }
    } catch {
      setMessage({ type: "error", text: "エラーが発生しました" });
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const product: Product = {
      name: formData.name,
      slug: formData.slug,
      catch: formData.catch,
      description: formData.description,
      longDescription: formData.longDescription || undefined,
      platforms: formData.platforms,
      stage: formData.stage,
      tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean),
      updatedAt: formData.updatedAt,
      cover: formData.cover || undefined,
      links: {
        googlePlay: formData.googlePlay || undefined,
        appStore: formData.appStore || undefined,
        testFlight: formData.testFlight || undefined,
        download: formData.download || undefined,
        github: formData.github || undefined,
        support: "mailto:support@h-insight.jp",
      },
      story:
        formData.storyWhy || formData.storyForWho || formData.storyPhilosophy || formData.storyRoadmap
          ? {
              why: formData.storyWhy || undefined,
              forWho: formData.storyForWho || undefined,
              philosophy: formData.storyPhilosophy || undefined,
              roadmap: formData.storyRoadmap || undefined,
            }
          : undefined,
    };

    try {
      const res = await fetch("/api/products", {
        method: editingSlug ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingSlug ? { slug: editingSlug, product } : product),
      });

      if (res.ok) {
        setMessage({ type: "success", text: editingSlug ? "更新しました" : "追加しました" });
        setFormData(initialFormData);
        setEditingSlug(null);
        fetchProducts();
      } else {
        const data = await res.json();
        setMessage({ type: "error", text: data.error || "保存に失敗しました" });
      }
    } catch {
      setMessage({ type: "error", text: "エラーが発生しました" });
    }
    setIsLoading(false);
  };

  const cancelEdit = () => {
    setEditingSlug(null);
    setFormData(initialFormData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">管理画面</h1>
        <Link href="/" className="text-primary-600 hover:text-primary-700">
          ← サイトに戻る
        </Link>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <p className="text-yellow-800 text-sm">
          この管理画面は<strong>ローカル開発環境</strong>でのみ動作します。
          本番環境ではGitHubで直接 products.json を編集してください。
        </p>
      </div>

      {message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">
          {editingSlug ? `編集: ${editingSlug}` : "新規アプリ追加"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              アプリ名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={() => !formData.slug && generateSlug()}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug (URL用) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              required
              pattern="[a-z0-9-]+"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Catch */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              キャッチコピー <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="catch"
              value={formData.catch}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              説明 <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Long Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              詳細説明（任意）
            </label>
            <textarea
              name="longDescription"
              value={formData.longDescription}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Platforms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              プラットフォーム <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {(["android", "ios", "windows"] as Platform[]).map((p) => (
                <label key={p} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.platforms.includes(p)}
                    onChange={() => handlePlatformChange(p)}
                    className="mr-2"
                  />
                  {p === "android" ? "Android" : p === "ios" ? "iOS" : "Windows"}
                </label>
              ))}
            </div>
          </div>

          {/* Stage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ステータス <span className="text-red-500">*</span>
            </label>
            <select
              name="stage"
              value={formData.stage}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="dev">開発中</option>
              <option value="beta">β版</option>
              <option value="public">公開中</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              タグ（カンマ区切り）
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="生産性, AI, ツール"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Updated At */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              更新日
            </label>
            <input
              type="date"
              name="updatedAt"
              value={formData.updatedAt}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Cover Image */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              カバー画像パス（任意）
            </label>
            <input
              type="text"
              name="cover"
              value={formData.cover}
              onChange={handleInputChange}
              placeholder="/products/app-slug/cover.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Links */}
          <div className="md:col-span-2 border-t pt-4 mt-2">
            <h3 className="font-medium text-gray-900 mb-3">リンク（任意）</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="url"
                name="googlePlay"
                value={formData.googlePlay}
                onChange={handleInputChange}
                placeholder="Google Play URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="url"
                name="appStore"
                value={formData.appStore}
                onChange={handleInputChange}
                placeholder="App Store URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="url"
                name="testFlight"
                value={formData.testFlight}
                onChange={handleInputChange}
                placeholder="TestFlight URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="url"
                name="download"
                value={formData.download}
                onChange={handleInputChange}
                placeholder="ダウンロード URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                placeholder="GitHub URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-2 border-t pt-4 mt-2">
            <h3 className="font-medium text-gray-900 mb-3">思い（任意）</h3>
            <div className="space-y-3">
              <textarea
                name="storyWhy"
                value={formData.storyWhy}
                onChange={handleInputChange}
                placeholder="なぜこのアプリを作ったのか"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <textarea
                name="storyForWho"
                value={formData.storyForWho}
                onChange={handleInputChange}
                placeholder="誰に使ってほしいか"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <textarea
                name="storyPhilosophy"
                value={formData.storyPhilosophy}
                onChange={handleInputChange}
                placeholder="開発の哲学"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <textarea
                name="storyRoadmap"
                value={formData.storyRoadmap}
                onChange={handleInputChange}
                placeholder="今後の展望"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="submit"
            disabled={isLoading || formData.platforms.length === 0}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "処理中..." : editingSlug ? "更新" : "追加"}
          </button>
          {editingSlug && (
            <button
              type="button"
              onClick={cancelEdit}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              キャンセル
            </button>
          )}
        </div>
      </form>

      {/* Product List */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">登録済みアプリ ({products.length}件)</h2>
        <div className="space-y-3">
          {products.map((product) => (
            <div
              key={product.slug}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <span className="font-medium">{product.name}</span>
                <span className="text-gray-500 text-sm ml-2">({product.slug})</span>
                <span className="ml-2 text-xs px-2 py-0.5 bg-gray-200 rounded">
                  {product.stage}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  編集
                </button>
                <button
                  onClick={() => handleDelete(product.slug)}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  削除
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
