import Text from "@/app/_components/ui/Text";
import StorySlider from "@/app/_components/webComp/story/StorySlider";

export default function Story() {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="mx-auto px-4 md:container">
        <div className="bg-primary-100 4xl:bg-[size:491px_280px,735px_189px] 4xl:p-14 overflow-hidden rounded-[30px] bg-[url('/images/contact-box-elem.webp'),url('/images/story-box-elem.webp')] bg-[size:160px_91px,280px_73px] bg-[position:top_left,right_80px_bottom] bg-no-repeat p-3.5 sm:bg-[size:160px_91px,280px_73px] sm:p-5 md:rounded-[62px] md:bg-[size:220px_125px,340px_88px] lg:bg-[size:280px_160px,440px_114px] lg:p-8 xl:bg-[size:320px_182px,520px_135px] xl:p-10 2xl:bg-[size:380px_217px,640px_166px] 2xl:p-11">
          <Text
            as="h2"
            animate
            className="4xl:text-[86px] mb-2 text-center text-2xl leading-normal font-extrabold tracking-[-1.639px] text-black capitalize sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:mb-8.75 2xl:text-[74px] 2xl:leading-21.5"
          >
            Perfect Your Story
          </Text>
          <Text
            as="p"
            animate
            className="4xl:text-2xl mb-4 text-center text-xs leading-5 text-black sm:mb-6 sm:text-sm md:mb-0 md:text-base md:leading-7 xl:text-lg 2xl:text-[22px] 2xl:leading-8.75"
          >
            We help you sharpen every chapter with expert book editing,
            formatting & proofreading services.
          </Text>
          <StorySlider />
        </div>
      </div>
    </section>
  );
}
