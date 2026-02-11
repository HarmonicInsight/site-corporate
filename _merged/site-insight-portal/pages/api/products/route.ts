import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Product } from "@/lib/types";

const DATA_FILE = path.join(process.cwd(), "data", "products.json");

async function readProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    const json = JSON.parse(data);
    return json.products || [];
  } catch {
    return [];
  }
}

async function writeProducts(products: Product[]): Promise<void> {
  const data = JSON.stringify({ products }, null, 2);
  await fs.writeFile(DATA_FILE, data, "utf-8");
}

// GET: 全製品を取得
export async function GET() {
  const products = await readProducts();
  return NextResponse.json({ products });
}

// POST: 新規追加
export async function POST(request: NextRequest) {
  try {
    const product: Product = await request.json();

    if (!product.name || !product.slug || !product.platforms?.length) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    const products = await readProducts();

    // slug重複チェック
    if (products.some((p) => p.slug === product.slug)) {
      return NextResponse.json(
        { error: "このSlugは既に使用されています" },
        { status: 400 }
      );
    }

    products.push(product);
    await writeProducts(products);

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "保存に失敗しました" },
      { status: 500 }
    );
  }
}

// PUT: 更新
export async function PUT(request: NextRequest) {
  try {
    const { slug, product }: { slug: string; product: Product } = await request.json();

    if (!slug || !product) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    const products = await readProducts();
    const index = products.findIndex((p) => p.slug === slug);

    if (index === -1) {
      return NextResponse.json(
        { error: "アプリが見つかりません" },
        { status: 404 }
      );
    }

    // slugが変更された場合、新しいslugの重複チェック
    if (product.slug !== slug && products.some((p) => p.slug === product.slug)) {
      return NextResponse.json(
        { error: "このSlugは既に使用されています" },
        { status: 400 }
      );
    }

    products[index] = product;
    await writeProducts(products);

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "更新に失敗しました" },
      { status: 500 }
    );
  }
}

// DELETE: 削除
export async function DELETE(request: NextRequest) {
  try {
    const { slug }: { slug: string } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { error: "Slugが指定されていません" },
        { status: 400 }
      );
    }

    const products = await readProducts();
    const filtered = products.filter((p) => p.slug !== slug);

    if (filtered.length === products.length) {
      return NextResponse.json(
        { error: "アプリが見つかりません" },
        { status: 404 }
      );
    }

    await writeProducts(filtered);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: "削除に失敗しました" },
      { status: 500 }
    );
  }
}
