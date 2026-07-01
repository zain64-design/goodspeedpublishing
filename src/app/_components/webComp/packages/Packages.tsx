import Text from "@/app/_components/ui/Text";
import PackageBox from "@/app/_components/webComp/packages/PackageBox";

export default function Packages() {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="mx-auto px-4 md:container">
        <Text
          as="h2"
          animate
          className="text-black-text-100 4xl:text-[68px] 4xl:leading-18.75 mb-3.5 text-center text-2xl leading-normal font-bold tracking-[-1.442px] capitalize sm:text-4xl md:text-[48px] xl:mb-5.5 xl:text-[54px] 2xl:text-[60px] 2xl:leading-16.75"
        >
          Choose Your Path To Success
        </Text>
        <Text
          as="p"
          animate
          className="text-grey-text-300 4xl:text-2xl mb-10 text-center text-xs leading-5 sm:text-sm md:mb-16 md:text-base md:leading-7 xl:mb-21 xl:text-lg 2xl:text-[22px] 2xl:leading-8.75"
        >
          Join us today and be a part of our 1,000+ Bestsellers list.
        </Text>
        <PackageBox />
      </div>
    </section>
  );
}
