import ImageComp from '@/app/_components/ui/Image'
import { getImageProps } from 'next/image'
import LeftBoxBook from "@public/images/br-books.webp"
import LeftBoxElem from "@public/images/left-box-elem.webp"
import Text from '@/app/_components/ui/Text'
import CustomBtn from '@/app/_components/ui/CustomBtn'
import { getBackgroundImage } from '@/app/_utils/getBackgroundImage'


type Props = {}

export default function BoxLeft({ }: Props) {
    const { props: { srcSet: srcSet1 } } = getImageProps({ alt: '', width: 345, height: 381, src: LeftBoxElem, quality: 50 })
    return (
        <div className="bg-primary py-4 px-6 md:py-4 md:px-6 lg:py-5 lg:px-9 2xl:py-6 2xl:px-11 4xl:py-8 4xl:px-13 6xl:py-9.75 6xl:px-15 rounded-[30px] lg:rounded-[48px] bg-no-repeat bg-bottom-right bg-size-[140px_155px] md:bg-size-[160px_177px] 2xl:bg-size-[290px_320px] 4xl:bg-size-[345px_381px] overflow-hidden" style={{
            backgroundImage: `${getBackgroundImage(srcSet1)}`
        }}>
            <Text as="h1" className="text-mid capitalize tracking-[-1.639px] font-black mb-2 text-2xl leading-6.5 sm:text-3xl sm:leading-8 md:text-[40px] md:leading-10.5 xl:text-[56px] xl:leading-14.5 2xl:text-[66px] 2xl:leading-17 2xl:mb-7.25 4xl:text-[76px] 4xl:leading-19.5 4xl:mb-8.25 6xl:text-[96px] 6xl:leading-24.5 mb-3 lg:mb-5 xl:mb-7">
                Your Book Deserves to Be Read
            </Text>
            <div className="w-full sm:w-[calc(100%-20%)] xl:w-[calc(100%-20%)] 2xl:w-[calc(100%-30%)] 4xl:w-[calc(100%-35%)]">
                <div className="flex flex-row flex-wrap items-center gap-2 mb-4 sm:mb-5 md:mb-6 lg:mb-8 2xl:gap-4 xl:mb-13.25">
                    <ImageComp src={LeftBoxBook} width={216} height={77} quality={75} preload={true} className="max-w-30 md:max-w-35 xl:max-w-50 2xl:max-w-54 block object-contain" alt="element-books" />
                    <Text as="p" className="text-mid font-black text-xl lg:text-2xl xl:text-4xl 4xl:text-[40px] text-left capitalize flex flex-row items-baseline-last max-w-42.5 gap-2.5">
                        2k+
                        <Text as="span" className="font-medium text-sm leading-normal! lg:text-sm xl:text-base xl:leading-5! 4xl:text-lg 4xl:leading-5.5! text-trim">published books</Text>
                    </Text>
                </div>
                <Text as="span" className="text-mid block text-balance font-semibold text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-[22px] 4xl:text-2xl leading-5 2xl:leading-7 4xl:leading-7.5 mb-4 sm:mb-6 md:mb-0">Get Your Free, Personalized Publishing Plan.</Text>
                <CustomBtn label="claim my plan" buttonClass="btn-mid uppercase rounded-2xl 2xl:rounded-[24px] inline-flex items-center !mt-4 md:!mt-5 xl:!mt-[31px] h-[50px] max-w-[220px] xl:h-[60px] xl:max-w-[250px] 2xl:h-[80px] 2xl:max-w-[320px] 4xl:h-[90px] 4xl:max-w-[347px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-[20px] 4xl:text-[23px]" />
            </div>
        </div>
    )
}