import AuthorSlider from "@/app/_components/webComp/author/AuthorSlider";
import Text from "@/app/_components/ui/Text";
import Badge from "@/app/_components/ui/Badge";

export default function Author() {
  return (
    <section className="pb-6.25 md:pb-10">
      <div className="mx-auto px-4 md:container">
        <Text
          as="h2"
          animate
          className="text-mid text-center text-[22px] leading-10 font-bold tracking-[-1.44px] sm:text-[28px] sm:leading-12 md:text-[30px] md:leading-14 lg:text-left lg:text-[38px] lg:leading-16 xl:text-[48px] xl:leading-18"
        >
          Real Authors, <Badge label="Real Results" variant="primary" />
        </Text>
        <div className="bg-mid ms:py-8 ms:px-8 relative mt-8.75 flex flex-row flex-wrap items-center justify-center gap-4 overflow-hidden rounded-[30px] px-6 py-6 md:rounded-[56px] lg:gap-0 lg:rounded-[60px] xl:justify-between 2xl:px-10 2xl:py-10">
          <AuthorSlider />
        </div>
      </div>
    </section>
  );
}
