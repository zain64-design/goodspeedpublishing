import ContactInfo from '@/app/_components/webComp/contact/ContactInfo'
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import ContactForm from '@/app/_components/webComp/contact/ContactForm';

type Props = {}


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

export default function Contact({}: Props) {
  return (
    <>
    <div className="md:container mx-auto px-4">
        <div className="bg-primary-50 bg-no-repeat bg-top-left bg-size-[491px,280px] bg-[url('/images/contact-box-elem.webp')] rounded-[30px] md:rounded-[62px] p-4 sm:p-5 lg:p-8 xl:p-10 2xl:p-15 flex flex-row flex-wrap items-center justify-between gap-6">
            <div className="w-full xl:max-w-2/5 2xl:max-w-2/5">
                <ContactInfo contactInfo={contactInfo}/>
            </div>
            <div className="w-full md:flex-1 xl:max-w-[55%] 2xl:max-w-1/2">
                <ContactForm/>
            </div>
        </div>
    </div>
    </>
  )
}