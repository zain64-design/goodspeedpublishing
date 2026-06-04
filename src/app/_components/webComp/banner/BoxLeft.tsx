import ImageComp from '@/app/_components/ui/Image'
import LeftBoxBook from "@public/images/br-books.webp"
import LeftBoxElem from "@public/images/left-box-elem.webp"
import Text from '@/app/_components/ui/Text'
import CustomBtn from '@/app/_components/ui/CustomBtn'


type Props = {}

export default function BoxLeft({ }: Props) {
    return (
        <div className="bg-primary pt-10 pl-15 rounded-[48px] overflow-hidden">
            <Text as="h1" className="text-mid capitalize tracking-[-1.639px] font-black leading-normal mb-2 text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 2xl:mb-8.75">
                Your Book Deserves to Be Read
            </Text>
            <div className="flex flex-row flex-wrap items-start justify-between gap-2">
                <div className="w-full md:w-[50%] flex-1">
                    <div className="flex flex-row flex-wrap items-center gap-4 mb-13.25">
                        <ImageComp src={LeftBoxBook} width={216} height={77} preload={true} className="max-w-full max-h-19.25 block object-contain" alt="element-books" />
                        <Text as="p" className="text-mid font-black text-2xl sm:text-4xl md:text-[40px] text-left capitalize flex flex-row items-center max-w-42.5 gap-2.5">
                            2k+
                            <Text as="span" className="font-medium leading-5.5! text-sm sm:text-base md:text-lg text-trim">published books</Text>
                        </Text>
                    </div>
                    <Text as="span" className="text-mid block font-semibold text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-[22px] 4xl:text-2xl leading-5 md:leading-7 2xl:leading-7.5 mb-4 sm:mb-6 md:mb-0">Get Your Free, Personalized Publishing Plan.</Text>
                        <CustomBtn label="claim my plan" buttonClass="btn-mid uppercase rounded-2xl xl:rounded-[24px] inline-flex items-center !mt-4 md:!mt-5 xl:!mt-[40px] h-[50px] xl:h-[60px] 2xl:h-[90px] md:max-w-[347px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-[23px]"/>
                </div>
                <ImageComp src={LeftBoxElem} width={345} height={381} preload={true} className="max-w-full max-h-95.25 block object-contain" alt="element-outline-book" />
            </div>
        </div>
    )
}