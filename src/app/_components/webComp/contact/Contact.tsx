import ContactInfo from '@/app/_components/webComp/contact/ContactInfo'
import ContactForm from '@/app/_components/webComp/contact/ContactForm';
import { contactInfo } from "@/app/_components/webComp/common/footer/contactData"

export default function Contact() {
    return (
        <section className="py-6.25 md:py-12.5">
            <div className="md:container mx-auto px-4">
                <div className="overflow-hidden bg-primary-50 bg-no-repeat bg-top-left bg-size-[491px,280px] bg-[url('/images/contact-box-elem.webp')] rounded-[30px] md:rounded-[62px] p-3.5 sm:p-5 lg:p-8 xl:p-10 2xl:p-15 flex flex-row flex-wrap items-center justify-between gap-6">
                    <div className="w-full xl:max-w-2/5 2xl:max-w-2/5 xs:pl-1 md:pl-5 xl:pl-0">
                        <ContactInfo contactInfo={contactInfo} />
                    </div>
                    <div className="w-full md:flex-1 xl:max-w-[55%] 2xl:max-w-1/2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}