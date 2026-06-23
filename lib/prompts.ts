/**
 * Simulated prompt analysis engine for the Prompt Explorer.
 */

export interface PromptCategory {
  id: string
  label: string
  labelId: string
  example: string
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    id: "explain-ai",
    label: "Explain AI",
    labelId: "Jelaskan AI",
    example: "Explain how artificial intelligence works to a beginner",
  },
  {
    id: "write-poem",
    label: "Write poem",
    labelId: "Tulis puisi",
    example: "Write a poem about the beauty of sunset over the ocean",
  },
  {
    id: "summarize-article",
    label: "Summarize article",
    labelId: "Rangkum artikel",
    example: "Summarize the key points of this article about climate change",
  },
  {
    id: "explain-quantum",
    label: "Explain quantum physics",
    labelId: "Jelaskan fisika kuantum",
    example: "Explain quantum physics in simple terms",
  },
]

export interface PromptAnalysis {
  role: string | null
  context: string | null
  instructions: string | null
  constraints: string | null
  quality: {
    clarity: number
    specificity: number
    context: number
  }
}

export interface PromptVariation {
  style: "beginner" | "expert" | "childFriendly" | "formal"
  prompt: string
  simulatedOutput: string
}

/** Analyze a prompt and extract its structural components. */
export function analyzePrompt(prompt: string): PromptAnalysis {
  const lower = prompt.toLowerCase()

  // Role detection
  let role: string | null = null
  const rolePatterns = [
    /you are (a |an |the )?([^.!?\n]+)/i,
    /act as (a |an |the )?([^.!?\n]+)/i,
    /pretend (you are|to be) (a |an |the )?([^.!?\n]+)/i,
    /as a ([^.!?\n]+)/i,
    /role:?\s*([^.!?\n]+)/i,
  ]
  for (const pattern of rolePatterns) {
    const match = prompt.match(pattern)
    if (match) {
      role = match[0].trim()
      break
    }
  }

  // Context detection
  let context: string | null = null
  const contextPatterns = [
    /(?:given|considering|assuming|based on|with the context of|context:|background:)\s*([^.!?\n]+)/i,
    /(?:i am|we are|the situation is|the scenario is)\s*([^.!?\n]+)/i,
    /(?:for (?:a |an |the )?)(student|beginner|expert|teacher|developer|child|professional)[^.!?\n]*/i,
  ]
  for (const pattern of contextPatterns) {
    const match = prompt.match(pattern)
    if (match) {
      context = match[0].trim()
      break
    }
  }

  // Instructions detection
  let instructions: string | null = null
  const instructionPatterns = [
    /(?:please|kindly|help me|can you|could you|i need you to|i want you to|write|create|generate|explain|describe|list|compare|analyze|summarize|translate|rewrite|fix|improve|optimize|review|design|build|implement)\s*([^.!?\n]+)/i,
  ]
  for (const pattern of instructionPatterns) {
    const match = prompt.match(pattern)
    if (match) {
      instructions = match[0].trim()
      break
    }
  }

  // Constraints detection
  let constraints: string | null = null
  const constraintPatterns = [
    /(?:must|should|do not|don't|never|always|only|keep it|limit|max|minimum|maximum|no more than|in (?:under|less than|exactly) \d+)/i,
    /(?:within \d+ (?:words|characters|sentences|paragraphs|lines))/i,
    /(?:in (?:a |an |the )?(?:formal|casual|technical|simple|professional|friendly))\s*(?:tone|style| manner| way)?/i,
  ]
  for (const pattern of constraintPatterns) {
    const match = prompt.match(pattern)
    if (match) {
      constraints = match[0].trim()
      break
    }
  }

  // Quality scoring
  const wordCount = prompt.split(/\s+/).length
  const hasQuestion = /[?]/.test(prompt)
  const hasSpecificity = /\b(specific|detailed|step.by.step|for example|such as|e\.g\.|i\.e\.)\b/i.test(prompt)
  const hasStructure = /[.,;:]/.test(prompt) && wordCount > 5
  const hasRole = role !== null
  const hasContext = context !== null
  const hasConstraints = constraints !== null

  const clarity = Math.min(1, 
    (wordCount >= 5 ? 0.3 : wordCount * 0.06) +
    (hasQuestion ? 0.2 : 0) +
    (hasStructure ? 0.2 : 0) +
    (hasSpecificity ? 0.3 : 0.1)
  )

  const specificity = Math.min(1,
    (wordCount >= 10 ? 0.3 : wordCount * 0.03) +
    (hasSpecificity ? 0.3 : 0) +
    (hasConstraints ? 0.2 : 0) +
    (instructions ? 0.2 : 0)
  )

  const contextScore = Math.min(1,
    (hasRole ? 0.3 : 0) +
    (hasContext ? 0.3 : 0) +
    (wordCount >= 15 ? 0.2 : wordCount * 0.013) +
    (hasConstraints ? 0.2 : 0)
  )

  return {
    role,
    context,
    instructions,
    constraints,
    quality: {
      clarity: Math.round(clarity * 100) / 100,
      specificity: Math.round(specificity * 100) / 100,
      context: Math.round(contextScore * 100) / 100,
    },
  }
}

/** Generate 4 prompt variations for a given task. */
export function generateVariations(task: string): PromptVariation[] {
  const trimmed = task.trim()

  return [
    {
      style: "beginner",
      prompt: `Can you explain ${trimmed} in simple terms? I'm just starting to learn about this.`,
      simulatedOutput: `[Beginner-friendly response]\n\nOf course! Let me break this down in a way that's easy to understand...\n\n${trimmed} is actually quite fascinating when you look at it simply. Think of it like this: imagine you have a big box of LEGO blocks. Each block represents a small piece of information. When you put them together in the right way, you build something amazing!\n\nThe key things to remember are:\n• It's built from simple concepts\n• Everyone can understand it with the right explanation\n• Practice makes perfect\n\nWould you like me to go deeper into any part?`,
    },
    {
      style: "expert",
      prompt: `Provide a comprehensive, technically rigorous analysis of ${trimmed}. Include relevant frameworks, edge cases, and current state-of-the-art approaches. Assume the reader has graduate-level knowledge.`,
      simulatedOutput: `[Expert-level response]\n\n## Technical Analysis: ${trimmed}\n\n### Foundational Framework\nThe theoretical underpinnings of this domain rest on several key principles...\n\n### Current State of the Art\nRecent advances (2024-2025) have demonstrated significant progress in...\n\n### Key Considerations\n1. **Scalability**: The primary challenge remains...\n2. **Edge Cases**: Noteworthy exceptions include...\n3. **Trade-offs**: The fundamental tension between...\n\n### Practical Implications\nFrom an engineering perspective, the critical decisions involve...\n\n### Open Research Questions\nSeveral unresolved problems persist in the literature...`,
    },
    {
      style: "childFriendly",
      prompt: `Hey! Can you tell me about ${trimmed}? Make it fun and exciting, like a story! Use examples a kid would love. 🌟`,
      simulatedOutput: `[Child-friendly response] 🎉\n\n# Wow, this is SO cool!\n\nImagine you're a superhero, and ${trimmed} is your superpower! 🦸\n\nHere's how it works:\n\n🌈 **Step 1**: Think of your favorite video game. You know how the game has rules? Well, this works kind of like that!\n\n🎮 **Step 2**: Just like how you learn new levels in a game, you can learn this too! It's like unlocking achievements.\n\n🏆 **Step 3**: The more you practice, the better you get — just like getting really good at basketball or drawing!\n\nIsn't that amazing? What part do you want to know more about? 🤔`,
    },
    {
      style: "formal",
      prompt: `Please provide a formal, academic-level explanation of ${trimmed}. Structure your response with clear sections, use appropriate terminology, and cite the relevance of this topic in professional and scholarly contexts.`,
      simulatedOutput: `[Formal academic response]\n\n## ${trimmed}\n\n### 1. Introduction\nThe subject of ${trimmed} holds considerable significance within both academic discourse and professional practice. This overview presents a structured examination of its fundamental principles and contemporary applications.\n\n### 2. Theoretical Background\nThe conceptual framework underlying this topic draws from established principles in the field, including...\n\n### 3. Key Principles\nThe following principles constitute the foundational elements:\n- **Principle A**: ...\n- **Principle B**: ...\n- **Principle C**: ...\n\n### 4. Contemporary Applications\nIn professional contexts, this knowledge finds application in...\n\n### 5. Conclusion\nA thorough understanding of ${trimmed} equips practitioners with the foundational knowledge necessary for...`,
    },
  ]
}

/** Get a random example prompt from the categories. */
export function randomExample(): string {
  const category = PROMPT_CATEGORIES[Math.floor(Math.random() * PROMPT_CATEGORIES.length)]
  return category.example
}

/** Get a random example except avoid repeating the current one. */
export function randomExampleExcept(current: string): string {
  const filtered = PROMPT_CATEGORIES.filter((c) => c.example !== current)
  if (filtered.length === 0) return randomExample()
  return filtered[Math.floor(Math.random() * filtered.length)].example
}
