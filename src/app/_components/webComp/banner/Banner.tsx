import BoxRight from '@/app/_components/webComp/banner/BoxRight'
import BoxLeft from '@/app/_components/webComp/banner/BoxLeft'

type Props = {}

export default function Banner({}: Props) {
  return (
    <section className="pb-6.25 md:pb-12.5 pt-8.25">
        <div className="md:container mx-auto px-4 ">
            <div className="grid gap-6.75 grid-cols-1 sm:grid-cols-2">
                <BoxLeft />
                <BoxRight />
            </div>
        </div>
    </section>
  )
}