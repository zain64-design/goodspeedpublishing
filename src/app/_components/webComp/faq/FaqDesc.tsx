import Text from "@/app/_components/ui/Text"
import BookACall from "@/app/_components/webComp/faq/BookACall"


type Props = {}

export default function FaqDesc({}: Props) {
  return (
    <>
    <Text as="h4" className="text-black-text-100 text-left capitalize tracking-[-1.442px] font-bold leading-normal mb-2 text-2xl sm:text-4xl md:text-[48px] xl:text-[54px] 2xl:text-[60px] 4xl:text-[68px] 2xl:leading-16.75 4xl:leading-18.75 mb-2.5 sm:mb-4.5 md:mb-6.5 lg:mb-8 xl:mb-10 2xl:mb-15.75">Frequently Asked Questions</Text>
    <BookACall />
    </>
  )
}