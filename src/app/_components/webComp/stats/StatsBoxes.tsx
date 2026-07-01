import dynamic from "next/dynamic";
const StatsBoxesInner = dynamic(
  () => import("@/app/_components/webComp/stats/StatsBoxesInner"),
);
import { statsData } from "@/app/_components/webComp/stats/StatsData";

export default function StatsBoxes() {
  return <StatsBoxesInner stats={statsData} />;
}
