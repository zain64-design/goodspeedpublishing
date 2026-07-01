import CustomBtn from "@/app/_components/ui/CustomBtn";
import ImageComp from "@/app/_components/ui/Image";
import Text from "@/app/_components/ui/Text";
import bookCall from "@public/images/fav-sm.webp";

export default function BookACall() {
  return (
    <div className="bg-white-100 4xl:py-8.5 4xl:px-10 rounded-[25px] px-5 py-4 sm:px-7 sm:py-6 md:rounded-[42px] md:px-8 md:py-7 2xl:px-10 2xl:py-8.5">
      <ImageComp
        src={bookCall}
        alt="fav-icon"
        width={43}
        height={43}
        className="mb-4 h-8 w-auto object-contain md:h-10.75"
      />
      <Text
        as="h5"
        animate
        className="mb-2 text-2xl font-semibold text-black md:mb-3.5 md:text-[32px] xl:mb-4.75"
      >
        Book a 30 min call
      </Text>
      <Text
        as="p"
        animate
        className="text-grey-text-300 4xl:text-[22px] mb-1 text-xs leading-5 font-normal sm:text-sm md:mb-1.75 md:text-base xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-7.5"
      >
        We’ll sit down one-on-one to validate your idea and answer every "what
        if" on your mind.
      </Text>
      <CustomBtn
        label="Book a Call"
        buttonClass="btn-secondary inline-flex items-center !mt-4 md:!mt-5 xl:!mt-[40px] h-[50px] xl:h-[60px] 2xl:h-[76px] max-w-[200px] xl:max-w-full flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-[23px]"
      />
    </div>
  );
}
