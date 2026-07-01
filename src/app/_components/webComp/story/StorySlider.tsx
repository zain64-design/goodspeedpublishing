import dynamic from "next/dynamic";
const StorySliderInner = dynamic(
  () => import("@/app/_components/webComp/story/StorySliderInner"),
);
import { storyData } from "@/app/_components/webComp/story/StoryData";

export default function StorySlider() {
  return <StorySliderInner story={storyData} />;
}
