"use client"

import * as React from "react"
export type Locale = "id" | "en"
export const LOCALES: Locale[] = ["id", "en"]
export const DEFAULT_LOCALE: Locale = "id"
const STORAGE_KEY = "pe-locale"

/* ------------------------------------------------------------------ */
/*  English dictionary                                                 */
/* ------------------------------------------------------------------ */

const en = {
  header: { playground: "Playground", tryNow: "Try Now" },
  hero: {
    badge: "An educational playground for prompt engineering",
    title: "Prompt Explorer",
    subtitle:
      "Discover how the same AI gives completely different results depending on how you ask. Learn prompt engineering through hands-on exploration — all in your browser.",
    tryNow: "Try Now",
    randomExample: "Random Prompt",
    mono: "Same AI, Different Prompt.",
  },
  features: {
    heading: "Same AI, Different Prompt.",
    subtitle:
      "The words you choose, the role you assign, and the context you provide can dramatically change AI output. Learn to craft better prompts.",
    variations: {
      title: "Prompt Variations",
      formula: "input × framing = output",
      body: "See the same task expressed as beginner, expert, child-friendly, and formal prompts — and watch how AI responds differently to each.",
    },
    comparison: {
      title: "Output Comparison",
      formula: "side-by-side analysis",
      body: "Compare AI responses to different prompt styles side by side. Understand why clarity, specificity, and context matter.",
    },
    breakdown: {
      title: "Prompt Breakdown",
      formula: "role + context + instructions + constraints",
      body: "Decompose any prompt into its core components: the role you assign, context you provide, instructions you give, and constraints you set.",
    },
  },
  how: {
    heading: "How it works",
    subtitle: "Three steps to better prompts.",
    steps: [
      {
        title: "1. Write a prompt",
        body: "Type any task or pick a random example. Try asking the AI to explain AI, write a poem, summarize an article, or explain quantum physics.",
      },
      {
        title: "2. See variations",
        body: "The playground generates beginner, expert, child-friendly, and formal versions of your prompt. Each framing produces a different AI response.",
      },
      {
        title: "3. Learn & improve",
        body: "Compare outputs, analyze prompt structure, check quality scores, and build intuition for effective prompt engineering.",
      },
    ],
  },
  cta: {
    heading: "Ready to master prompt engineering?",
    subtitle:
      "No sign-up, no server calls. Just you, your curiosity, and the art of asking the right question.",
    button: "Open the Playground",
  },
  playground: {
    title: "The Playground",
    subtitle:
      "Write a prompt and explore how different phrasings produce different AI responses. Everything runs locally in your browser.",
    intro: {
      title: "Welcome to Prompt Explorer",
      body: "This playground lets you explore how the way you phrase a question dramatically changes AI output. Try typing a prompt below, or click 'Random Prompt' to get started.",
    },
  },
  promptInput: {
    placeholder: "Type a prompt (e.g. Explain AI to a 5 year old)…",
    analyze: "Analyze",
    randomPrompt: "Random Prompt",
    clear: "Clear",
  },
  variations: {
    title: "Prompt Variations",
    subtitle: "Same task, different framing.",
    beginner: "Beginner",
    beginnerDesc: "Simple, approachable language for someone new to the topic.",
    expert: "Expert",
    expertDesc: "Technical, detailed language for someone with deep knowledge.",
    childFriendly: "Child-friendly",
    childFriendlyDesc: "Fun, engaging language that a child would enjoy.",
    formal: "Formal",
    formalDesc: "Professional, academic tone for formal contexts.",
    useThis: "Use this prompt",
  },
  comparison: {
    title: "Output Comparison",
    subtitle: "See how different prompts produce different results.",
    noResults: "Analyze a prompt above to see comparison results.",
  },
  breakdown: {
    title: "Prompt Breakdown",
    subtitle: "The anatomy of an effective prompt.",
    role: "Role",
    roleDesc: "Who the AI should be.",
    context: "Context",
    contextDesc: "Background information provided.",
    instructions: "Instructions",
    instructionsDesc: "What the AI should do.",
    constraints: "Constraints",
    constraintsDesc: "Limitations and boundaries.",
    noneDetected: "None detected",
  },
  quality: {
    title: "Prompt Quality",
    subtitle: "How effective is this prompt?",
    clarity: "Clarity",
    clarityDesc: "How clear and unambiguous the prompt is.",
    specificity: "Specificity",
    specificityDesc: "How specific and detailed the instructions are.",
    context: "Context",
    contextDesc: "How much relevant context is provided.",
    overall: "Overall",
  },
  insights: {
    heading: "Did you know?",
    items: {
      id: [
        "Prompt engineering adalah keterampilan paling penting untuk menggunakan AI secara efektif.",
        "Memberikan peran (role) kepada AI seperti 'Kamu adalah ahli...' dapat meningkatkan kualitas jawaban secara signifikan.",
        "Prompt yang spesifik dan terstruktur menghasilkan output yang lebih baik daripada prompt yang ambigu.",
        "Teknik zero-shot prompting meminta AI menjawab tanpa contoh — teknik ini bergantung pada kejelasan prompt.",
        "Few-shot prompting memberikan contoh kepada AI sebelum pertanyaan, membantu AI memahami format yang diinginkan.",
        "Chain-of-thought prompting meminta AI menjelaskan proses berpikirnya, menghasilkan jawaban yang lebih akurat.",
      ],
      en: [
        "Prompt engineering is the most important skill for using AI effectively.",
        "Giving AI a role like 'You are an expert...' can significantly improve response quality.",
        "Specific, structured prompts produce better output than ambiguous ones.",
        "Zero-shot prompting asks AI to answer without examples — it relies entirely on prompt clarity.",
        "Few-shot prompting provides examples before the question, helping AI understand the desired format.",
        "Chain-of-thought prompting asks AI to explain its reasoning, producing more accurate answers.",
      ],
    },
  },
  share: {
    copyResult: "Copy result",
    copied: "Copied!",
    shareLink: "Share link",
    linkCopied: "Link copied!",
  },
  footer: {
    tagline: "Prompt Explorer — discover how prompts shape AI responses.",
    home: "Home",
    playground: "Playground",
    madeWith: "Made with ❤️ by",
  },
}

/* ------------------------------------------------------------------ */
/*  Indonesian dictionary                                              */
/* ------------------------------------------------------------------ */

const id: typeof en = {
  header: { playground: "Playground", tryNow: "Coba Sekarang" },
  hero: {
    badge: "Playground edukasi untuk prompt engineering",
    title: "Prompt Explorer",
    subtitle:
      "Temukan bagaimana AI yang sama memberikan hasil yang sangat berbeda tergantung bagaimana kamu bertanya. Pelajari prompt engineering melalui eksplorasi langsung — semuanya di browser-mu.",
    tryNow: "Coba Sekarang",
    randomExample: "Prompt Acak",
    mono: "AI Sama, Prompt Berbeda.",
  },
  features: {
    heading: "AI Sama, Prompt Berbeda.",
    subtitle:
      "Kata-kata yang kamu pilih, peran yang kamu tetapkan, dan konteks yang kamu berikan dapat mengubah output AI secara drastis. Pelajari cara membuat prompt yang lebih baik.",
    variations: {
      title: "Variasi Prompt",
      formula: "input × framing = output",
      body: "Lihat tugas yang sama diekspresikan sebagai prompt pemula, ahli, ramah anak, dan formal — dan saksikan bagaimana AI merespons berbeda untuk masing-masing.",
    },
    comparison: {
      title: "Perbandingan Output",
      formula: "analisis berdampingan",
      body: "Bandingkan respons AI terhadap gaya prompt yang berbeda berdampingan. Pahami mengapa kejelasan, spesifisitas, dan konteks itu penting.",
    },
    breakdown: {
      title: "Analisis Prompt",
      formula: "peran + konteks + instruksi + batasan",
      body: "uraikan prompt mana pun menjadi komponen intinya: peran yang kamu tetapkan, konteks yang kamu berikan, instruksi yang kamu berikan, dan batasan yang kamu tetapkan.",
    },
  },
  how: {
    heading: "Cara kerjanya",
    subtitle: "Tiga langkah untuk prompt yang lebih baik.",
    steps: [
      {
        title: "1. Tulis prompt",
        body: "Ketik tugas apa saja atau pilih contoh acak. Coba minta AI menjelaskan AI, menulis puisi, merangkum artikel, atau menjelaskan fisika kuantum.",
      },
      {
        title: "2. Lihat variasi",
        body: "Playground menghasilkan versi pemula, ahli, ramah anak, dan formal dari prompt-mu. Setiap framing menghasilkan respons AI yang berbeda.",
      },
      {
        title: "3. Pelajari & tingkatkan",
        body: "Bandingkan output, analisis struktur prompt, cek skor kualitas, dan bangun intuisi untuk prompt engineering yang efektif.",
      },
    ],
  },
  cta: {
    heading: "Siap menguasai prompt engineering?",
    subtitle:
      "Tanpa daftar, tanpa panggilan server. Hanya kamu, rasa ingin tahumu, dan seni mengajukan pertanyaan yang tepat.",
    button: "Buka Playground",
  },
  playground: {
    title: "Playground",
    subtitle:
      "Tulis prompt dan jelajahi bagaimana perbedaan frasa menghasilkan respons AI yang berbeda. Semuanya berjalan lokal di browser-mu.",
    intro: {
      title: "Selamat Datang di Prompt Explorer",
      body: "Playground ini memungkinkanmu menjelajahi bagaimana cara kamu merangkai pertanyaan secara dramatis mengubah output AI. Coba ketik prompt di bawah, atau klik 'Prompt Acak' untuk memulai.",
    },
  },
  promptInput: {
    placeholder: "Ketik prompt (misalnya Jelaskan AI untuk anak usia 5 tahun)…",
    analyze: "Analisis",
    randomPrompt: "Prompt Acak",
    clear: "Hapus",
  },
  variations: {
    title: "Variasi Prompt",
    subtitle: "Tugas sama, framing berbeda.",
    beginner: "Pemula",
    beginnerDesc: "Bahasa sederhana dan mudah dipahami untuk yang baru mengenal topik.",
    expert: "Ahli",
    expertDesc: "Bahasa teknis dan detail untuk yang memiliki pengetahuan mendalam.",
    childFriendly: "Ramah Anak",
    childFriendlyDesc: "Bahasa menyenangkan dan menarik yang akan disukai anak-anak.",
    formal: "Formal",
    formalDesc: "Nada profesional dan akademis untuk konteks formal.",
    useThis: "Gunakan prompt ini",
  },
  comparison: {
    title: "Perbandingan Output",
    subtitle: "Lihat bagaimana prompt berbeda menghasilkan hasil berbeda.",
    noResults: "Analisis prompt di atas untuk melihat hasil perbandingan.",
  },
  breakdown: {
    title: "Analisis Prompt",
    subtitle: "Anatomi prompt yang efektif.",
    role: "Peran",
    roleDesc: "Siapa AI seharusnya.",
    context: "Konteks",
    contextDesc: "Informasi latar belakang yang diberikan.",
    instructions: "Instruksi",
    instructionsDesc: "Apa yang AI harus lakukan.",
    constraints: "Batasan",
    constraintsDesc: "Keterbatasan dan batasan.",
    noneDetected: "Tidak terdeteksi",
  },
  quality: {
    title: "Kualitas Prompt",
    subtitle: "Seberapa efektif prompt ini?",
    clarity: "Kejelasan",
    clarityDesc: "Seberapa jelas dan tidak ambigu prompt.",
    specificity: "Spesifisitas",
    specificityDesc: "Seberapa spesifik dan detail instruksinya.",
    context: "Konteks",
    contextDesc: "Seberapa banyak konteks relevan yang diberikan.",
    overall: "Keseluruhan",
  },
  insights: {
    heading: "Tahukah kamu?",
    items: {
      id: [
        "Prompt engineering adalah keterampilan paling penting untuk menggunakan AI secara efektif.",
        "Memberikan peran (role) kepada AI seperti 'Kamu adalah ahli...' dapat meningkatkan kualitas jawaban secara signifikan.",
        "Prompt yang spesifik dan terstruktur menghasilkan output yang lebih baik daripada prompt yang ambigu.",
        "Teknik zero-shot prompting meminta AI menjawab tanpa contoh — teknik ini bergantung pada kejelasan prompt.",
        "Few-shot prompting memberikan contoh kepada AI sebelum pertanyaan, membantu AI memahami format yang diinginkan.",
        "Chain-of-thought prompting meminta AI menjelaskan proses berpikirnya, menghasilkan jawaban yang lebih akurat.",
      ],
      en: [
        "Prompt engineering is the most important skill for using AI effectively.",
        "Giving AI a role like 'You are an expert...' can significantly improve response quality.",
        "Specific, structured prompts produce better output than ambiguous ones.",
        "Zero-shot prompting asks AI to answer without examples — it relies entirely on prompt clarity.",
        "Few-shot prompting provides examples before the question, helping AI understand the desired format.",
        "Chain-of-thought prompting asks AI to explain its reasoning, producing more accurate answers.",
      ],
    },
  },
  share: {
    copyResult: "Salin hasil",
    copied: "Tersalin!",
    shareLink: "Bagikan tautan",
    linkCopied: "Tautan tersalin!",
  },
  footer: {
    tagline: "Prompt Explorer — temukan bagaimana prompt membentuk respons AI.",
    home: "Beranda",
    playground: "Playground",
    madeWith: "Dibuat dengan ❤️ oleh",
  },
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

export type Dict = typeof en

const DICTS: Record<Locale, Dict> = { en, id }

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Dict
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE)

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === "id" || stored === "en") setLocaleState(stored)
    } catch {
      /* ignore */
    }
  }, [])

  React.useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const value = React.useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: DICTS[locale],
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider")
  return ctx
}
