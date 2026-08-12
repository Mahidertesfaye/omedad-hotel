import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Data URL for the white Omedad mark used on dark/navy surfaces. */
export async function getOmedadLogoDataUrl() {
  const logo = await readFile(join(process.cwd(), "public/omedad-logo.png"));
  return `data:image/png;base64,${logo.toString("base64")}`;
}
