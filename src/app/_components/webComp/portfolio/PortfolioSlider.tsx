import dynamic from "next/dynamic";
const PortfolioSliderInner = dynamic(
  () => import("@/app/_components/webComp/portfolio/PortfolioSliderInner"),
);
import { portfolioData } from "@/app/_components/webComp/portfolio/PortfolioData";

export default function PortfolioSlider() {
  return <PortfolioSliderInner portfolio={portfolioData} />;
}
