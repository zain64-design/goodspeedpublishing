import AuthorSlider from '@/app/_components/webComp/author/AuthorSlider'
import Text from '@/app/_components/ui/Text'
import Badge from '@/app/_components/ui/Badge'

export default function Author() {
    return (
        <section className="pb-6.25 md:pb-10">
            <div className="md:container mx-auto px-4">
                <Text as="h2" animate className='text-mid text-center lg:text-left text-[22px] leading-10 sm:text-[28px] sm:leading-12 md:text-[30px] md:leading-14 lg:text-[38px] lg:leading-16 xl:text-[48px] xl:leading-18 font-bold tracking-[-1.44px]'>Real Authors, <Badge label="Real Results" variant="primary" /></Text>
                <div className="relative overflow-hidden mt-8.75 bg-mid rounded-[30px] md:rounded-[56px] lg:rounded-[60px] py-6 px-6 ms:py-8 ms:px-8 2xl:py-10 2xl:px-10 flex flex-wrap flex-row items-center justify-center xl:justify-between gap-4 lg:gap-0">
                    <AuthorSlider/>
                </div>
            </div>
        </section>
    )
}