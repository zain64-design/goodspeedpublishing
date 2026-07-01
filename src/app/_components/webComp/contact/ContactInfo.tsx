import Text from "@/app/_components/ui/Text";
import Links from "@/app/_components/webComp/common/footer/Links";
import type { LinkItem } from "@/app/_types";

type Props = {
  contactInfo: LinkItem[];
};

export default function ContactInfo({ contactInfo }: Props) {
  return (
    <>
      <Text
        as="span"
        animate
        className="text-black-text-100 mb-2 block text-sm font-medium tracking-[4px] uppercase sm:mb-4.25 sm:text-base md:text-lg"
      >
        Let’s start your Booking
      </Text>
      <Text
        as="h5"
        animate
        className="text-black-text-100 4xl:text-[86px] mb-2 text-2xl leading-normal font-bold tracking-[-1.639px] capitalize sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:mb-9.75 2xl:text-[74px] 2xl:leading-21.5"
      >
        Talk to Us.
      </Text>
      <Text
        as="p"
        animate
        className="text-black-text-50 4xl:text-[23px] text-xs leading-5 font-normal sm:text-sm md:text-base xl:text-lg xl:leading-7 2xl:text-[21px] 2xl:leading-8.75"
      >
        Drop us a line and we’ll send your free, personalized publishing plan
        within 24 hours.
      </Text>
      <Links
        info={contactInfo}
        className="flex flex-col gap-4.5 pt-4 sm:pt-8 2xl:pt-12.5"
        itemClassName="group"
        linkClassName="flex items-center flex-wrap gap-2 lg:gap-[17px] font-normal text-black-text-100 text-xs sm:text-sm md:text-base xl:text-xl bs-transition group-hover:text-black-text-50"
        iconClassName="bg-mid text-primary-50 w-6 h-6 sm:w-8 sm:h-8 xl:w-13 xl:h-13 flex items-center justify-center rounded-full text-sm md:text-lg xl:text-2xl bs-transition group-hover:bg-secondary group-hover:text-white"
      />
    </>
  );
}
