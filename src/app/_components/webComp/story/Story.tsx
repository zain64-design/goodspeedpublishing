import StorySlider from "@/app/_components/webComp/story/StorySlider"
import Text from "../../ui/Text"

type Props = {}

export default function Story({ }: Props) {
  return (
    <section className="md:container mx-auto px-4">
      <div className="overflow-hidden bg-primary-100 bg-no-repeat bg-[position:top_left,right_80px_bottom] bg-[size:491px_280px,735px_189px] bg-[url('/images/contact-box-elem.webp'),url('/images/story-box-elem.webp')] rounded-[30px] md:rounded-[62px] p-3.5 sm:p-5 lg:p-8 xl:p-10 2xl:p-11 4xl:p-14">
      <Text as="h5" className="text-black text-center capitalize tracking-[-1.639px] font-bold leading-normal mb-4 text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 2xl:mb-8.75">Perfect Your Story</Text>
      <Text as="h6" className="text-black text-center text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-[22px] 4xl:text-2xl leading-5 md:leading-7 2xl:leading-8.75 mb-4 sm:mb-6 md:mb-0">We help you sharpen every chapter with expert book editing, formatting & proofreading services.</Text>
        <StorySlider/>
      </div>
    </section>
  )
}