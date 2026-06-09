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
                <Text as="h2" className='text-mid text-[24px] leading-10 sm:text-[28px] sm:leading-12 md:text-[30px] md:leading-14 lg:text-[38px] lg:leading-16 xl:text-[48px] xl:leading-18 font-bold tracking-[-1.44px]'>Real Authors, <Badge label="Real Results" variant="primary" /></Text>
                <div className="overflow-hidden mt-8.75 bg-mid rounded-[30px] md:rounded-[56px] lg:rounded-[62px] py-10 px-10 flex flex-wrap flex-row items-start justify-between">
                    <div className="w-full xl:w-max">
                        <ImageComp src={AuthorImg} className='max-w-full' alt='author' />
                    </div>
                    <div className="w-full flex-1">
                        <Text as="h4" className="text-transparent [-webkit-text-stroke:1px_grey] [-webkit-text-fill-color:mid] uppercase tracking-[7.4px] font-black text-2xl leading-6.5 sm:text-3xl sm:leading-8 md:text-[40px] md:leading-10.5 xl:text-[56px] xl:leading-14.5 2xl:text-[66px] 2xl:leading-17 4xl:text-[76px] 4xl:leading-19.5 6xl:text-[93px] 6xl:leading-21">success spotlight</Text>
                        <div className="flex flex-wrap items-start justify-between gap-2 pt-21.5">
                            <div className="max-w-168 mx-auto relative">
                                <CommaBefore className='absolute top-[-110px] left-0' />
                                <Text as="p" className="text-white  font-bold text-[48px] leading-15px tracking-[-1.4px]"> With Goodspeed, I kept <Text as="span" className='text-primary'>100% rights</Text> and reached <Text as="span" className='text-primary'>Top 10 in Amazon</Text> Business.</Text>
                                <CommaAfter className='ml-auto absolute bottom-0 right-0' />
                                <Text as="span" className='text-white text-lg font-light uppercase tracking-[1.4px] leading-5 '>Author A. Singh</Text>
                            </div>

                            <ImageComp src={TrustPilotReview} width={238} height={320} className="object-contain h-auto" alt="review" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}