'use client'
import dynamic from 'next/dynamic'
import type { PortfolioBookData } from '@/app/_types'
const PortfolioSliderInner = dynamic(() => import('@/app/_components/webComp/portfolio/PortfolioSliderInner'),{ ssr: false })

type Props = {
    portfolio: PortfolioBookData[]
}

export default function PortfolioSlider({portfolio}: Props) {
    return <PortfolioSliderInner portfolio={portfolio} />
}