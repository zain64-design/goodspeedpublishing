import {brandData} from "@/app/_components/webComp/brands/BrandData"
import BrandSlider from '@/app/_components/webComp/brands/BrandSlider'

export default function Brands() {
  return (
    <section className="w-full mx-auto py-4 lg:py-12.5">
        <BrandSlider brand={brandData}/>
    </section>
  )
}