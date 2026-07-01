import dynamic from "next/dynamic";
const GenresTabsInner = dynamic(
  () => import("@/app/_components/webComp/genres/GenresTabsInner"),
);
import { GenresData } from "@/app/_components/webComp/genres/GenresData";

export default function GenresTabs() {
  return <GenresTabsInner genres={GenresData} />;
}
