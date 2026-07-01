import StatsBoxes from "@/app/_components/webComp/stats/StatsBoxes";
import StatsInfo from "@/app/_components/webComp/stats/StatsInfo";

export default function Stats() {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="mx-auto px-4 md:container">
        <div className="bg-mid 4xl:py-16.75 4xl:px-30.75 flex flex-row flex-wrap items-center justify-between gap-6 overflow-hidden rounded-[30px] bg-[url('/images/stats-elem-one.webp'),url('/images/stats-elem-two.webp')] bg-[size:41px_126px,280px_63px] bg-[position:top_156px_left,right_bottom] bg-no-repeat px-3.5 py-6 sm:bg-[size:51px_157px,280px_63px] sm:px-5 sm:py-8 md:rounded-[56px] md:bg-[size:61px_188px,340px_77px] lg:rounded-[62px] lg:bg-[size:68px_210px,440px_99px] lg:px-8 lg:py-12 xl:bg-[size:74px_219px,520px_117px] xl:px-10 xl:py-14 2xl:bg-[size:74px_219px,640px_145px] 2xl:px-13 2xl:py-16.75">
          <div className="4xl:max-w-[47%] 6xl:max-w-[45%] w-full pl-0 text-center sm:pl-2 sm:text-left md:pl-5 xl:max-w-[47%] xl:pl-0 2xl:max-w-[46%]">
            <StatsInfo />
          </div>
          <div className="4xl:max-w-[49%] 6xl:max-w-[45%] w-full xl:max-w-[49%] 2xl:max-w-[49%]">
            <StatsBoxes />
          </div>
        </div>
      </div>
    </section>
  );
}
