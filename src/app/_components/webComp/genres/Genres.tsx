import Text from "@/app/_components/ui/Text"
import { CurveLine } from "@/app/_components/ui/Icons"
import GenresTabs from '@/app/_components/webComp/genres/GenresTabs'

export default function Genres() {
    return (
        <section className='py-6.25 md:py-12.5'>
            <div className="md:container mx-auto px-4 text-center">
                <div className="relative z-1 bg-white rounded-[30px] md:rounded-[62px] p-3.5 sm:p-5 lg:p-8 xl:p-10 2xl:p-11 4xl:p-14 overflow-hidden">
                    <Text as="span" animate className="relative text-center text-mid font-medium capitalize text-[14px] sm:text-[18px] content-center md:text-[28px] tracking-[1.12px] inline-block"><CurveLine className="max-h-8 max-w-8 sm:max-h-12 sm:max-w-12 md:max-h-16.25 md:max-w-16.25 block absolute left-0 right-0 -top-2 mx-auto z-[-1]" /> From fresh voices to powerful stories!</Text>
                    <Text as="h2" animate className="text-mid capitalize tracking-[-2px] lg:tracking-[-3px] 4xl:tracking-[-4.8px] font-extrabold leading-normal mt-4 md:mt-8 mb-4 text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 md:mb-8.75">range of genres we cater</Text>
                    <GenresTabs/>
                </div>
            </div>
        </section>
    )
}