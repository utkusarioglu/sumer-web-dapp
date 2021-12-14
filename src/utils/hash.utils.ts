/**
 * Takes the first and last 4 digits of the hash
 * to create an easier to parse hash string for
 * humans
 */
export function shortenHash(hash: string): string {
  return hash.slice(0, 4) + "…" + hash.slice(-4);
}
