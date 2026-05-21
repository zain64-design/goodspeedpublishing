import React from 'react'
import FaqDesc from '@/app/_components/webComp/faq/FaqDesc'
import FaqAccordion from './FaqAccordion'

type Props = {}

export default function FAQ({}: Props) {
  return (
    <>
        <div className="md:container mx-auto px-4">
            <div className="flex flex-row flex-wrap items-center justify-between gap-6">
                <div className="w-full xl:max-w-2/5 2xl:max-w-2/5">
                <FaqDesc/>
                </div>
                <div className="w-full md:flex-1 xl:max-w-[55%] 2xl:max-w-1/2">
                <FaqAccordion/>
                </div>
            </div>
        </div>
    </>
  )
}