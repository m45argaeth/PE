"use client"

import * as React from "react"
import { Shuffle, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

interface PromptInputProps {
  value: string
  onChange: (value: string) => void
  onAnalyze: () => void
  onRandom: () => void
  onClear: () => void
  hasResult: boolean
}

export function PromptInput({
  value,
  onChange,
  onAnalyze,
  onRandom,
  onClear,
  hasResult,
}: PromptInputProps) {
  const { t } = useI18n()

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onAnalyze()
    }
  }

  return (
    <div className="space-y-3">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.promptInput.placeholder}
          rows={3}
          className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 pr-20 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground hover:text-foreground"
            aria-label="Clear"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={onAnalyze} disabled={!value.trim()}>
          <Search className="h-4 w-4" />
          {t.promptInput.analyze}
        </Button>
        <Button variant="outline" onClick={onRandom}>
          <Shuffle className="h-4 w-4" />
          {t.promptInput.randomPrompt}
        </Button>
      </div>
    </div>
  )
}
