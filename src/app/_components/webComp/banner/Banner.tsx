import BoxRight from '@/app/_components/webComp/banner/BoxRight'
import BoxLeft from '@/app/_components/webComp/banner/BoxLeft'

type Props = {}

export default function Banner({}: Props) {
  return (
    <section className="pb-6.25 md:pb-12.5 pt-8.25">
        <div className="md:container mx-auto px-4 ">
            <div className="flex flex-row flex-wrap items-center justify-between gap-6">
                <div className="w-full md:max-w-[49%]">
                    <BoxLeft />
                </div>
                <div className="w-full md:max-w-[49%]">
                    <BoxRight />
                </div>
            </div>
        </div>
    </section>
  )
}