"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import type { PromptVariation } from "@/lib/prompts"

interface OutputComparisonProps {
  variations: PromptVariation[]
}

export function OutputComparison({ variations }: OutputComparisonProps) {
  const { t } = useI18n()

  if (variations.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          {t.comparison.noResults}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{t.comparison.title}</h3>
        <p className="text-sm text-muted-foreground">{t.comparison.subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {variations.slice(0, 2).map((v) => (
          <Card key={v.style}>
            <CardContent className="p-5">
              <h4 className="text-sm font-semibold capitalize">{v.style}</h4>
              <div className="mt-3 rounded-lg bg-muted/50 p-3">
                <p className="text-xs font-medium text-muted-foreground">Prompt:</p>
                <p className="mt-1 text-sm">{v.prompt}</p>
              </div>
              <div className="mt-3 rounded-lg bg-muted/30 p-3">
                <p className="text-xs font-medium text-muted-foreground">AI Response:</p>
                <pre className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground font-sans">
                  {v.simulatedOutput}
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {variations.length > 2 && (
        <div className="grid gap-4 md:grid-cols-2">
          {variations.slice(2, 4).map((v) => (
            <Card key={v.style}>
              <CardContent className="p-5">
                <h4 className="text-sm font-semibold capitalize">{v.style}</h4>
                <div className="mt-3 rounded-lg bg-muted/50 p-3">
                  <p className="text-xs font-medium text-muted-foreground">Prompt:</p>
                  <p className="mt-1 text-sm">{v.prompt}</p>
                </div>
                <div className="mt-3 rounded-lg bg-muted/30 p-3">
                  <p className="text-xs font-medium text-muted-foreground">AI Response:</p>
                  <pre className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground font-sans">
                    {v.simulatedOutput}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
