"use client"

import { User, MapPin, ListTodo, ShieldAlert } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import type { PromptAnalysis } from "@/lib/prompts"

interface PromptBreakdownProps {
  analysis: PromptAnalysis
}

const COMPONENT_CONFIG = [
  { key: "role", icon: User, color: "text-blue-500", bg: "bg-blue-500/10" },
  { key: "context", icon: MapPin, color: "text-green-500", bg: "bg-green-500/10" },
  { key: "instructions", icon: ListTodo, color: "text-purple-500", bg: "bg-purple-500/10" },
  { key: "constraints", icon: ShieldAlert, color: "text-amber-500", bg: "bg-amber-500/10" },
] as const

export function PromptBreakdown({ analysis }: PromptBreakdownProps) {
  const { t } = useI18n()

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{t.breakdown.title}</h3>
        <p className="text-sm text-muted-foreground">{t.breakdown.subtitle}</p>

        <div className="mt-5 space-y-4">
          {COMPONENT_CONFIG.map(({ key, icon: Icon, color, bg }) => {
            const value = analysis[key as keyof PromptAnalysis] as string | null
            const label = t.breakdown[key as keyof typeof t.breakdown]
            const desc = t.breakdown[`${key}Desc` as keyof typeof t.breakdown]

            return (
              <div key={key} className="flex items-start gap-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${bg}`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                  {value ? (
                    <p className="mt-1 text-sm text-foreground bg-muted/50 rounded-lg px-3 py-1.5">
                      {value}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-muted-foreground/50 italic">
                      {t.breakdown.noneDetected}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
