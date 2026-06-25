'use client'
import dynamic from 'next/dynamic'
import { BrandLogoData } from '@/app/_types'
const BrandSliderInner = dynamic(() => import('@/app/_components/webComp/brands/BrandSliderInner'),{ ssr: false })

type Props = {
    brand: BrandLogoData[]
}

export default function BrandLogo({ brand }: Props) {
    return <BrandSliderInner brand={brand}/>
}