import BoxRight from "@/app/_components/webComp/banner/BoxRight";
import BoxLeft from "@/app/_components/webComp/banner/BoxLeft";

export default function Banner() {
  return (
    <section className="pt-8.25 pb-6.25 md:pb-12.5">
      <div className="mx-auto px-4 md:container">
        <div className="grid grid-cols-1 gap-6.75 sm:grid-cols-2">
          <BoxLeft />
          <BoxRight />
        </div>
      </div>
    </section>
  );
}
