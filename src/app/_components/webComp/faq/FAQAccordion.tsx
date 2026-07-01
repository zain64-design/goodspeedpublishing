import dynamic from "next/dynamic";
const Accordion = dynamic(() => import("@/app/_components/ui/CustomAccordion"));
import { FAQData } from "@/app/_components/webComp/faq/FAQData";

export default function FAQAccordion() {
  return <Accordion faq={FAQData} />;
}
