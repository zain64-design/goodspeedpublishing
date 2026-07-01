import dynamic from "next/dynamic";
const IllustrationSliderInner = dynamic(
  () =>
    import("@/app/_components/webComp/illustration/IllustrationSliderInner"),
);
import { IllustrationData } from "@/app/_components/webComp/illustration/IllustrationData";

export default function IllustrationSlider() {
  return <IllustrationSliderInner illustration={IllustrationData} />;
}
