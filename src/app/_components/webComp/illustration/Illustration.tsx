import Text from "@/app/_components/ui/Text";
import IllustrationSlider from "@/app/_components/webComp/illustration/IllustrationSlider";

export default function Illustration() {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="mx-auto px-4 text-center md:container">
        <div className="bg-secondary 4xl:py-14 rounded-[30px] py-5 sm:py-5 md:rounded-[62px] lg:py-8 xl:py-10 2xl:py-11">
          <Text
            as="span"
            animate
            className="inline-block text-[18px] font-medium tracking-[1.12px] text-white uppercase md:text-[28px]"
          >
            {" "}
            our creations
          </Text>
          <Text
            as="h2"
            animate
            className="4xl:text-[86px] mt-4 mb-2 text-2xl leading-normal font-extrabold text-white capitalize sm:text-4xl md:mt-8 md:text-[54px] xl:text-[64px] 2xl:mb-8.75 2xl:text-[74px] 2xl:leading-21.5"
          >
            Our{" "}
            <Text as="span" className="text-primary">
              Custom Illustrations
            </Text>{" "}
            That Captivate Readers
          </Text>
          <IllustrationSlider />
        </div>
      </div>
    </section>
  );
}
