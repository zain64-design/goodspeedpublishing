'use client'
import dynamic from 'next/dynamic'
import type { StatsItem } from "@/app/_types";
const StatsBoxesInner = dynamic(() => import('@/app/_components/webComp/stats/StatsBoxesInner'),{ ssr: false })
type Props = {
  stats: StatsItem[]
}

export default function StatsBoxes({stats}: Props) {
  return <StatsBoxesInner stats={stats}/>
}