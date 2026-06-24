import dynamic from 'next/dynamic'
import Text from "@/app/_components/ui/Text"
const IllustrationSlider = dynamic(() => import('@/app/_components/webComp/illustration/IllustrationSlider'))

export default function Illustration() {
  return (
    <section className='py-6.25 md:py-12.5'>
        <div className="md:container mx-auto px-4 text-center">
            <div className="bg-secondary rounded-[30px] md:rounded-[62px] py-5 sm:py-5 lg:py-8 xl:py-10 2xl:py-11 4xl:py-14">
            <Text as="span" animate className="inline-block text-white font-medium uppercase text-[18px] md:text-[28px] tracking-[1.12px]"> our creations</Text>
            <Text as="h2" animate className="text-white font-extrabold leading-normal capitalize mt-4 md:mt-8 mb-2 text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 2xl:mb-8.75">Our <Text as="span" className="text-primary">Custom Illustrations</Text> That Captivate Readers</Text>
            <IllustrationSlider/>
            </div>
        </div>
    </section>
  )
}