import ImageComp from "@/app/_components/ui/Image"
import Text from "@/app/_components/ui/Text"
import logoLight from "@public/images/logo-light.webp"
import Links from "./Links"
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";

const navigation = [
        {
            id: 1,
            title: "Book Writing",
            href: "/"
        },
        {
            id: 2,
            title: "Book Editing",
            href: "/"
        },
        {
            id: 3,
            title: "Book Marketing",
            href: "/"
        },
        {
            id: 4,
            title: "Book Publishing",
            href: "/"
        },
        {
            id: 5,
            title: "Audio Books",
            href: "/"
        },
        {
            id: 6,
            title: "About",
            href: "/"
        },
        {
            id: 7,
            title: "Schedule a Call",
            href: "/"
        }
    ]

        const contactInfo = [
        {
            id: 1,
            brandInfo: "+1(646)-389-2410",
            href: "tel:+16463892410",
            icon: <HiOutlinePhone />
        },
        {
            id: 2,
            brandInfo: "info@goodspeedpublishing.com",
            href: "mailto:info@goodspeedpublishing.com",
            icon: <HiOutlineEnvelope />
        },
        {
            id: 3,
            brandInfo: "276 5th Avenue New York, NY 10001",
            href: "void:;",
            icon: <GrLocation />
        }
    ]

export default function Footer() {
  return (
    <footer className="bg-mid pt-10 md:pt-15 xl:pt-20 2xl:pt-31.5">
      <div className="max-w-300 mx-auto px-4 lg:px-6">
        <ImageComp src={logoLight} width={608} height={106} className="max-w-60 md:max-w-80 lg:max-w-100 xl:max-w-130 2xl:max-w-152 w-full object-contain" alt="footer-logo" loading="eager" priority />
        <div className="flex flex-row justify-between flex-wrap gap-4 text-white mt-8 lg:mt-15">
          <div className="w-full lg:w-90 xl:w-100">
            <Text as="h5" className="text-2xl lg:text-[28px] capitalize font-bold mb-4 lg:mb-9">About Us</Text>
            <Text as="h6" className="text-base lg:text-xl capitalize font-semibold mb-4.25 lg:mb-4.25">Fueling Authors <Text as="span" className="text-primary">One Book</Text> at a Time</Text>
            <Text as="p" className="text-sm leading-6 sm:text-lg sm:leading-8">We believe every story deserves a platform and every author, a champion. Whether you’re a first-time writer or a seasoned storyteller, our mission is to guide you from concept to published success with passion, precision, and purpose.</Text>
          </div>
          <div className="w-full lg:w-50 xl:w-55">
            <Text as="h5" className="text-2xl lg:text-[28px] capitalize font-bold mb-4 lg:mb-9">Useful Links</Text>
            <Links links={navigation} className="flex flex-col gap-3.5" linkClassName="font-light font-light text-sm sm:text-lg capitalize text-(--text-grey-50)" />
          </div>
          <div className="w-full lg:w-90 xl:w-101">
            <Text as="h5" className="text-2xl lg:text-[28px] capitalize font-bold mb-4 lg:mb-9">contact info</Text>
            <Links info={contactInfo} className="flex flex-col gap-4.5"  linkClassName="flex items-center flex-wrap gap-2 lg:gap-[17px] font-light text-sm sm:text-lg" iconClassName="bg-white text-black w-8 h-8 sm:w-13 sm:h-13 flex items-center justify-center rounded-full text-lg sm:text-2xl"/>
          </div>
        </div>
      </div>
    </footer>
  )
}