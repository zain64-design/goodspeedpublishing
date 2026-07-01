import FaqDesc from "@/app/_components/webComp/faq/FaqDesc";
import FAQAccordion from "@/app/_components/webComp/faq/FAQAccordion";

export default function FAQ() {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="mx-auto px-4 md:container">
        <div className="flex flex-row flex-wrap items-center justify-between gap-6">
          <div className="w-full xl:max-w-2/5 2xl:max-w-2/5">
            <FaqDesc />
          </div>
          <div className="w-full md:flex-1 xl:max-w-[55%] 2xl:max-w-1/2">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
