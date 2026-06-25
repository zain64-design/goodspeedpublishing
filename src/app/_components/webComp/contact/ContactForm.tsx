'use client'
import dynamic from 'next/dynamic'
const ContactFormInner = dynamic(() => import('@/app/_components/webComp/contact/ContactFormInner'),{ ssr: false })

export default function ContactForm() {
  return <ContactFormInner />
}