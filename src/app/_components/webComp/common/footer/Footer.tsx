import ImageComp from "@/app/_components/ui/Image"
import Text from "@/app/_components/ui/Text"
import logoLight from "@public/images/logo-light.webp"
import logoFooter from "@public/images/logo-footer.webp"
import Links from "./Links"
import { navigation } from "@/app/_components/webComp/common/footer/navigationData"
import { contactInfo } from "@/app/_components/webComp/common/footer/contactData"

export default function Footer() {
  return (
    <footer className="bg-mid mt-10 md:mt-30 pt-10 md:pt-15 xl:pt-20 2xl:pt-31.5">
      <div className="max-w-300 mx-auto px-4 lg:px-6">
        <ImageComp src={logoLight} width={608} height={77} className="max-w-60 md:max-w-80 lg:max-w-100 xl:max-w-130 2xl:max-w-152 w-full object-contain" alt="footer-logo"/>
        <div className="flex flex-row flex-wrap justify-between gap-2 text-white mt-8 mb-8 lg:mb-25 lg:mt-15">
          <div className="w-full lg:w-90 xl:w-105.5">
            <Text as="h5" className="text-2xl md:text-[24px] xl:text-[28px] capitalize font-bold mb-4 lg:mb-9">About Us</Text>
            <Text as="h6" className="text-base md:text-lg xl:text-xl capitalize font-semibold mb-4.25 lg:mb-4.25">Fueling Authors <Text as="span" className="text-primary">One Book</Text> at a Time</Text>
            <Text as="p" className="text-sm leading-6 md:text-base xl:text-lg sm:leading-8">We believe every story deserves a platform and every author, a champion. Whether you’re a first-time writer or a seasoned storyteller, our mission is to guide you from concept to published success with passion, precision, and purpose.</Text>
          </div>
          <hr className="h-77.5 w-px bg-grey-50 self-center text-grey-bg-50 hidden lg:block"></hr>
          <div className="w-full lg:w-44 xl:w-43">
            <Text as="h5" className="text-2xl md:text-[24px] xl:text-[28px] capitalize font-bold mb-4 lg:mb-9">Useful Links</Text>
            <Links links={navigation} className="flex flex-col gap-3.5" linkClassName="font-light font-light text-sm md:text-base xl:text-lg capitalize text-(--text-grey-50) bs-transition hover:text-primary" />
          </div>
          <div className="w-full lg:w-90 xl:w-95">
            <Text as="h5" className="text-2xl md:text-[24px] xl:text-[28px] capitalize font-bold mb-4 lg:mb-9">contact info</Text>
            <Links info={contactInfo} className="flex flex-col gap-4.5" itemClassName="group"  linkClassName="flex items-center flex-wrap gap-2 lg:gap-[17px] font-light text-sm md:text-base xl:text-lg bs-transition group-hover:text-primary" iconClassName="bg-white text-black w-8 h-8 xl:w-13 xl:h-13 flex items-center justify-center rounded-full text-lg xl:text-2xl bs-transition group-hover:bg-secondary group-hover:text-white"/>
          </div>
        </div>
        <Text as='p' className="text-center text-sm md:text-base text-grey-text-100 capitalize">© 2026 Goodspeed Publishing. All Rights Reserved</Text>
      </div>
      <div className="max-w-445 mx-auto bg-primary rounded-tl-full rounded-tr-full py-4 px-12 md:py-6 sm:px-20 md:py-8 md:px-24 lg:py-10 lg:px-26 mt-8 lg:mt-15">
        <ImageComp src={logoFooter} width={800} height={100} alt="footer-logo" className="mx-auto m-w-full object-contain"/>
      </div>
    </footer>
  )
}