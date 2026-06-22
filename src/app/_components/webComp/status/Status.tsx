import Text from "@/app/_components/ui/Text"
import Link from "next/link"
import ImageComp from "@/app/_components/ui/Image"
import logoDark from "@public/images/logo-dark.webp"
import type { StatusPageProps } from '@/app/_types'

export default function Status({heading, subheading, linkLabel = "go home", linkHref = "/" }: StatusPageProps) {
  return (
    <section className="py-6 min-h-screen content-center">
      <div className="md:container mx-auto px-4 text-center">
        <ImageComp src={logoDark} width={410} height={52} className="logo transition duration-300 ease-in mx-auto max-w-60 xl:max-w-70 2xl:max-w-102.5 w-full object-contain mb-4 md:mb-0" alt="logo"/>
        <Text as="h2" className="text-black-text-100 text-center capitalize tracking-[-1.442px] font-bold leading-normal text-2xl sm:text-4xl md:text-[48px] xl:text-[54px] 2xl:text-[60px] 4xl:text-[68px] 2xl:leading-16.75 4xl:leading-18.75 my-6">{heading}</Text>
        <Text as="p" className="text-grey-text-300 text-center text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-[22px] 4xl:text-2xl leading-5 md:leading-7 2xl:leading-8.75 mb-10">{subheading}</Text>
        <Link href={linkHref} className="btn-primary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[240px] xl:max-w-[270px] 2xl:max-w-[292px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg">{linkLabel}</Link>
      </div>
    </section>
  )
}