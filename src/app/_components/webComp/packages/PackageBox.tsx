import dynamic from 'next/dynamic'
const PackagesInner = dynamic(() => import('@/app/_components/webComp/packages/PackagesInner'))
import { packagesData } from "@/app/_components/webComp/packages/packagesData"

export default function PackageBox() {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-6 4xl:gap-x-9.25'>
      <PackagesInner packages={packagesData}/>
    </div>
  )
}