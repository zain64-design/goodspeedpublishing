'use client'
import dynamic from 'next/dynamic'
import type { IllustrationBookData } from '@/app/_types'
const IllustrationSliderInner = dynamic(() => import('@/app/_components/webComp/illustration/IllustrationSliderInner'),{ ssr: false })

type Props = {
  illustration: IllustrationBookData[]
}

export default function IllustrationSlider({illustration}: Props) {
    return <IllustrationSliderInner illustration={illustration}/>
}