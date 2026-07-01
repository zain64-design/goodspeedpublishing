import ContactForm from "@/app/_components/webComp/contact/ContactForm";
import ContactInfo from "@/app/_components/webComp/contact/ContactInfo";
import { contactInfo } from "@/app/_components/webComp/common/footer/contactData";

export default function Contact() {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="mx-auto px-4 md:container">
        <div className="bg-primary-50 4xl:bg-size-[491px_280px] flex flex-row flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[30px] bg-[url('/images/contact-box-elem.webp')] bg-[size:160px_91px] bg-top-left bg-no-repeat p-3.5 sm:bg-size-[160px_91px] sm:p-5 md:rounded-[62px] md:bg-size-[220px_125px] lg:bg-size-[280px_160px] lg:p-8 xl:bg-size-[320px_182px] xl:p-10 2xl:bg-size-[380px_217px] 2xl:p-15">
          <div className="xs:pl-1 w-full md:pl-5 xl:max-w-2/5 xl:pl-0 2xl:max-w-2/5">
            <ContactInfo contactInfo={contactInfo} />
          </div>
          <div className="w-full md:flex-1 xl:max-w-[55%] 2xl:max-w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
