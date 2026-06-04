import ImageComp from '@/app/_components/ui/Image'
import LeftBoxBook from "@public/images/br-books.webp"
import Text from '@/app/_components/ui/Text'


type Props = {}

export default function BoxLeft({}: Props) {
  return (
    <div className="bg-primary py-10 px-15 rounded-[48px] bg-no-repeat bg-[position:bottom_right] bg-[size:345px_381px] bg-[url('/images/left-box-elem.webp')] overflow-hidden">
        <div className="w-[calc(100%-120px)]">
            <Text as="h1" className="text-mid text-left capitalize tracking-[-1.639px] font-black leading-normal mb-2 text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 2xl:mb-8.75">
                Your Book Deserves to Be Read
            </Text>
            <div className="flex flex-row flex-wrap items-center gap-4">
                <ImageComp src={LeftBoxBook} width={216} height={77} preload={true} className="max-w-full max-h-19.25 block object-contain" alt="customer" />
                <Text as="p" className="text-mid font-black text-2xl sm:text-4xl md:text-[40px] text-left capitalize flex flex-row items-center max-w-42.5 gap-2.5">
                    2k+
                    <Text as="span" className="font-medium leading-5.5 text-sm sm:text-base md:text-lg text-trim">published books</Text>
                </Text>
            </div>
        </div>
        
    </div>
  )
}