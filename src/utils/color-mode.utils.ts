/**
 * Retrieves browser color preference
 */
export function userColorModePreference(): "dark" | "light" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
