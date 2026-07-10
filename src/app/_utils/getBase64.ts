import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function getBase64(src: string) {
  const buffer = await fs.readFile(`/public${src}`);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
