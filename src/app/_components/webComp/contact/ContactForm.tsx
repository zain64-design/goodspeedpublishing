import dynamic from "next/dynamic";
const ContactFormInner = dynamic(
  () => import("@/app/_components/webComp/contact/ContactFormInner"),
);

export default function ContactForm() {
  return <ContactFormInner />;
}
