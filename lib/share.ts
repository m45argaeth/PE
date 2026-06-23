/**
 * Share / copy helpers for the Prompt Explorer.
 */

/** Encode a prompt for use in a URL hash. */
export function encodeSharePrompt(prompt: string): string {
  return encodeURIComponent(prompt.toLowerCase().trim())
}

/** Decode a prompt from a URL hash. */
export function decodeSharePrompt(hash: string): string | null {
  try {
    const decoded = decodeURIComponent(hash.replace(/^#/, "").trim())
    return decoded || null
  } catch {
    return null
  }
}

/** Copy text to clipboard, returning success boolean. */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/** Build a share URL for a specific prompt. */
export function buildShareUrl(prompt: string): string {
  if (typeof window === "undefined") return ""
  return `${window.location.origin}/playground#${encodeSharePrompt(prompt)}`
}
