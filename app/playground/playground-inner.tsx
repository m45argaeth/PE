"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { useI18n } from "@/lib/i18n"
import { analyzePrompt, generateVariations, randomExampleExcept } from "@/lib/prompts"
import { PlaygroundIntro } from "@/components/playground/playground-intro"
import { PromptInput } from "@/components/playground/prompt-input"
import { PromptVariations } from "@/components/playground/prompt-variations"
import { OutputComparison } from "@/components/playground/output-comparison"
import { PromptBreakdown } from "@/components/playground/prompt-breakdown"
import { PromptQualityMeter } from "@/components/playground/prompt-quality-meter"
import { EducationalInsights } from "@/components/playground/educational-insights"
import { ShareFeatures } from "@/components/playground/share-features"

export function PlaygroundInner() {
  const { t } = useI18n()
  const searchParams = useSearchParams()

  const [prompt, setPrompt] = React.useState("")
  const [activePrompt, setActivePrompt] = React.useState<string | null>(null)
  const [analysis, setAnalysis] = React.useState<ReturnType<typeof analyzePrompt> | null>(null)
  const [variations, setVariations] = React.useState<ReturnType<typeof generateVariations>>([])

  React.useEffect(() => {
    const urlPrompt = searchParams.get("prompt")
    const hashPrompt = typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : ""

    if (urlPrompt) {
      const decoded = decodeURIComponent(urlPrompt)
      setPrompt(decoded)
      handleAnalyze(decoded)
    } else if (hashPrompt) {
      const decoded = decodeURIComponent(hashPrompt)
      setPrompt(decoded)
      handleAnalyze(decoded)
    }
  }, [searchParams])

  const handleAnalyze = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setActivePrompt(trimmed)
    setAnalysis(analyzePrompt(trimmed))
    setVariations(generateVariations(trimmed))
  }

  const handleRandom = () => {
    const newPrompt = activePrompt ? randomExampleExcept(activePrompt) : randomExampleExcept("")
    setPrompt(newPrompt)
    handleAnalyze(newPrompt)
  }

  const handleClear = () => {
    setPrompt("")
    setActivePrompt(null)
    setAnalysis(null)
    setVariations([])
  }

  const handleUsePrompt = (text: string) => {
    setPrompt(text)
    handleAnalyze(text)
  }

  const hasResult = activePrompt !== null

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.playground.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.playground.subtitle}</p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl space-y-8">
        <PlaygroundIntro />

        <PromptInput
          value={prompt}
          onChange={setPrompt}
          onAnalyze={() => handleAnalyze(prompt)}
          onRandom={handleRandom}
          onClear={handleClear}
          hasResult={hasResult}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-sm font-medium text-muted-foreground">
            {t.playground.title}
          </h2>
          <ShareFeatures prompt={activePrompt} />
        </div>

        {hasResult && analysis && (
          <>
            <PromptVariations
              variations={variations}
              onUsePrompt={handleUsePrompt}
            />

            <OutputComparison variations={variations} />

            <div className="grid gap-6 md:grid-cols-2">
              <PromptBreakdown analysis={analysis} />
              <PromptQualityMeter quality={analysis.quality} />
            </div>
          </>
        )}

        <EducationalInsights />
      </div>
    </>
  )
}
