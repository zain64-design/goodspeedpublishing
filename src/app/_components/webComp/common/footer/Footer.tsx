import ImageComp from "@/app/_components/ui/Image";
import Text from "@/app/_components/ui/Text";
import logoLight from "@public/images/logo-light.webp";
import logoFooter from "@public/images/logo-footer.webp";
import Links from "./Links";
import { navigation } from "@/app/_components/webComp/common/footer/navigationData";
import { contactInfo } from "@/app/_components/webComp/common/footer/contactData";

export default function Footer() {
  return (
    <footer className="bg-mid mt-10 pt-10 md:mt-17.5 md:pt-15 xl:pt-20 2xl:pt-31.5">
      <div className="mx-auto max-w-300 px-4 lg:px-6">
        <ImageComp
          src={logoLight}
          width={608}
          height={77}
          className="w-full max-w-60 object-contain md:max-w-80 lg:max-w-100 xl:max-w-130 2xl:max-w-152"
          alt="footer-logo"
        />
        <div className="mt-8 mb-8 flex flex-row flex-wrap justify-between gap-2 text-white lg:mt-15 lg:mb-25">
          <div className="w-full lg:w-90 xl:w-105.5">
            <Text
              as="h5"
              className="mb-4 text-2xl font-bold capitalize md:text-[24px] lg:mb-9 xl:text-[28px]"
            >
              About Us
            </Text>
            <Text
              as="h6"
              className="mb-4.25 text-base font-semibold capitalize md:text-lg lg:mb-4.25 xl:text-xl"
            >
              Fueling Authors{" "}
              <Text as="span" className="text-primary">
                One Book
              </Text>{" "}
              at a Time
            </Text>
            <Text
              as="p"
              className="text-sm leading-6 sm:leading-8 md:text-base xl:text-lg"
            >
              We believe every story deserves a platform and every author, a
              champion. Whether you’re a first-time writer or a seasoned
              storyteller, our mission is to guide you from concept to published
              success with passion, precision, and purpose.
            </Text>
          </div>
          <hr className="bg-grey-50 text-grey-bg-50 hidden h-77.5 w-px self-center lg:block"></hr>
          <div className="w-full lg:w-44 xl:w-43">
            <Text
              as="h5"
              className="mb-4 text-2xl font-bold capitalize md:text-[24px] lg:mb-9 xl:text-[28px]"
            >
              Useful Links
            </Text>
            <Links
              links={navigation}
              className="flex flex-col gap-3.5"
              linkClassName="font-normal text-sm md:text-base xl:text-lg capitalize text-(--text-grey-50) bs-transition hover:text-primary"
            />
          </div>
          <div className="w-full lg:w-90 xl:w-95">
            <Text
              as="h5"
              className="mb-4 text-2xl font-bold capitalize md:text-[24px] lg:mb-9 xl:text-[28px]"
            >
              contact info
            </Text>
            <Links
              info={contactInfo}
              className="flex flex-col gap-4.5"
              itemClassName="group"
              linkClassName="flex items-center flex-wrap gap-2 lg:gap-[17px] font-normal text-sm md:text-base xl:text-lg bs-transition group-hover:text-primary"
              iconClassName="bg-white text-black w-8 h-8 xl:w-13 xl:h-13 flex items-center justify-center rounded-full text-lg xl:text-2xl bs-transition group-hover:bg-secondary group-hover:text-white"
            />
          </div>
        </div>
        <Text
          as="p"
          className="text-grey-text-100 text-center text-sm capitalize md:text-base"
        >
          © 2026 Goodspeed Publishing. All Rights Reserved
        </Text>
      </div>
      <div className="bg-primary mx-auto mt-8 max-w-445 rounded-tl-full rounded-tr-full px-12 py-4 sm:px-20 md:px-24 md:py-6 md:py-8 lg:mt-15 lg:px-26 lg:py-10">
        <ImageComp
          src={logoFooter}
          width={800}
          height={100}
          alt="footer-logo"
          className="m-w-full mx-auto object-contain"
        />
      </div>
    </footer>
  );
}
