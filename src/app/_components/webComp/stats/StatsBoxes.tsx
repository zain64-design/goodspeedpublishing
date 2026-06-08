import React from 'react'
import Text from '@/app/_components/ui/Text'

type Props = {}

export default function StatsBoxes({}: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {Array.from({length: 6}).map((_, index) => (
        <div key={index} className="bg-mid-100 rounded-2xl md:rounded-[18px] xl:rounded-[23px] p-6 4xl:p-7.5 flex flex-col items-center justify-center border border-grey-border-50">
          <Text as="h6" className="text-primary-50 text-2xl xl:text-[28px] 2xl:text-[34px] 4xl:text-[38px] 6xl:text-[43px] font-black mb-1.25">100K+</Text>
          <Text as="p" className="text-grey-text-500 text-xs 2xl:text-sm font-normal tracking-[1.4px] uppercase">Bestsellers</Text>
        </div>
      ))}
    </div>
  )
}