import Text from "@/app/_components/ui/Text";
import BookACall from "@/app/_components/webComp/faq/BookACall";

export default function FaqDesc() {
  return (
    <>
      <Text
        as="h4"
        animate
        className="text-black-text-100 4xl:text-[68px] 4xl:leading-18.75 mb-2 mb-2.5 text-left text-2xl leading-normal font-bold tracking-[-1.442px] capitalize sm:mb-4.5 sm:text-4xl md:mb-6.5 md:text-[48px] lg:mb-8 xl:mb-10 xl:text-[54px] 2xl:mb-15.75 2xl:text-[60px] 2xl:leading-16.75"
      >
        Frequently Asked Questions
      </Text>
      <BookACall />
    </>
  );
}
