'use client'
import dynamic from 'next/dynamic'
const BrandSliderInner = dynamic(() => import('@/app/_components/webComp/brands/BrandSliderInner'),{ ssr: false })
import {brandData} from "@/app/_components/webComp/brands/BrandData"

export default function BrandLogo() {
    return <BrandSliderInner brand={brandData}/>
}