import StatsBoxes from "./StatsBoxes"
import StatsInfo from "./StatsInfo"


type Props = {}

export default function Stats({}: Props) {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="md:container mx-auto px-4">
        <div className="overflow-hidden bg-mid bg-no-repeat bg-[position:top_156px_left,right_bottom] bg-[size:41px_126px,280px_63px] sm:bg-[size:51px_157px,280px_63px] md:bg-[size:61px_188px,340px_77px] lg:bg-[size:68px_210px,440px_99px] xl:bg-[size:74px_219px,520px_117px] 2xl:bg-[size:74px_219px,640px_145px] bg-[url('/images/stats-elem-one.webp'),url('/images/stats-elem-two.webp')] rounded-[30px] md:rounded-[56px] lg:rounded-[62px] py-6 px-3.5 sm:py-8 sm:px-5 lg:py-12 lg:px-8 xl:py-14 xl:px-10 2xl:py-16.75 2xl:px-13 4xl:py-16.75 4xl:px-30.75 flex flex-wrap flex-row items-center justify-between gap-6">
            <div className="w-full xl:max-w-[47%] 2xl:max-w-[46%] 4xl:max-w-[47%] 6xl:max-w-[45%] pl-0 sm:pl-2 md:pl-5 xl:pl-0 text-center sm:text-left">
              <StatsInfo />
            </div>
            <div className="w-full xl:max-w-[49%] 2xl:max-w-[49%] 4xl:max-w-[49%] 6xl:max-w-[45%]">
              <StatsBoxes/>
            </div>
        </div>
      </div>
    </section>
  )
}