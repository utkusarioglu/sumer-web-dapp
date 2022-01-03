export const BOTTOM_BAR_PATHS = ["blocks", "transactions", "events"];
export const HOME_PATH = "blocks";

/**
 * Converts react-router-dom `location.pathname` value to
 * index number for BOTTOM_BAR_PATHS. Returns if the pathname
 * doesn't exist among the const values.
 */
export function pathnameToIndex(pathname: string): number {
  const pathnameAdjusted =
    pathname == "/" ? HOME_PATH : pathname.split("/").at(-1);
  if (!pathnameAdjusted) {
    return -1;
  }
  const index = BOTTOM_BAR_PATHS.indexOf(pathnameAdjusted);
  return index;
}

/**
 * Converts BOTTOM_BAR_PATHS index to react-router-dom `navigate` path.
 * returns "404" if the path is not available
 */
export function indexToNavigate(
  index: number
): typeof BOTTOM_BAR_PATHS[number] | "/" {
  const path = BOTTOM_BAR_PATHS[index] || "404";
  const adjustedPath = path == HOME_PATH ? "/" : path;
  return adjustedPath;
}
