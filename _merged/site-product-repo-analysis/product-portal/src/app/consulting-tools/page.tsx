'use client';

import { useState } from 'react';
import Link from 'next/link';

type Lang = 'ja' | 'en';

// ============================================
// Tool metadata (shared across languages)
// ============================================
const toolIcons = [
  // InsightSlide - document/slide icon
  <svg key="slide" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>,
  // InsightMovie - video icon
  <svg key="movie" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>,
  // InsightPy - code icon
  <svg key="py" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  // InsightPy Pro - orchestrator icon
  <svg key="pypro" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>,
  // InsightInterview - mic icon
  <svg key="interview" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>,
];

const toolColors = [
  { color: '#D97706', bg: 'rgba(217,119,6,0.06)', border: 'rgba(217,119,6,0.12)' },
  { color: '#DC2626', bg: 'rgba(220,38,38,0.06)', border: 'rgba(220,38,38,0.12)' },
  { color: '#16A34A', bg: 'rgba(22,163,74,0.06)', border: 'rgba(22,163,74,0.12)' },
  { color: '#7C3AED', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.12)' },
  { color: '#2563EB', bg: 'rgba(37,99,235,0.06)', border: 'rgba(37,99,235,0.12)' },
];

// ============================================
// Bilingual content
// ============================================
const i18n = {
  ja: {
    langLabel: 'EN',
    heroEyebrow: 'Consulting Toolkit',
    heroTitle1: 'コンサルティング業務に',
    heroHighlight: '集中する',
    heroTitle2: 'ための道具',
    heroSub: '外注に頼らず、提案書作成・動画制作・業務自動化・インタビューまで、すべてを自分の手で。若手コンサルタント・SIerの生産性を飛躍的に高める、高級業務改善ツール集。',
    ctaPrimary: '導入のご相談',
    ctaSecondary: 'ツールを見る',

    problemEyebrow: 'Challenge',
    problemTitle: '本来の仕事に集中できていますか',
    problemSub: 'コンサルタントの価値は「考えること」にあります。しかし現実には、多くの時間が付帯業務に費やされています。',
    painPoints: [
      { title: '提案書の整形', desc: 'PowerPointの書式調整に何時間も費やしている', icon: '📑' },
      { title: '動画コンテンツ制作', desc: '研修動画や提案動画を外注し、時間とコストがかかる', icon: '🎬' },
      { title: '定型業務の手作業', desc: 'Excelマクロやデータ加工を手動で繰り返している', icon: '⚙️' },
      { title: 'インタビュー記録', desc: 'ヒアリング内容の文字起こしと整理に追われている', icon: '🎙️' },
    ],

    solutionEyebrow: 'Solution',
    solutionTitle: '5つのツールで、本業に集中',
    solutionSub: '外注不要。すべてを手元で完結させる、プロフェッショナルのためのツール集。',

    tools: [
      {
        name: 'InsightSlide',
        tagline: 'PowerPoint業務の自動化',
        desc: 'スライドの解析・更新・PDF変換を自動化。提案書のコンテンツ抽出からテンプレート適用まで、PowerPoint業務を根本から変革します。',
        features: ['PDF→PPTX変換', 'コンテンツ抽出・更新', 'バッチ処理', 'OCR対応（日英）', 'テンプレート適用', '2ファイル比較'],
      },
      {
        name: 'InsightMovie',
        tagline: '動画の自動生成',
        desc: '静止画やPowerPointから高品質な動画を自動生成。字幕・トランジション・BGMも自動設定。研修動画や提案動画を、外注なしで即座に作成。',
        features: ['静止画→動画変換', 'PPTXからの動画生成', '字幕自動生成', 'トランジション設定', 'BGM自動選択', '4K対応'],
      },
      {
        name: 'InsightPy',
        tagline: 'Python自動化実行環境',
        desc: 'Windows業務の自動化に特化したPython実行環境。Excel処理・データ加工・ファイル操作を自動化。プリセットで即実行。',
        features: ['安全な実行環境', 'プリセットスクリプト', 'Excel/CSV自動処理', 'ファイル操作自動化', 'スケジュール実行', 'ログ管理'],
      },
      {
        name: 'InsightPy Pro',
        tagline: 'RPA オーケストレーター',
        desc: 'UiPath Orchestrator同等の機能をPythonで実現。ジョブのスケジューリング、ロボット管理、キュー処理をWebベースで統合管理。',
        features: ['ジョブスケジューリング', 'ロボット管理', 'キューシステム', 'リアルタイムログ', 'WebSocket対応', 'アセット管理'],
      },
      {
        name: 'InsightInterview',
        tagline: 'AI インタビュー自動化',
        desc: '話すだけでAIが自動文字起こし・要約・資料作成。ベテランの暗黙知を構造化し、引継ぎ資料に変換。ヒアリング業務の生産性を劇的に向上。',
        features: ['音声自動文字起こし', 'AI要約・構造化', '引継ぎ資料自動作成', '質問テンプレート', '検索・アーカイブ', 'エクスポート対応'],
      },
    ],

    workflowEyebrow: 'Transformation',
    workflowTitle: '業務フローが変わる',
    workflowBefore: {
      title: '従来のワークフロー',
      items: [
        { task: '提案書作成', method: 'デザイナーに外注', time: '3〜5日', cost: '¥50,000〜' },
        { task: '動画制作', method: '映像制作会社に外注', time: '2〜4週間', cost: '¥300,000〜' },
        { task: '業務自動化', method: 'SIerに開発依頼', time: '1〜3ヶ月', cost: '¥1,000,000〜' },
        { task: 'インタビュー記録', method: '手動で文字起こし', time: '1〜2日', cost: '人件費' },
      ],
    },
    workflowAfter: {
      title: 'ツール集導入後',
      items: [
        { task: '提案書作成', method: 'InsightSlide', time: '数分', cost: '¥0' },
        { task: '動画制作', method: 'InsightMovie', time: '数分', cost: '¥0' },
        { task: '業務自動化', method: 'InsightPy / Pro', time: '即日', cost: '¥0' },
        { task: 'インタビュー記録', method: 'InsightInterview', time: 'リアルタイム', cost: '¥0' },
      ],
    },

    statsEyebrow: 'Impact',
    statsTitle: '導入効果',
    stats: [
      { value: '90%', label: '提案書作成時間の削減', sub: '数日→数分' },
      { value: '¥0', label: '動画制作の外注コスト', sub: '完全内製化' },
      { value: '即日', label: '業務自動化の導入', sub: 'SIer不要' },
      { value: '100%', label: 'インタビュー自動記録', sub: '手作業ゼロ' },
    ],

    targetEyebrow: 'For You',
    targetTitle: 'こんな方にお勧めします',
    targets: [
      { title: '若手コンサルタント', desc: '雑務から解放され、戦略立案やクライアント対応に集中したい方' },
      { title: 'SIer・システムインテグレーター', desc: '提案書や動画の作成を内製化し、プロジェクト推進に注力したい方' },
      { title: 'マネージャー・リーダー', desc: 'チームの生産性を高め、外注コストを削減したい管理職の方' },
      { title: '独立コンサルタント', desc: '一人でも高品質なアウトプットを出し、専門業務に集中したい方' },
    ],

    ctaTitle: 'コンサルティング業務を、次のレベルへ',
    ctaSub: 'まずは無料トライアルから。ツール集の実力をお確かめください。',
    ctaButton: '導入のご相談',
    ctaNote: '導入コンサルティングも承ります',
  },
  en: {
    langLabel: 'JP',
    heroEyebrow: 'Consulting Toolkit',
    heroTitle1: 'Tools to help you',
    heroHighlight: 'focus',
    heroTitle2: 'on consulting',
    heroSub: 'No more outsourcing. Handle proposals, videos, automation, and interviews yourself. A premium toolkit that dramatically boosts productivity for young consultants and system integrators.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'View Tools',

    problemEyebrow: 'Challenge',
    problemTitle: 'Are you focusing on what truly matters?',
    problemSub: 'A consultant\'s value lies in strategic thinking. Yet reality forces you to spend countless hours on operational tasks.',
    painPoints: [
      { title: 'Proposal Formatting', desc: 'Hours spent adjusting PowerPoint layouts and styles', icon: '📑' },
      { title: 'Video Production', desc: 'Outsourcing training and proposal videos at high cost', icon: '🎬' },
      { title: 'Manual Operations', desc: 'Repeating Excel macros and data processing by hand', icon: '⚙️' },
      { title: 'Interview Documentation', desc: 'Struggling with transcription and note organization', icon: '🎙️' },
    ],

    solutionEyebrow: 'Solution',
    solutionTitle: 'Five tools to reclaim your focus',
    solutionSub: 'No outsourcing required. A professional toolkit to complete everything in-house.',

    tools: [
      {
        name: 'InsightSlide',
        tagline: 'PowerPoint Automation',
        desc: 'Automate slide analysis, updates, and PDF conversion. From content extraction to template application, transform your entire PowerPoint workflow.',
        features: ['PDF to PPTX Conversion', 'Content Extraction & Update', 'Batch Processing', 'OCR (JP/EN)', 'Template Application', '2-File Comparison'],
      },
      {
        name: 'InsightMovie',
        tagline: 'Auto Video Generation',
        desc: 'Generate professional videos from images and PowerPoint. Auto subtitles, transitions, and BGM. Create training and proposal videos instantly without outsourcing.',
        features: ['Image to Video', 'PPTX to Video', 'Auto Subtitles', 'Transition Effects', 'Auto BGM', '4K Support'],
      },
      {
        name: 'InsightPy',
        tagline: 'Python Automation Environment',
        desc: 'A secure Python execution environment for Windows automation. Automate Excel, data processing, and file operations. Run presets without coding.',
        features: ['Secure Execution', 'Preset Scripts', 'Excel/CSV Processing', 'File Automation', 'Scheduled Runs', 'Log Management'],
      },
      {
        name: 'InsightPy Pro',
        tagline: 'RPA Orchestrator',
        desc: 'UiPath Orchestrator-equivalent functionality in Python. Web-based job scheduling, robot management, and queue processing for large-scale automation.',
        features: ['Job Scheduling', 'Robot Management', 'Queue System', 'Real-time Logging', 'WebSocket Support', 'Asset Management'],
      },
      {
        name: 'InsightInterview',
        tagline: 'AI Interview Automation',
        desc: 'Just talk and AI handles transcription, summarization, and document creation. Convert tacit knowledge into structured handover documents instantly.',
        features: ['Auto Transcription', 'AI Summarization', 'Auto Document Creation', 'Question Templates', 'Search & Archive', 'Export Support'],
      },
    ],

    workflowEyebrow: 'Transformation',
    workflowTitle: 'Transform your workflow',
    workflowBefore: {
      title: 'Traditional Workflow',
      items: [
        { task: 'Proposals', method: 'Outsource to designer', time: '3-5 days', cost: '$350+' },
        { task: 'Videos', method: 'Outsource to agency', time: '2-4 weeks', cost: '$2,000+' },
        { task: 'Automation', method: 'Request SIer dev', time: '1-3 months', cost: '$7,000+' },
        { task: 'Interviews', method: 'Manual transcription', time: '1-2 days', cost: 'Labor' },
      ],
    },
    workflowAfter: {
      title: 'With the Toolkit',
      items: [
        { task: 'Proposals', method: 'InsightSlide', time: 'Minutes', cost: '$0' },
        { task: 'Videos', method: 'InsightMovie', time: 'Minutes', cost: '$0' },
        { task: 'Automation', method: 'InsightPy / Pro', time: 'Same day', cost: '$0' },
        { task: 'Interviews', method: 'InsightInterview', time: 'Real-time', cost: '$0' },
      ],
    },

    statsEyebrow: 'Impact',
    statsTitle: 'Measurable Results',
    stats: [
      { value: '90%', label: 'Reduction in proposal time', sub: 'Days to minutes' },
      { value: '$0', label: 'Video outsourcing cost', sub: 'Fully in-house' },
      { value: 'Same day', label: 'Automation deployment', sub: 'No SIer needed' },
      { value: '100%', label: 'Auto interview documentation', sub: 'Zero manual work' },
    ],

    targetEyebrow: 'For You',
    targetTitle: 'Who this toolkit is for',
    targets: [
      { title: 'Junior Consultants', desc: 'Free yourself from busywork and focus on strategy and client engagement' },
      { title: 'System Integrators', desc: 'Bring proposal and video creation in-house to focus on project delivery' },
      { title: 'Managers & Leaders', desc: 'Boost team productivity and reduce outsourcing costs' },
      { title: 'Independent Consultants', desc: 'Produce high-quality outputs solo and focus on your specialty' },
    ],

    ctaTitle: 'Take your consulting to the next level',
    ctaSub: 'Start with a free trial. Experience the power of the toolkit firsthand.',
    ctaButton: 'Get Started',
    ctaNote: 'Implementation consulting available',
  },
};

// ============================================
// Page Component
// ============================================
export default function ConsultingToolsPage() {
  const [lang, setLang] = useState<Lang>('ja');
  const t = i18n[lang];

  const toggleLang = () => setLang(lang === 'ja' ? 'en' : 'ja');

  return (
    <div
      className="premium-page"
      style={{
        background: 'var(--bg-ivory)',
        color: 'var(--text-ivory-primary)',
        fontFamily: "var(--font-body), 'DM Sans', 'Noto Sans JP', sans-serif",
      }}
    >
      {/* ============================================
          Language Toggle
          ============================================ */}
      <div className="fixed top-20 right-6 z-40">
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300"
          style={{
            background: 'white',
            border: '1px solid var(--border-ivory)',
            color: 'var(--text-ivory-accent)',
            boxShadow: 'var(--shadow-card-ivory)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--gold)' }}
          />
          {t.langLabel}
        </button>
      </div>

      {/* ============================================
          Hero Section
          ============================================ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-12 overflow-hidden"
        style={{ paddingTop: '140px', paddingBottom: '100px' }}
      >
        {/* Background radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(184,148,47,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs font-medium mb-10 tracking-wider"
          style={{
            background: 'var(--gold-muted)',
            border: '1px solid var(--gold-border)',
            color: 'var(--text-ivory-accent)',
            letterSpacing: '0.04em',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full gold-pulse"
            style={{ background: 'var(--gold)' }}
          />
          {t.heroEyebrow}
        </div>

        {/* Heading */}
        <h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight mb-7 max-w-4xl"
          style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            letterSpacing: '-0.02em',
            color: 'var(--text-ivory-primary)',
          }}
        >
          {t.heroTitle1}
          <br />
          <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
            {t.heroHighlight}
          </span>
          <br />
          {t.heroTitle2}
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg max-w-xl mb-12 leading-relaxed"
          style={{
            color: 'var(--text-ivory-secondary)',
            lineHeight: '1.8',
          }}
        >
          {t.heroSub}
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center">
          <a
            href="#tools"
            className="text-sm flex items-center gap-2 transition-colors duration-300 btn-gold px-10 py-4"
          >
            {t.ctaSecondary}
            <span>&rarr;</span>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          height: '1px',
          background: 'var(--border-ivory)',
        }}
      />

      {/* ============================================
          Problem Section
          ============================================ */}
      <section className="px-6 lg:px-12 py-24 lg:py-32" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="premium-eyebrow mb-5">{t.problemEyebrow}</div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4"
          style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            letterSpacing: '-0.01em',
            color: 'var(--text-ivory-primary)',
          }}
        >
          {t.problemTitle}
        </h2>
        <p
          className="text-base max-w-xl mb-16"
          style={{ color: 'var(--text-ivory-secondary)' }}
        >
          {t.problemSub}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.painPoints.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'white',
                border: '1px solid var(--border-ivory)',
                boxShadow: 'var(--shadow-card-ivory)',
              }}
            >
              <span className="text-3xl mb-4 block">{point.icon}</span>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: 'var(--text-ivory-primary)' }}
              >
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-ivory-secondary)' }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          height: '1px',
          background: 'var(--border-ivory)',
        }}
      />

      {/* ============================================
          Solution / Tool Suite Section
          ============================================ */}
      <section
        id="tools"
        className="px-6 lg:px-12 py-24 lg:py-32"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="premium-eyebrow mb-5">{t.solutionEyebrow}</div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4"
          style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            letterSpacing: '-0.01em',
            color: 'var(--text-ivory-primary)',
          }}
        >
          {t.solutionTitle}
        </h2>
        <p
          className="text-base max-w-xl mb-16"
          style={{ color: 'var(--text-ivory-secondary)' }}
        >
          {t.solutionSub}
        </p>

        {/* Tool Cards */}
        <div className="space-y-5">
          {t.tools.map((tool, i) => (
            <div key={tool.name} className="premium-card group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: toolColors[i].bg,
                    border: `1px solid ${toolColors[i].border}`,
                    color: toolColors[i].color,
                  }}
                >
                  {toolIcons[i]}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3
                      className="text-xl sm:text-2xl font-normal"
                      style={{
                        fontFamily: "var(--font-display), 'Playfair Display', serif",
                        color: 'var(--text-ivory-primary)',
                      }}
                    >
                      {tool.name}
                    </h3>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full self-start"
                      style={{
                        background: 'var(--gold-muted)',
                        color: 'var(--text-ivory-accent)',
                        border: '1px solid var(--gold-border)',
                      }}
                    >
                      {tool.tagline}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5 max-w-2xl"
                    style={{ color: 'var(--text-ivory-secondary)' }}
                  >
                    {tool.desc}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature, fi) => (
                      <span
                        key={fi}
                        className="text-xs px-3 py-1.5 rounded-md"
                        style={{
                          background: 'var(--bg-ivory-elevated)',
                          color: 'var(--text-ivory-secondary)',
                          border: '1px solid var(--border-ivory)',
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          height: '1px',
          background: 'var(--border-ivory)',
        }}
      />

      {/* ============================================
          Workflow Transformation Section
          ============================================ */}
      <section className="px-6 lg:px-12 py-24 lg:py-32" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="premium-eyebrow mb-5">{t.workflowEyebrow}</div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-16"
          style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            letterSpacing: '-0.01em',
            color: 'var(--text-ivory-primary)',
          }}
        >
          {t.workflowTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'white',
              border: '1px solid var(--border-ivory)',
              boxShadow: 'var(--shadow-card-ivory)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                style={{
                  background: 'rgba(220,38,38,0.08)',
                  color: '#DC2626',
                  border: '1px solid rgba(220,38,38,0.15)',
                }}
              >
                &times;
              </div>
              <h3
                className="text-lg font-medium"
                style={{ color: 'var(--text-ivory-primary)' }}
              >
                {t.workflowBefore.title}
              </h3>
            </div>

            <div className="space-y-0">
              {t.workflowBefore.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4"
                  style={{
                    borderBottom:
                      i < t.workflowBefore.items.length - 1
                        ? '1px solid var(--border-ivory)'
                        : 'none',
                  }}
                >
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-ivory-primary)' }}
                    >
                      {item.task}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: 'var(--text-ivory-tertiary)' }}
                    >
                      {item.method}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-sm font-medium"
                      style={{ color: '#DC2626' }}
                    >
                      {item.time}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: 'var(--text-ivory-tertiary)' }}
                    >
                      {item.cost}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: 'white',
              border: '1px solid var(--gold-border)',
              boxShadow: 'var(--shadow-card-ivory), var(--shadow-gold)',
            }}
          >
            {/* Gold top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'var(--gold-gradient)' }}
            />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: 'var(--gold-gradient)',
                  color: 'white',
                  boxShadow: 'var(--shadow-gold)',
                }}
              >
                &#10003;
              </div>
              <h3
                className="text-lg font-medium"
                style={{ color: 'var(--text-ivory-primary)' }}
              >
                {t.workflowAfter.title}
              </h3>
            </div>

            <div className="space-y-0">
              {t.workflowAfter.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4"
                  style={{
                    borderBottom:
                      i < t.workflowAfter.items.length - 1
                        ? '1px solid var(--border-ivory)'
                        : 'none',
                  }}
                >
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-ivory-primary)' }}
                    >
                      {item.task}
                    </div>
                    <div
                      className="text-xs mt-0.5 font-medium"
                      style={{ color: 'var(--text-ivory-accent)' }}
                    >
                      {item.method}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-sm font-semibold"
                      style={{ color: '#16A34A' }}
                    >
                      {item.time}
                    </div>
                    <div
                      className="text-xs mt-0.5 font-medium"
                      style={{ color: '#16A34A' }}
                    >
                      {item.cost}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Stats Section
          ============================================ */}
      <section
        className="px-6 lg:px-12 py-24 lg:py-32"
        style={{
          background: 'var(--bg-ivory-secondary)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="premium-eyebrow mb-5">{t.statsEyebrow}</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-16"
            style={{
              fontFamily: "var(--font-display), 'Playfair Display', serif",
              letterSpacing: '-0.01em',
              color: 'var(--text-ivory-primary)',
            }}
          >
            {t.statsTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: 'white',
                  border: '1px solid var(--border-ivory)',
                  boxShadow: 'var(--shadow-card-ivory)',
                }}
              >
                {/* Gold top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-50"
                  style={{ background: 'var(--gold-gradient)' }}
                />
                <div
                  className="text-xs font-medium uppercase tracking-wider mb-2"
                  style={{
                    color: 'var(--text-ivory-tertiary)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-3xl sm:text-4xl font-normal mb-1"
                  style={{
                    fontFamily: "var(--font-display), 'Playfair Display', serif",
                    color: 'var(--text-ivory-primary)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: '#16A34A' }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Target Audience Section
          ============================================ */}
      <section className="px-6 lg:px-12 py-24 lg:py-32" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="premium-eyebrow mb-5">{t.targetEyebrow}</div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-16"
          style={{
            fontFamily: "var(--font-display), 'Playfair Display', serif",
            letterSpacing: '-0.01em',
            color: 'var(--text-ivory-primary)',
          }}
        >
          {t.targetTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.targets.map((target, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex gap-5 items-start transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'white',
                border: '1px solid var(--border-ivory)',
                boxShadow: 'var(--shadow-card-ivory)',
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold"
                style={{
                  background: 'var(--gold-muted)',
                  color: 'var(--text-ivory-accent)',
                  border: '1px solid var(--gold-border)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{
                    fontFamily: "var(--font-display), 'Playfair Display', serif",
                    color: 'var(--text-ivory-primary)',
                  }}
                >
                  {target.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-ivory-secondary)' }}
                >
                  {target.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          CTA Section
          ============================================ */}
      <section
        className="px-6 lg:px-12 py-24 lg:py-32"
        style={{
          background: 'var(--bg-dark)',
        }}
      >
        <div
          className="text-center"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-6"
            style={{
              fontFamily: "var(--font-display), 'Playfair Display', serif",
              letterSpacing: '-0.01em',
              color: 'var(--text-on-dark)',
            }}
          >
            {t.ctaTitle}
          </h2>
          <p
            className="text-base mb-10 leading-relaxed"
            style={{
              color: 'rgba(243,240,235,0.6)',
            }}
          >
            {t.ctaSub}
          </p>
          <p
            className="text-xs mt-6"
            style={{ color: 'rgba(243,240,235,0.4)' }}
          >
            {t.ctaNote}
          </p>
        </div>
      </section>
    </div>
  );
}
