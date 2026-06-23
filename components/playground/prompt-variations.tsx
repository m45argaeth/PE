"use client"

import { Sparkles, GraduationCap, Baby, Briefcase, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import type { PromptVariation } from "@/lib/prompts"

interface PromptVariationsProps {
  variations: PromptVariation[]
  onUsePrompt: (prompt: string) => void
}

const STYLE_CONFIG = {
  beginner: { icon: Sparkles, color: "text-blue-500", bg: "bg-blue-500/10" },
  expert: { icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-500/10" },
  childFriendly: { icon: Baby, color: "text-pink-500", bg: "bg-pink-500/10" },
  formal: { icon: Briefcase, color: "text-amber-500", bg: "bg-amber-500/10" },
} as const

export function PromptVariations({ variations, onUsePrompt }: PromptVariationsProps) {
  const { t } = useI18n()

  const labels = {
    beginner: t.variations.beginner,
    expert: t.variations.expert,
    childFriendly: t.variations.childFriendly,
    formal: t.variations.formal,
  }

  const descriptions = {
    beginner: t.variations.beginnerDesc,
    expert: t.variations.expertDesc,
    childFriendly: t.variations.childFriendlyDesc,
    formal: t.variations.formalDesc,
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{t.variations.title}</h3>
        <p className="text-sm text-muted-foreground">{t.variations.subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {variations.map((v) => {
          const config = STYLE_CONFIG[v.style]
          const Icon = config.icon
          return (
            <Card key={v.style} className="overflow-hidden">
              <CardContent className="p-5">
                <div className="flex items-center gap-2.5">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${config.bg}`}>
                    <Icon className={`h-4 w-4 ${config.color}`} />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold">{labels[v.style]}</h4>
                    <p className="text-xs text-muted-foreground">{descriptions[v.style]}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {v.prompt}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3"
                  onClick={() => onUsePrompt(v.prompt)}
                >
                  {t.variations.useThis}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
