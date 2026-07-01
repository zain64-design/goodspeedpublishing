import { getImageProps } from "next/image";
import RightBoxThumb from "@public/images/right-box-thumb.webp";
import BrEl1 from "@public/images/br-el-1.webp";
import BrEl2 from "@public/images/br-el-2.webp";
import BrEl3 from "@public/images/br-el-3.webp";
import { getBackgroundImage } from "@/app/_utils/getBackgroundImage";
import ImageComp from "@/app/_components/ui/Image";

type Props = {};

export default function BoxRight({}: Props) {
  const {
    props: { srcSet: srcSet1 },
  } = getImageProps({ alt: "", width: 472, height: 269, src: BrEl1 });
  const {
    props: { srcSet: srcSet2 },
  } = getImageProps({ alt: "", width: 172, height: 160, src: BrEl2 });
  const {
    props: { srcSet: srcSet3 },
  } = getImageProps({ alt: "", width: 774, height: 201, src: BrEl3 });
  return (
    <div
      className="banner-box bg-secondary-lt 4xl:bg-[size:472px_269px,172px_160px,774px_201px] content-end overflow-hidden rounded-[30px] bg-[size:160px_91px,60px_56px,280px_73px] bg-[position:top_left,top_right,left_bottom] bg-no-repeat sm:bg-[size:160px_91px,60px_56px,280px_73px] md:bg-[size:220px_125px,60px_56px,340px_88px] lg:rounded-[48px] lg:bg-[size:280px_160px,80px_74px,440px_114px] xl:bg-[size:320px_182px,120px_112px,520px_135px] 2xl:bg-[size:380px_217px,140px_130px,640px_166px]"
      style={{
        backgroundImage: `${getBackgroundImage(srcSet1)}, ${getBackgroundImage(srcSet2)}, ${getBackgroundImage(srcSet3)}`,
      }}
    >
      <ImageComp
        src={RightBoxThumb}
        width={488}
        height={720}
        quality={75}
        sizes="(max-width: 575px) 124px, (max-width: 767px) 45vw, (max-width: 1399px) 326px, 500px"
        alt="hero"
        fetchPriority="high"
        loading="eager"
        className="max-w-auto 4xl:max-h-180 mx-auto block max-h-80 object-contain sm:max-h-85 sm:max-w-full md:max-h-100 lg:max-h-100 xl:max-h-120 xl:scale-[1.05] 2xl:max-h-160"
      />
    </div>
  );
}
