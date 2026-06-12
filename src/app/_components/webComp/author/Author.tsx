import ImageComp from '@/app/_components/ui/Image'
import Text from '@/app/_components/ui/Text'
import AuthorImg from "@public/images/author.png"
import TrustPilotReview from "@public/images/trustpilot-review.webp"
import { CommaBefore, CommaAfter } from '@/app/_components/ui/Icons'
import Badge from '@/app/_components/ui/Badge'


type Props = {}

export default function Author({ }: Props) {
    return (
        <section className="pb-6.25 md:pb-10">
            <div className="md:container mx-auto px-4">
                <Text as="h2" className='text-mid text-center lg:text-left text-[22px] leading-10 sm:text-[28px] sm:leading-12 md:text-[30px] md:leading-14 lg:text-[38px] lg:leading-16 xl:text-[48px] xl:leading-18 font-bold tracking-[-1.44px]'>Real Authors, <Badge label="Real Results" variant="primary" /></Text>
                <div className="overflow-hidden mt-8.75 bg-mid rounded-[30px] md:rounded-[56px] lg:rounded-[60px] py-6 px-6 ms:py-8 ms:px-8 2xl:py-10 2xl:px-10 flex flex-wrap flex-row items-start justify-between gap-4 lg:gap-0">
                    <div className="w-full lg:max-w-70 xl:max-w-90 2xl:max-w-110 4xl:max-w-130 6xl:max-w-144.25">
                        <ImageComp src={AuthorImg} className='w-auto max-h-126 object-contain d-block mx-auto' alt='author' />
                    </div>
                    <div className="w-full flex-1">
                        <Text as="h3" className="text-transparent [-webkit-text-stroke:1px_grey] [-webkit-text-fill-color:mid] uppercase tracking-[7.4px] font-black text-2xl leading-6.5 sm:text-3xl sm:leading-7.5 md:text-[52px] md:leading-13 xl:text-[56px] xl:leading-14 2xl:text-[62px] 2xl:leading-16 4xl:text-[80px] 4xl:leading-20.5 6xl:text-[94px] 6xl:leading-24">success spotlight</Text>
                        <div className="flex flex-wrap items-start justify-center md:justify-between gap-2 md:gap-0 pt-10 lg:pt-10 xl:pt-12 2xl:pt-16 4xl:pt-23.5 6xl:pt-26.25">
                            <div className="max-w-115 lg:max-w-90 xl:max-w-110 2xl:max-w-134.5 4xl:max-w-xl 6xl:max-w-2xl mx-auto">
                                <Text as="p" className="text-white font-bold text-[24px] leading-8.5 lg:text-[28px] lg:leading-9.5 xl:text-[32px] xl:leading-10.5 2xl:text-[38px] 2xl:leading-12 4xl:text-[42px] 4xl:leading-13.5 6xl:text-[48px] 6xl:leading-15 tracking-[-1.4px] relative"><CommaBefore className='absolute h-7 lg:h-9 xl:h-11 2xl:h-14 4xl:h-18 6xl:h-20.5 -top-13 lg:-top-13 xl:-top-16 2xl:-top-21 4xl:-top-30 6xl:-top-32.5 bottom-auto left-0' /> With Goodspeed, I kept <Text as="span" className='text-primary'>100% rights</Text> and reached <Text as="span" className='text-primary'>Top 10 in Amazon</Text> Business. <CommaAfter className='ml-auto absolute h-4 lg:h-6 xl:h-8 2xl:h-10 4xl:h-13 6xl:h-15 top-full bottom-auto right-3.75' /></Text>
                                <Text as="span" className='mt-5.5 inline-flex items-center gap-3 text-white text-base 2xl:text-lg font-light uppercase tracking-[1.4px] leading-5 right-dash'>Author A. Singh</Text>
                            </div>
                            <ImageComp src={TrustPilotReview} width={238} height={320} className="max-w-42 object-contain lg:max-w-32 xl:max-w-42 2xl:max-w-52 4xl:max-w-55 6xl:max-w-59.5 h-auto" alt="review" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}