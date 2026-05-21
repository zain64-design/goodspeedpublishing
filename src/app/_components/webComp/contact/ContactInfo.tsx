import Text from '@/app/_components/ui/Text'
import Links from '@/app/_components/webComp/common/footer/Links'

type ContactItem = {
    id: number,
    brandInfo?: string,
    href: string,
    icon?: React.ElementType
}

type Props = {
    contactInfo: ContactItem[]
}

export default function ContactInfo({contactInfo}: Props) {
  return (
    <>
    <Text as="h6" className='text-black-text-100 uppercase tracking-[4px] font-medium text-sm sm:text-base md:text-lg mb-4.25'>Let’s start your Booking</Text>
    <Text as="h5" className='text-black-text-100 capitalize tracking-[-1.639px] font-bold leading-normal mb-4 text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[86px] 2xl:leading-21.5 2xl:mb-9.75'>Talk to Us.</Text>
    <Text as="p" className='text-black-text-50 font-normal text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-[23px] leading-5 xl:leading-7 2xl:leading-8.75'>Drop us a line and we’ll send your free, personalized publishing plan within 24 hours.</Text>
    <Links info={contactInfo} className="flex flex-col gap-4.5 pt-8 2xl:pt-12.5" itemClassName="group"  linkClassName="flex items-center flex-wrap gap-2 lg:gap-[17px] font-normal text-black-text-100 text-xs sm:text-sm md:text-base xl:text-xl bs-transition group-hover:text-black-text-50" iconClassName="bg-mid text-primary-50 w-6 h-6 sm:w-8 sm:h-8 xl:w-13 xl:h-13 flex items-center justify-center rounded-full text-sm md:text-lg xl:text-2xl bs-transition group-hover:bg-secondary group-hover:text-white"/>
    </>
  )
}