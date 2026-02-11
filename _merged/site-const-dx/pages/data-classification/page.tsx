import Link from "next/link";

export default function DataClassificationPage() {
  const dataCategories = [
    {
      code: "A",
      title: "実績",
      english: "ACTUAL",
      nature: "発生した事実",
      source: "基幹システム（自動連携）",
      edit: "不可（触らない）",
      editColor: "text-red-600",
      update: "日次 / 月次",
      examples: ["発生原価", "工数実績", "出来高", "入金額"],
      borderColor: "border-[var(--gray-300)]",
      bgColor: "bg-[var(--gray-100)]",
      textColor: "text-[var(--gray-600)]",
    },
    {
      code: "B",
      title: "確定",
      english: "FIXED",
      nature: "決めた計画",
      source: "手入力（承認フロー）",
      edit: "承認後は不可",
      editColor: "text-green-600",
      update: "受注時 / PJ開始時",
      examples: ["受注額", "実行予算", "契約条件"],
      borderColor: "border-green-300",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      code: "C",
      title: "見込み",
      english: "FORECAST",
      nature: "現場の判断",
      source: "手入力（PM/所長）",
      edit: "いつでも可",
      editColor: "text-blue-600",
      update: "週次（随時）",
      examples: ["進捗率", "着地原価見込", "リスク評価"],
      borderColor: "border-blue-300",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      code: "D",
      title: "計算",
      english: "CALCULATED",
      nature: "自動算出",
      source: "A/B/Cから自動計算",
      edit: "不可（自動）",
      editColor: "text-purple-600",
      update: "リアルタイム",
      examples: ["消化率", "着地粗利", "アラート"],
      borderColor: "border-purple-300",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
  ];

  const dataItems = [
    { name: "発生原価（材料費）", category: "A", source: "基幹システム", inputter: "自動連携", frequency: "日次", editable: "不可" },
    { name: "発生原価（労務費）", category: "A", source: "基幹システム", inputter: "自動連携", frequency: "日次", editable: "不可" },
    { name: "発生原価（外注費）", category: "A", source: "基幹システム", inputter: "自動連携", frequency: "月次", editable: "不可" },
    { name: "受注金額", category: "B", source: "手入力", inputter: "営業/PM", frequency: "受注時", editable: "承認後不可" },
    { name: "実行予算", category: "B", source: "手入力", inputter: "PM", frequency: "着工時", editable: "承認後不可" },
    { name: "進捗率", category: "C", source: "手入力", inputter: "所長/PM", frequency: "週次", editable: "可" },
    { name: "着地原価見込", category: "C", source: "手入力", inputter: "所長/PM", frequency: "週次", editable: "可" },
    { name: "追加原価見込", category: "C", source: "手入力", inputter: "所長/PM", frequency: "随時", editable: "可" },
    { name: "消化率", category: "D", source: "計算", inputter: "自動", frequency: "リアルタイム", editable: "不可" },
    { name: "着地粗利", category: "D", source: "計算", inputter: "自動", frequency: "リアルタイム", editable: "不可" },
    { name: "予実差異", category: "D", source: "計算", inputter: "自動", frequency: "リアルタイム", editable: "不可" },
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "現状棚卸",
      description: "現在使っているデータ項目をすべてリストアップし、どこから来ているか、誰が入力しているかを整理する",
      duration: "1-2週間",
    },
    {
      step: "02",
      title: "分類・設計",
      description: "各データ項目をA/B/C/Dに分類し、ソース・入力者・更新頻度・編集可否のルールを決める",
      duration: "1週間",
    },
    {
      step: "03",
      title: "データフロー設計",
      description: "基幹システムからの自動連携、手入力の画面、計算ロジックを設計する",
      duration: "2-3週間",
    },
    {
      step: "04",
      title: "運用ルール策定",
      description: "「誰が」「いつ」「何を」入力するかの運用ルールを明文化し、関係者に周知する",
      duration: "1週間",
    },
  ];

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case "A":
        return "bg-[var(--gray-200)] text-[var(--gray-700)]";
      case "B":
        return "bg-green-100 text-green-700";
      case "C":
        return "bg-blue-100 text-blue-700";
      case "D":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-[var(--gray-100)] text-[var(--gray-600)]";
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            Data Design
          </p>
          <h1 className="font-mincho text-3xl md:text-5xl font-medium text-[var(--gray-900)] mb-8 leading-tight">
            データ設計
          </h1>
          <p className="text-xl text-[var(--gray-700)] max-w-3xl mb-6">
            原価管理を機能させる4分類。
            <br />
            <span className="text-[var(--accent)]">ルールを決めれば、あとは回る。</span>
          </p>
          <p className="text-[var(--gray-600)] max-w-3xl leading-relaxed">
            原価管理システムが使われない根本原因は、データの「性質」を定義していないことにあります。
            すべてのデータ項目を4つに分類し、「誰が何を入れるか」を明確にする——これが原価管理DXの第一歩です。
          </p>
        </div>
      </section>

      {/* Why Data Gets Confused */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
              問題の本質
            </p>
            <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-8">
              なぜデータが混乱するのか
            </h2>

            <div className="prose prose-lg max-w-none text-[var(--gray-700)] leading-relaxed">
              <p className="mb-6">
                すべてのデータには<strong>性質</strong>があります：
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-[var(--gray-50)] border border-[var(--border)] p-4">
                  <p className="font-medium text-[var(--gray-900)] mb-1">ソース</p>
                  <p className="text-sm text-[var(--gray-600)]">どこから来るか（基幹システム？手入力？）</p>
                </div>
                <div className="bg-[var(--gray-50)] border border-[var(--border)] p-4">
                  <p className="font-medium text-[var(--gray-900)] mb-1">権限</p>
                  <p className="text-sm text-[var(--gray-600)]">誰が変更できるか（誰でも？承認者のみ？）</p>
                </div>
                <div className="bg-[var(--gray-50)] border border-[var(--border)] p-4">
                  <p className="font-medium text-[var(--gray-900)] mb-1">頻度</p>
                  <p className="text-sm text-[var(--gray-600)]">いつ更新されるか（日次？週次？随時？）</p>
                </div>
                <div className="bg-[var(--gray-50)] border border-[var(--border)] p-4">
                  <p className="font-medium text-[var(--gray-900)] mb-1">優先</p>
                  <p className="text-sm text-[var(--gray-600)]">競合時どちらが勝つか</p>
                </div>
              </div>

              <div className="border-2 border-[var(--accent)] bg-white p-6">
                <p className="text-[var(--gray-900)] font-medium">
                  これを決めずにシステムを作るから、「どのデータが正しいかわからない」状態になります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data 4 Classifications */}
      <section className="py-16 md:py-24 bg-[var(--gray-50)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            データの4分類
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-4">
            すべてのデータ項目を4つに分類する
          </h2>
          <p className="text-[var(--gray-600)] mb-12">
            これだけで混乱は解消する。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {dataCategories.map((cat) => (
              <div
                key={cat.code}
                className={`bg-white border-2 ${cat.borderColor} p-8`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${cat.bgColor} flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${cat.textColor}`}>{cat.code}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[var(--gray-900)]">{cat.title}</h3>
                    <p className="text-sm text-[var(--gray-500)]">{cat.english}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex">
                    <span className="w-16 text-sm text-[var(--gray-500)]">性質</span>
                    <span className="text-[var(--gray-700)]">{cat.nature}</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm text-[var(--gray-500)]">ソース</span>
                    <span className="text-[var(--gray-700)]">{cat.source}</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm text-[var(--gray-500)]">編集</span>
                    <span className={`font-medium ${cat.editColor}`}>{cat.edit}</span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-sm text-[var(--gray-500)]">更新</span>
                    <span className="text-[var(--gray-700)]">{cat.update}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--gray-500)] mb-2">例</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((example, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 ${cat.bgColor} text-sm ${cat.textColor}`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Item Matrix */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            データ項目マトリクス
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-4">
            原価管理で使う全データ項目を分類した例
          </h2>
          <p className="text-[var(--gray-600)] mb-12">
            このマトリクスを作成することで、「誰が何を入れるか」が明確になります。
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[var(--gray-900)] text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">データ項目</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">区分</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">ソース</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">入力者</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">更新頻度</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">編集可否</th>
                </tr>
              </thead>
              <tbody>
                {dataItems.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-[var(--gray-50)]"}
                  >
                    <td className="px-4 py-3 text-sm text-[var(--gray-900)] border-b border-[var(--border)]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 border-b border-[var(--border)]">
                      <span className={`px-2 py-1 text-xs font-medium ${getCategoryBadgeStyle(item.category)}`}>
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[var(--gray-600)] border-b border-[var(--border)]">
                      {item.source}
                    </td>
                    <td className="px-4 py-3 text-sm text-[var(--gray-600)] border-b border-[var(--border)]">
                      {item.inputter}
                    </td>
                    <td className="px-4 py-3 text-sm text-[var(--gray-600)] border-b border-[var(--border)]">
                      {item.frequency}
                    </td>
                    <td className="px-4 py-3 text-sm text-[var(--gray-600)] border-b border-[var(--border)]">
                      {item.editable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-400)] mb-4">
            導入ステップ
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl mb-12">
            データ設計の進め方
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step) => (
              <div
                key={step.step}
                className="border border-[var(--gray-700)] bg-[var(--gray-800)] p-6"
              >
                <span className="font-mincho text-3xl text-[var(--accent)]">{step.step}</span>
                <h3 className="font-medium text-white mt-4 mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--gray-400)] leading-relaxed mb-4">
                  {step.description}
                </p>
                <p className="text-xs text-[var(--gray-500)]">目安：{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
              私たちのアプローチ
            </p>
            <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-8">
              「ルールを決めてから、ツールを選ぶ」
            </h2>

            <p className="text-[var(--gray-600)] leading-relaxed mb-8">
              多くの企業は「ツールを入れてから、運用を考える」。
              <br />
              私たちは逆です。まずデータの分類ルールを決め、それに合うツール・仕組みを設計します。
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="border border-[var(--border)] p-6">
                <p className="font-mincho text-2xl text-[var(--accent)] mb-2">1</p>
                <p className="text-[var(--gray-900)] font-medium">データ設計</p>
                <p className="text-sm text-[var(--gray-600)] mt-2">
                  4分類の定義と入力者・責任者の明確化
                </p>
              </div>
              <div className="border border-[var(--border)] p-6">
                <p className="font-mincho text-2xl text-[var(--accent)] mb-2">2</p>
                <p className="text-[var(--gray-900)] font-medium">運用設計</p>
                <p className="text-sm text-[var(--gray-600)] mt-2">
                  誰が・いつ・何を入力するかの運用ルール
                </p>
              </div>
              <div className="border border-[var(--border)] p-6">
                <p className="font-mincho text-2xl text-[var(--accent)] mb-2">3</p>
                <p className="text-[var(--gray-900)] font-medium">ツール選定</p>
                <p className="text-sm text-[var(--gray-600)] mt-2">
                  ルールを実現できる最適なツールの選定・構築
                </p>
              </div>
            </div>

            <div className="border-2 border-[var(--accent)] p-8">
              <p className="font-mincho text-lg text-[var(--gray-900)]">
                「システムを入れたのに使われない」を防ぐ、唯一の方法です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom text-center">
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
            データ設計から始めませんか？
          </h2>
          <p className="text-[var(--gray-600)] mb-8 max-w-xl mx-auto">
            「原価管理システムが使われない」「Excelに戻ってしまう」——
            その原因は、データ設計にあるかもしれません。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              お問い合わせ
            </Link>
            <Link href="/accounting-challenges" className="btn-outline">
              建設業会計の課題に戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
