import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ImageComp from "@/app/_components/ui/Image";
import { BrandLogoData } from "@/app/_types";

type Props = {
  brand: BrandLogoData[];
};

export default function BrandSliderInner({ brand }: Props) {
  const data = brand ?? [];
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={8.3}
      spaceBetween={24}
      breakpoints={{
        0: {
          slidesPerView: 2.8,
        },
        420: {
          slidesPerView: 3.8,
        },
        576: {
          slidesPerView: 3.6,
        },
        768: {
          slidesPerView: 3.8,
        },
        992: {
          slidesPerView: 4.6,
        },
        1200: {
          slidesPerView: 5.3,
        },
        1400: {
          slidesPerView: 6.3,
        },
        1600: {
          slidesPerView: 7.3,
        },
        1820: {
          slidesPerView: 8.3,
        },
      }}
      centeredSlides={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={3500}
      loop
      allowTouchMove={false}
      className="overflow-hidden mask-[linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
    >
      {data?.map(({ id, name, src }) => (
        <SwiperSlide
          key={id}
          className="flex! items-center justify-center rounded-xl bg-white px-6 py-4 sm:rounded-2xl sm:px-4 sm:py-8 md:rounded-3xl md:px-6 md:py-11"
        >
          <ImageComp
            src={src}
            width={192}
            height={40}
            alt={name}
            className="h-6 w-auto max-w-20 object-contain sm:h-8 sm:max-w-30 lg:h-9 lg:max-w-48"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
