"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import { formatPercent } from "@/lib/format"

interface PromptQualityMeterProps {
  quality: {
    clarity: number
    specificity: number
    context: number
  }
}

function ScoreBar({ label, desc, score }: { label: string; desc: string; score: number }) {
  const percentage = Math.round(score * 100)
  const color =
    score >= 0.7
      ? "bg-green-500"
      : score >= 0.4
        ? "bg-amber-500"
        : "bg-red-500"

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
        <span className="text-sm font-semibold tabular-nums">
          {formatPercent(score)}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export function PromptQualityMeter({ quality }: PromptQualityMeterProps) {
  const { t } = useI18n()

  const overall = (quality.clarity + quality.specificity + quality.context) / 3

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{t.quality.title}</h3>
        <p className="text-sm text-muted-foreground">{t.quality.subtitle}</p>

        <div className="mt-5 space-y-5">
          <ScoreBar
            label={t.quality.clarity}
            desc={t.quality.clarityDesc}
            score={quality.clarity}
          />
          <ScoreBar
            label={t.quality.specificity}
            desc={t.quality.specificityDesc}
            score={quality.specificity}
          />
          <ScoreBar
            label={t.quality.context}
            desc={t.quality.contextDesc}
            score={quality.context}
          />

          <div className="border-t border-border/60 pt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{t.quality.overall}</p>
              <span className="text-lg font-bold tabular-nums">
                {formatPercent(overall)}
              </span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  overall >= 0.7
                    ? "bg-green-500"
                    : overall >= 0.4
                      ? "bg-amber-500"
                      : "bg-red-500"
                }`}
                style={{ width: `${Math.round(overall * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
