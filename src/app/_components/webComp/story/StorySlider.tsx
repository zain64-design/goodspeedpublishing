'use client'
import dynamic from 'next/dynamic'
import type { StoryBookData } from '@/app/_types'
const StorySliderInner = dynamic(() => import('@/app/_components/webComp/story/StorySliderInner'),{ ssr: false })

type Props = {
  story: StoryBookData[]
}

export default function StorySlider({story}: Props) {
  return <StorySliderInner story={story} />
}