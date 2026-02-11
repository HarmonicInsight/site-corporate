export type Locale = 'ja' | 'en' | 'zh';

export const localeNames: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
  zh: '中文',
};

const translations = {
  // ─── Common ───
  common: {
    companyName: {
      ja: 'HARMONIC insight',
      en: 'HARMONIC insight',
      zh: 'HARMONIC insight',
    },
    contact: {
      ja: 'お問い合わせ',
      en: 'Contact Us',
      zh: '联系我们',
    },
    learnMore: {
      ja: '詳しく見る →',
      en: 'Learn more →',
      zh: '了解更多 →',
    },
    tryFree: {
      ja: '無料で試す',
      en: 'Try Free',
      zh: '免费试用',
    },
    freeConsultation: {
      ja: '無料相談する',
      en: 'Free Consultation',
      zh: '免费咨询',
    },
  },

  // ─── Navigation ───
  nav: {
    insightOffice: {
      ja: 'InsightOffice',
      en: 'InsightOffice',
      zh: 'InsightOffice',
    },
    rpa: {
      ja: 'InsightBot RPA',
      en: 'InsightBot RPA',
      zh: 'InsightBot RPA',
    },
    tools: {
      ja: '業務改善ツール',
      en: 'Business Tools',
      zh: '业务改善工具',
    },
    education: {
      ja: '教育・研修',
      en: 'Education',
      zh: '教育培训',
    },
    consulting: {
      ja: 'コンサルティング',
      en: 'Consulting',
      zh: '咨询服务',
    },
    caseStudies: {
      ja: '導入事例',
      en: 'Case Studies',
      zh: '成功案例',
    },
  },

  // ─── Hero ───
  hero: {
    credential: {
      ja: '28年間、100社以上の業務改善実績',
      en: '28 years experience. 100+ companies transformed.',
      zh: '28年经验，100+企业数字化转型实绩',
    },
    titleLine1: {
      ja: '業務の課題を、',
      en: 'Solve business problems',
      zh: '用AI和产品',
    },
    titleLine2: {
      ja: 'AIとプロダクトで解決する。',
      en: 'with AI and products.',
      zh: '解决业务难题。',
    },
    tags: {
      ja: 'Excel管理 / RPA移行 / BPO AI化 / ナレッジ保全',
      en: 'Excel Management / RPA Migration / BPO AI / Knowledge Preservation',
      zh: 'Excel管理 / RPA迁移 / BPO AI化 / 知识保全',
    },
    description: {
      ja: 'Excelのバージョン管理、UiPathからの移行、BPO業務のAI化、ベテランのノウハウ喪失。現場の課題を知るコンサルタントが、自らプロダクトを作って解決します。',
      en: 'Excel version chaos. UiPath license costs. BPO inefficiency. Knowledge drain from retiring staff. Consultants who understand the front line build the products to fix it.',
      zh: 'Excel版本混乱、UiPath许可证成本、BPO效率低下、资深员工知识流失。了解一线业务的顾问亲自打造产品来解决问题。',
    },
    ctaPrimary: {
      ja: 'InsightOffice を試す',
      en: 'Try InsightOffice',
      zh: '试用 InsightOffice',
    },
  },

  // ─── Solutions Section ───
  solutions: {
    heading: {
      ja: 'あなたの課題は？',
      en: 'What problem are you solving?',
      zh: '您面临什么问题？',
    },
    subheading: {
      ja: '課題に合わせた最適なソリューションをご提案します',
      en: 'We match the right solution to your specific challenge',
      zh: '我们根据您的具体挑战提供最佳解决方案',
    },
    // Card 1: Excel
    excelTitle: {
      ja: 'Excelの管理が大変',
      en: 'Excel management is a mess',
      zh: 'Excel管理混乱',
    },
    excelDesc: {
      ja: 'バージョン散乱、変更追跡できない、レビューが非効率。Excelをそのまま使いながら解決。',
      en: 'Scattered versions, no change tracking, inefficient reviews. Fix it without leaving Excel.',
      zh: '版本散乱、无法追踪变更、审核效率低。无需离开Excel即可解决。',
    },
    excelCta: {
      ja: '14日間無料で試す →',
      en: '14-day free trial →',
      zh: '14天免费试用 →',
    },
    popular: {
      ja: '人気 No.1',
      en: 'Most Popular',
      zh: '最受欢迎',
    },
    // Card 2: RPA
    rpaTitle: {
      ja: 'RPA移行・BPOのAI化',
      en: 'RPA Migration & BPO Automation',
      zh: 'RPA迁移·BPO AI化',
    },
    rpaDesc: {
      ja: 'UiPath等のライセンスコスト削減、BPO業務のAI自動化。業務分析から一緒に設計します。',
      en: 'Cut UiPath licensing costs. Automate BPO with AI. We design the solution together from process analysis.',
      zh: '降低UiPath许可证成本，用AI自动化BPO业务。从业务分析开始共同设计方案。',
    },
    rpaTag1: {
      ja: 'UiPath移行',
      en: 'UiPath Migration',
      zh: 'UiPath迁移',
    },
    rpaTag2: {
      ja: 'BPO AI化',
      en: 'BPO AI',
      zh: 'BPO AI化',
    },
    // Card 3: Knowledge
    knowledgeTitle: {
      ja: 'ベテランの知識を残したい',
      en: 'Preserve expert knowledge',
      zh: '保留专家知识',
    },
    knowledgeDesc: {
      ja: '話すだけでAIが文書化。退職・異動による「あの人しか知らない」を防ぐ。',
      en: 'Just talk — AI documents it. Prevent knowledge loss from retirement and transfers.',
      zh: '只需说话，AI自动生成文档。防止人员退休或调动导致的知识流失。',
    },
    knowledgeTag1: {
      ja: '全自動インタビュー',
      en: 'Auto Interview',
      zh: '全自动访谈',
    },
    knowledgeTag2: {
      ja: '業務診断',
      en: 'Business Diagnosis',
      zh: '业务诊断',
    },
    // Card 4: Consulting
    consultingTitle: {
      ja: '何から始めればいいかわからない',
      en: "Don't know where to start?",
      zh: '不知道从何开始？',
    },
    consultingDesc: {
      ja: '無料の業務診断で現状を可視化。建設業DX・AI導入のプロが伴走します。',
      en: 'Free business diagnosis to visualize your current state. Experts in construction DX & AI walk with you.',
      zh: '免费业务诊断，可视化现状。建筑行业DX和AI导入专家全程陪伴。',
    },
    consultingTag1: {
      ja: '無料業務診断',
      en: 'Free Diagnosis',
      zh: '免费业务诊断',
    },
    consultingTag2: {
      ja: 'コンサルティング',
      en: 'Consulting',
      zh: '咨询服务',
    },
    consultingCta: {
      ja: '無料相談する →',
      en: 'Free consultation →',
      zh: '免费咨询 →',
    },
  },

  // ─── RPA Authority Section ───
  rpaAuthority: {
    sectionLabel: {
      ja: 'RPA Migration & BPO AI',
      en: 'RPA Migration & BPO AI',
      zh: 'RPA Migration & BPO AI',
    },
    headingLine1: {
      ja: 'RPA市場の立ち上げ期から見てきた。',
      en: "We've watched the RPA market since day one.",
      zh: '我们从RPA市场起步期就开始关注。',
    },
    headingLine2: {
      ja: 'だから、次の解を知っている。',
      en: "That's why we know what comes next.",
      zh: '所以我们知道下一步的答案。',
    },
    description: {
      ja: 'UiPathが日本市場に本格参入した頃から、RPA導入の現場を見てきました。100社以上の業務改善支援を通じて、RPAが成功する条件と失敗する理由を知っています。',
      en: "We've been in the field since UiPath first entered the Japanese market. Through 100+ process improvement projects, we know exactly why RPA succeeds — and why it fails.",
      zh: '从UiPath正式进入日本市场起，我们就一直在RPA导入现场。通过100多个业务改善项目，我们深知RPA成功的条件和失败的原因。',
    },
    // UiPath card
    uipathLabel: {
      ja: '課題 01',
      en: 'Challenge 01',
      zh: '课题 01',
    },
    uipathTitle: {
      ja: 'UiPathのライセンスが重い',
      en: 'UiPath licensing is too expensive',
      zh: 'UiPath许可证费用过高',
    },
    uipathDesc1: {
      ja: 'UiPath Enterpriseは年間200万円〜。ロボットを追加するたびにライセンスが膨張し、バージョンアップのたびに全シナリオの検証コストが発生する。',
      en: 'UiPath Enterprise costs ¥2M+/year ($15K+). Each robot addition inflates licensing, and every version upgrade triggers costly re-validation of all scenarios.',
      zh: 'UiPath Enterprise年费200万日元以上。每增加一个机器人就增加许可费用，每次版本升级都需要重新验证所有场景。',
    },
    uipathDesc2: {
      ja: '2023年の価格改定以降、この傾向は加速しています。多くの企業がPower Automate Desktopへの移行を検討していますが、M365エコシステムへの依存という別の問題が生まれます。',
      en: "Since UiPath's 2023 pricing changes, this trend has accelerated. Many companies consider Power Automate Desktop, but that creates Microsoft ecosystem lock-in.",
      zh: '自2023年价格调整以来，这一趋势加速。许多企业考虑迁移到Power Automate Desktop，但这会产生对微软生态系统的依赖。',
    },
    uipathSolutionLabel: {
      ja: '私たちの解決策',
      en: 'Our solution',
      zh: '我们的解决方案',
    },
    uipathSolution: {
      ja: '既存シナリオを業務単位で分析し、AIがPythonで同等の自動化を再構築。ライセンス費を削減しながら、特定ベンダーへの依存からも脱却できます。',
      en: 'We analyze existing scenarios by business process, then AI rebuilds equivalent automation in Python. Cut licensing costs while eliminating vendor lock-in.',
      zh: '按业务单元分析现有场景，AI用Python重建同等自动化。在降低许可费用的同时摆脱特定供应商依赖。',
    },
    // BPO card
    bpoLabel: {
      ja: '課題 02',
      en: 'Challenge 02',
      zh: '课题 02',
    },
    bpoTitle: {
      ja: 'BPOの「人数×単価」モデルが限界',
      en: 'The BPO "headcount × rate" model is broken',
      zh: 'BPO的"人数×单价"模式已到极限',
    },
    bpoDesc1: {
      ja: '国内BPO市場は5兆円超。しかし労働力不足と人件費高騰で、従来の人海戦術モデルは持続できません。2026年以降、生成AI実装が本格化し、業界構造が変わるとされています。',
      en: "Japan's BPO market exceeds ¥5 trillion. But labor shortages and rising costs make the headcount model unsustainable. Generative AI is restructuring the industry from 2026.",
      zh: '日本BPO市场超过5万亿日元。但劳动力短缺和人力成本上升使传统人海战术模式不可持续。2026年起生成式AI正在重构行业结构。',
    },
    bpoDesc2Prefix: {
      ja: 'ただし「全部AIで置き換える」は間違い。',
      en: "But \"replace everything with AI\" is wrong.",
      zh: '但"全部用AI替代"是错误的。',
    },
    bpoDesc2Key: {
      ja: 'AIは判断には使わない',
      en: 'AI should not make decisions',
      zh: 'AI不用于做判断',
    },
    bpoDesc2Suffix: {
      ja: ' — 定型処理の自動化に特化し、人は判断業務に集中する。この線引きが成否を分けます。',
      en: ' — automate routine tasks, let humans focus on judgment calls. Drawing this line is what separates success from failure.',
      zh: '——专注于定型处理的自动化，让人集中于判断业务。这条界线决定了成败。',
    },
    bpoSolutionLabel: {
      ja: '私たちのアプローチ',
      en: 'Our approach',
      zh: '我们的方法',
    },
    bpoSolution: {
      ja: 'BPO現場の業務フローを分析し、自動化の対象と順序を設計。データ転記→帳票生成→突合チェック→レポート出力の順で、確実に成果を積み上げます。',
      en: 'We analyze BPO workflows, then design automation targets and sequence. Data entry → report generation → reconciliation → output. Reliable, incremental results.',
      zh: '分析BPO现场业务流程，设计自动化对象和顺序。数据录入→报表生成→核对检查→报告输出，稳步积累成果。',
    },
    // Tasks
    tasksLabel: {
      ja: '自動化対象の業務例',
      en: 'Examples of automatable processes',
      zh: '可自动化的业务示例',
    },
    rpaCta: {
      ja: 'InsightBot RPA を詳しく見る →',
      en: 'Learn more about InsightBot RPA →',
      zh: '了解更多 InsightBot RPA →',
    },
  },
  tasks: {
    items: {
      ja: ['請求書処理', '入金消込', '月次仕訳', '勤怠集計', 'データ入力', '帳票出力', '在庫突合', 'メール仕分け', '売上集計', 'レポート生成'],
      en: ['Invoice Processing', 'Payment Reconciliation', 'Monthly Journals', 'Attendance Summary', 'Data Entry', 'Report Generation', 'Inventory Matching', 'Email Sorting', 'Sales Aggregation', 'Dashboard Output'],
      zh: ['发票处理', '入账核销', '月度分录', '考勤汇总', '数据录入', '报表输出', '库存核对', '邮件分类', '销售汇总', '报告生成'],
    },
  },

  // ─── Expected Outcomes ───
  outcomes: {
    sectionLabel: {
      ja: 'Expected Outcomes',
      en: 'Expected Outcomes',
      zh: 'Expected Outcomes',
    },
    heading: {
      ja: '想定される導入効果',
      en: 'Expected Impact',
      zh: '预期导入效果',
    },
    subheading: {
      ja: '28年間の業務改善コンサルティング経験に基づく、理論上の効果試算です',
      en: 'Theoretical estimates based on 28 years of process improvement consulting',
      zh: '基于28年业务改善咨询经验的理论效果估算',
    },
    // Card 1
    card1Tag: {
      ja: 'InsightOffice',
      en: 'InsightOffice',
      zh: 'InsightOffice',
    },
    card1Title: {
      ja: 'Excelバージョン管理工数の大幅削減',
      en: 'Drastic reduction in Excel version management overhead',
      zh: '大幅减少Excel版本管理工时',
    },
    card1Desc: {
      ja: 'ファイル名でのバージョン管理、メールでのレビュー往復、目視での差分確認 — これらの工数が集約されます。経営企画部門での予算策定・中期計画の現場を想定。',
      en: 'File-name versioning, email review rounds, manual diff checking — all consolidated. Designed for finance teams managing budgets and mid-term plans.',
      zh: '文件名版本管理、邮件来回审核、人工差异确认——这些工时将被整合。针对经营企划部门的预算编制和中期计划场景。',
    },
    card1Note: {
      ja: '※ 効果は業務内容・規模により異なります',
      en: '* Actual impact varies by scope and scale',
      zh: '※ 效果因业务内容和规模而异',
    },
    // Card 2
    card2Tag: {
      ja: 'InsightBot RPA',
      en: 'InsightBot RPA',
      zh: 'InsightBot RPA',
    },
    card2Title: {
      ja: '定型業務の自動化・BPOのAI化',
      en: 'Automate routine tasks & AI-powered BPO',
      zh: '定型业务自动化·BPO AI化',
    },
    card2Desc: {
      ja: '請求書処理、月次集計、データ転記などの定型業務をAI生成のスクリプトで自動化。UiPath等の既存RPAからの移行にも対応。',
      en: 'Automate invoicing, monthly aggregation, data transcription with AI-generated scripts. Migration from UiPath and other RPA platforms supported.',
      zh: '用AI生成脚本自动化发票处理、月度汇总、数据录入等定型业务。支持从UiPath等现有RPA迁移。',
    },
    card2Note: {
      ja: '※ 自動化範囲は業務分析後に確定します',
      en: '* Automation scope confirmed after process analysis',
      zh: '※ 自动化范围在业务分析后确定',
    },
    // Card 3
    card3Tag: {
      ja: '全自動インタビュー',
      en: 'Auto Interview',
      zh: '全自动访谈',
    },
    card3Title: {
      ja: '暗黙知のドキュメント化を自動化',
      en: 'Automate tacit knowledge documentation',
      zh: '自动化隐性知识文档化',
    },
    card3Desc: {
      ja: 'ベテラン社員の退職・異動前に、音声で知識を収集しAIが文書化。従来は聞き取り→手作業で文書化に数日かかっていた作業を効率化。',
      en: 'Capture expert knowledge via voice before retirement or transfer. AI converts speech to structured documents — what used to take days now happens automatically.',
      zh: '在资深员工退休或调动前，通过语音收集知识并由AI文档化。过去需要数天的听取和手工文档化工作现在自动完成。',
    },
    card3Note: {
      ja: '※ 音声認識精度は環境により変動します',
      en: '* Speech recognition accuracy varies by environment',
      zh: '※ 语音识别精度因环境而异',
    },
    ctaText: {
      ja: '御社の業務に合わせた具体的な効果試算を無料で行います',
      en: 'We provide free impact assessments tailored to your business',
      zh: '我们免费提供针对贵公司业务的具体效果评估',
    },
    ctaButton: {
      ja: '無料で効果試算を相談する →',
      en: 'Request a free impact assessment →',
      zh: '申请免费效果评估 →',
    },
  },

  // ─── Consulting Section ───
  consultingSection: {
    heading: {
      ja: 'プロダクトだけでなく、伴走もする',
      en: "We don't just deliver products — we walk with you",
      zh: '不仅提供产品，还全程陪伴',
    },
    subheading: {
      ja: 'ツールを渡して終わりではありません。業務改善の設計から導入・定着まで支援します。',
      en: "We don't hand off tools and disappear. From process design to adoption, we're there.",
      zh: '不是交付工具就结束。从业务改善设计到导入和落地，我们全程支持。',
    },
    linkText: {
      ja: 'コンサルティングを詳しく見る →',
      en: 'Learn more about consulting →',
      zh: '了解更多咨询服务 →',
    },
  },

  // ─── CTA Section ───
  cta: {
    heading: {
      ja: 'まずは無料で業務診断してみませんか？',
      en: 'Ready for a free business diagnosis?',
      zh: '来一次免费业务诊断如何？',
    },
    subheading: {
      ja: '御社の業務課題を可視化し、最適なソリューションをご提案します。',
      en: "We'll visualize your process challenges and recommend the best solution.",
      zh: '我们将可视化贵公司的业务课题，提出最佳解决方案。',
    },
    button: {
      ja: '無料相談・業務診断を申し込む',
      en: 'Book a Free Consultation',
      zh: '申请免费咨询·业务诊断',
    },
  },

  // ─── Footer ───
  footer: {
    companyDesc: {
      ja: '28年間、100社以上の業務改善実績。Excel管理・業務自動化・ナレッジ保全をAIとプロダクトで解決します。',
      en: '28 years. 100+ companies. We solve Excel management, process automation, and knowledge preservation with AI and products.',
      zh: '28年经验，100+企业实绩。用AI和产品解决Excel管理、业务自动化和知识保全。',
    },
    products: {
      ja: '製品',
      en: 'Products',
      zh: '产品',
    },
    services: {
      ja: 'サービス',
      en: 'Services',
      zh: '服务',
    },
    apps: {
      ja: 'アプリ',
      en: 'Apps',
      zh: '应用',
    },
    legal: {
      ja: 'その他',
      en: 'Legal',
      zh: '其他',
    },
    privacy: {
      ja: 'プライバシーポリシー',
      en: 'Privacy Policy',
      zh: '隐私政策',
    },
    terms: {
      ja: '利用規約',
      en: 'Terms of Service',
      zh: '使用条款',
    },
    // Product names
    bizTools: {
      ja: '業務改善ツール',
      en: 'Business Tools',
      zh: '业务改善工具',
    },
    insightSeries: {
      ja: 'Insight Series',
      en: 'Insight Series',
      zh: 'Insight Series',
    },
    eduPlatform: {
      ja: '1on1教育プラットフォーム',
      en: '1-on-1 Education Platform',
      zh: '1对1教育平台',
    },
    hardware: {
      ja: 'ハードウェア',
      en: 'Hardware',
      zh: '硬件',
    },
    constructionDx: {
      ja: '建設業DX',
      en: 'Construction DX',
      zh: '建筑业DX',
    },
    aiDev: {
      ja: 'AI開発支援',
      en: 'AI Development',
      zh: 'AI开发支持',
    },
    appsPage: {
      ja: 'アプリケーション',
      en: 'Applications',
      zh: '应用程序',
    },
    eduTraining: {
      ja: '教育・研修',
      en: 'Education & Training',
      zh: '教育培训',
    },
    caseStudiesFooter: {
      ja: '導入事例',
      en: 'Case Studies',
      zh: '成功案例',
    },
  },
} as const;

export type TranslationKey = keyof typeof translations;
export type TranslationSubKey<K extends TranslationKey> = keyof (typeof translations)[K];

export function t(
  section: TranslationKey,
  key: string,
  locale: Locale,
): string {
  const sectionData = translations[section] as Record<string, Record<Locale, string | string[]>>;
  const entry = sectionData?.[key];
  if (!entry) return `[${section}.${key}]`;
  const value = entry[locale];
  if (Array.isArray(value)) return value.join(', ');
  return value ?? `[${section}.${key}.${locale}]`;
}

export function tArray(
  section: TranslationKey,
  key: string,
  locale: Locale,
): string[] {
  const sectionData = translations[section] as Record<string, Record<Locale, string | string[]>>;
  const entry = sectionData?.[key];
  if (!entry) return [];
  const value = entry[locale];
  if (Array.isArray(value)) return value;
  return [value];
}

export default translations;
