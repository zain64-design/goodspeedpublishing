import Text from "@/app/_components/ui/Text"
import PackageBox from "./PackageBox"
import { packagesData } from "./packagesData"

type Props = {}

export default function Packages({ }: Props) {
    return (
        <section className='py-6.25 md:py-12.5'>
            <div className="md:container mx-auto px-4">
                <Text as="h2" animate className="text-black-text-100 text-center capitalize tracking-[-1.442px] font-bold leading-normal text-2xl sm:text-4xl md:text-[48px] xl:text-[54px] 2xl:text-[60px] 4xl:text-[68px] 2xl:leading-16.75 4xl:leading-18.75 mb-3.5 xl:mb-5.5">Choose Your Path To Success</Text>
                <Text as="p" animate className="text-grey-text-300 text-center text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-[22px] 4xl:text-2xl leading-5 md:leading-7 2xl:leading-8.75 mb-10 md:mb-16 xl:mb-21">Join us today and be a part of our 1,000+ Bestsellers list.</Text>
                <PackageBox packages={packagesData}/>
            </div>
        </section>
    )
}