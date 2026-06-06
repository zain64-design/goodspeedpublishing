import StatsBoxes from "./StatsBoxes"
import StatsInfo from "./StatsInfo"


type Props = {}

export default function Stats({}: Props) {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="md:container mx-auto overflow-hidden bg-mid bg-no-repeat bg-[position:top_left,right_80px_bottom] bg-[size:160px_91px,280px_73px] sm:bg-[size:160px_91px,280px_73px] md:bg-[size:220px_125px,340px_88px] lg:bg-[size:280px_160px,440px_114px] xl:bg-[size:320px_182px,520px_135px] 2xl:bg-[size:380px_217px,640px_166px] 4xl:bg-[size:491px_280px,735px_189px] bg-[url('/images/stats-elem-one.webp'),url('/images/stats-elem-two.webp')] rounded-[30px] md:rounded-[62px] py-16.75 px-3.5 sm:py-16.75 sm:px-5 lg:py-16.75 lg:px-8 xl:py-16.75 xl:px-10 2xl:py-16.75 2xl:px-13 4xl:py-16.75 4xl:px-30.75">
        <div className="flex flex-wrap flex-row items-center justify-between gap-36">
            <div className="w-full md:w-[45%]">
              <StatsInfo />
            </div>
            <div className="w-full md:w-[45%]">
              <StatsBoxes/>
            </div>
        </div>
      </div>
    </section>
  )
}