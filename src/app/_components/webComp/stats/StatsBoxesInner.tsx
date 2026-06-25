'use client'
import type { StatsItem } from "@/app/_types";
import { IoStarSharp } from "react-icons/io5";
import Text from '@/app/_components/ui/Text'
import CountUp from '@/app/_components/ui/CountUp';
type Props = {
  stats: StatsItem[]
}

export default function StatsBoxesInner({stats}: Props) {
    const data = stats ?? []
  return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {data?.map(({id,value,label,icon}, index) => (
        <div key={id} className="bg-mid-100 rounded-2xl md:rounded-[18px] xl:rounded-[23px] p-6 4xl:p-7.5 flex flex-col items-center justify-center border border-grey-border-50 text-center">
          <Text as="h4" className={['text-primary-50 text-2xl xl:text-[28px] 2xl:text-[34px] 4xl:text-[38px] 6xl:text-[43px] font-black mb-1.25',icon ? 'flex items-center':''].join(' ')}>{icon && <Text as="span">{icon && <IoStarSharp />}</Text>}<CountUp value={value} delay={index * 0.12} /></Text>
          <Text as="p" className="text-grey-text-500 text-xs 2xl:text-sm font-normal tracking-[1.4px] uppercase">{label}</Text>
        </div>
      ))}
    </div>
  )
}