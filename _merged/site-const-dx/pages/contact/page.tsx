"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="border border-[var(--border)] p-12">
              <div className="w-16 h-16 border-2 border-[var(--gray-900)] flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-[var(--gray-900)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="font-mincho text-2xl text-[var(--gray-900)] mb-4">
                お問い合わせありがとうございます
              </h1>
              <p className="text-sm text-[var(--gray-600)] mb-8">
                内容を確認の上、2営業日以内にご連絡いたします。
              </p>
              <Link href="/" className="btn-outline">
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-widest text-[var(--gray-500)] mb-4">お問い合わせ</p>
            <h1 className="font-mincho text-3xl md:text-4xl text-[var(--gray-900)] mb-6 tracking-wide">
              ご相談・お問い合わせ
            </h1>
            <p className="text-[var(--gray-600)] leading-relaxed">
              建設業のDX・経営管理に関するご相談、
              <br />
              サービスに関するご質問など、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Direct Contact */}
                  <div>
                    <h3 className="text-sm font-medium text-[var(--gray-900)] mb-4">直接のご連絡</h3>
                    <div className="space-y-3">
                      <a
                        href="mailto:info@h-insight.jp"
                        className="flex items-center gap-3 text-sm text-[var(--gray-600)] hover:text-[var(--gray-900)] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        info@h-insight.jp
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-[var(--border)] pt-8">
                    <h3 className="text-sm font-medium text-[var(--gray-900)] mb-4">ご相談の流れ</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <span className="text-xs text-[var(--gray-400)]">01</span>
                        <div>
                          <p className="text-sm text-[var(--gray-900)]">お問い合わせ</p>
                          <p className="text-xs text-[var(--gray-500)]">フォームまたはメール</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-xs text-[var(--gray-400)]">02</span>
                        <div>
                          <p className="text-sm text-[var(--gray-900)]">日程調整</p>
                          <p className="text-xs text-[var(--gray-500)]">2営業日以内にご連絡</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-xs text-[var(--gray-400)]">03</span>
                        <div>
                          <p className="text-sm text-[var(--gray-900)]">ヒアリング</p>
                          <p className="text-xs text-[var(--gray-500)]">オンラインで実施</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[var(--border)] pt-8">
                    <h3 className="text-sm font-medium text-[var(--gray-900)] mb-4">よくあるご相談</h3>
                    <ul className="space-y-2 text-xs text-[var(--gray-600)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--gray-400)]">—</span>
                        原価管理システムが使われない
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--gray-400)]">—</span>
                        月末まで数字がわからない
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--gray-400)]">—</span>
                        Excelでの管理に限界を感じている
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--gray-400)]">—</span>
                        人材育成の仕組みがない
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-8">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm text-[var(--gray-900)] mb-2">
                        お名前 <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-[var(--border)] focus:border-[var(--gray-900)] bg-transparent transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm text-[var(--gray-900)] mb-2">
                        会社名 <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-[var(--border)] focus:border-[var(--gray-900)] bg-transparent transition-colors"
                        placeholder="株式会社○○建設"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm text-[var(--gray-900)] mb-2">
                        メールアドレス <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-[var(--border)] focus:border-[var(--gray-900)] bg-transparent transition-colors"
                        placeholder="yamada@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm text-[var(--gray-900)] mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-[var(--border)] focus:border-[var(--gray-900)] bg-transparent transition-colors"
                        placeholder="03-1234-5678"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm text-[var(--gray-900)] mb-2">
                        お問い合わせ種別
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-[var(--border)] focus:border-[var(--gray-900)] bg-transparent transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">選択してください</option>
                        <option value="consultation">相談したい</option>
                        <option value="quotation">見積もりがほしい</option>
                        <option value="question">質問がある</option>
                        <option value="other">その他</option>
                      </select>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm text-[var(--gray-900)] mb-2">
                        関心のあるサービス
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-[var(--border)] focus:border-[var(--gray-900)] bg-transparent transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">選択してください</option>
                        <option value="management-dx">経営管理DX（原価管理・ダッシュボード）</option>
                        <option value="gyomu-dock">業務ドック（業務改善診断）</option>
                        <option value="training">人材育成（1人所長育成）</option>
                        <option value="diagnosis">無料診断</option>
                        <option value="undecided">まだ決まっていない</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm text-[var(--gray-900)] mb-2">
                        ご相談内容
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-0 py-3 border-0 border-b border-[var(--border)] focus:border-[var(--gray-900)] bg-transparent transition-colors resize-none"
                        placeholder="現在お困りのことや、ご質問があればご記入ください。漠然とした内容でも大丈夫です。"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "送信中..." : "送信する"}
                      </button>
                    </div>
                  </div>
                </form>

                {/* Privacy Note */}
                <p className="text-xs text-[var(--gray-500)] mt-8">
                  ご入力いただいた情報は、お問い合わせへの対応のみに使用し、第三者への提供は行いません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 md:py-28 bg-[var(--gray-100)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-mincho text-xl text-[var(--gray-900)] mb-6">
              まずは診断から始めたい方
            </h2>
            <p className="text-sm text-[var(--gray-600)] mb-8">
              「相談の前に、自分の会社の状況を把握したい」という方は、
              <br />
              3分でできる無料診断をお試しください。
            </p>
            <Link href="/diagnosis" className="btn-outline">
              無料診断を受ける
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
