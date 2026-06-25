'use client'
import dynamic from 'next/dynamic'
const Accordion = dynamic(() => import('@/app/_components/ui/CustomAccordion'))
import type {FaqItem} from '@/app/_types'

type Props = {
    faq?: FaqItem[]
}

export default function FAQAccordion({faq}: Props) {
  return  <Accordion faq={faq} />
}