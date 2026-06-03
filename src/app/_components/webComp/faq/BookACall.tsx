import CustomBtn from "@/app/_components/ui/CustomBtn"
import ImageComp from "@/app/_components/ui/Image"
import Text from "@/app/_components/ui/Text"
import bookCall from "@public/images/fav-sm.webp"

type Props = {}

export default function BookACall({}: Props) {
  return (
   <div className="bg-white-100 py-4 px-5 sm:py-6 sm:px-7 md:py-7 md:px-8 2xl:py-8.5 2xl:px-10 4xl:py-8.5 4xl:px-10 rounded-[25px] md:rounded-[42px]">
    <ImageComp src={bookCall} alt="fav-icon" width={43} height={43} className="max-w-full h-8 md:h-10.75 mb-4 object-contain"/>
      <Text as="h4" className="text-black font-semibold mb-2 md:mb-3.5 xl:mb-4.75 text-2xl md:text-[32px]">Book a 30 min call</Text>
      <Text as="p" className="text-grey-text-300 font-normal text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl 4xl:text-[22px] leading-5 xl:leading-7 2xl:leading-7.5 mb-1 md:mb-1.75">
        We’ll sit down one-on-one to validate your idea and answer every "what if" on your mind.
      </Text>
    <CustomBtn label="Book a Call" buttonClass="btn-secondary inline-flex items-center !mt-4 md:!mt-5 xl:!mt-[40px] h-[50px] xl:h-[60px] 2xl:h-[76px] max-w-[200px] xl:max-w-full flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-[23px]"/>
    </div>
  )
}