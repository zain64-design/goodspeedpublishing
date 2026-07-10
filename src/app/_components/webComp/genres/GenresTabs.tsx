import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import dynamic from "next/dynamic";
const GenresTabsInner = dynamic(
  () => import("@/app/_components/webComp/genres/GenresTabsInner"),
);
import { GenresData } from "@/app/_components/webComp/genres/GenresStaticData";

export default async function GenresTabs() {
  const data = await Promise.all(
    GenresData.map(async (item) => {
      const buffer = await fs.readFile(`./public${item.thumbnail}`);
      const { base64 } = await getPlaiceholder(buffer);
      return { ...item, blurDataURL: base64 };
    }),
  );
  return <GenresTabsInner genres={data} />;
}
