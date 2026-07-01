import ImageComp from "@/app/_components/ui/Image";
import { getImageProps } from "next/image";
import LeftBoxBook from "@public/images/br-books.webp";
import LeftBoxElem from "@public/images/left-box-elem.webp";
import Text from "@/app/_components/ui/Text";
import CustomBtn from "@/app/_components/ui/CustomBtn";
import { getBackgroundImage } from "@/app/_utils/getBackgroundImage";

type Props = {};

export default function BoxLeft({}: Props) {
  const {
    props: { srcSet: srcSet1 },
  } = getImageProps({
    alt: "",
    width: 345,
    height: 381,
    src: LeftBoxElem,
    quality: 50,
  });
  return (
    <div
      className="banner-box bg-primary 4xl:py-8 4xl:px-13 6xl:py-9.75 6xl:px-15 4xl:bg-size-[345px_381px] overflow-hidden rounded-[30px] bg-size-[140px_155px] bg-bottom-right bg-no-repeat px-6 py-4 md:bg-size-[160px_177px] md:px-6 md:py-4 lg:rounded-[48px] lg:px-9 lg:py-5 2xl:bg-size-[290px_320px] 2xl:px-11 2xl:py-6"
      style={{
        backgroundImage: `${getBackgroundImage(srcSet1)}`,
      }}
    >
      <Text
        as="h1"
        className="text-mid 4xl:text-[76px] 4xl:leading-19.5 4xl:mb-8.25 6xl:text-[96px] 6xl:leading-24.5 mb-3 text-2xl leading-6.5 font-extrabold tracking-[-1.639px] sm:text-3xl sm:leading-8 md:text-[40px] md:leading-10.5 lg:mb-5 xl:mb-7 xl:text-[56px] xl:leading-14.5 2xl:mb-7.25 2xl:text-[66px] 2xl:leading-17"
      >
        Your Book Deserves to Be Read
      </Text>
      <div className="4xl:w-[calc(100%-35%)] w-full sm:w-[calc(100%-20%)] xl:w-[calc(100%-20%)] 2xl:w-[calc(100%-30%)]">
        <div className="mb-4 flex flex-row flex-wrap items-center gap-2 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-13.25 2xl:gap-4">
          <ImageComp
            src={LeftBoxBook}
            width={216}
            height={77}
            quality={25}
            preload
            sizes="(max-width: 767px) 120px, (max-width: 1199px) 140px, (max-width: 1399px) 200px, 216px"
            className="block max-w-30 object-contain md:max-w-35 xl:max-w-50 2xl:max-w-54"
            alt="element-books"
          />
          <Text
            as="p"
            className="text-mid 4xl:text-[40px] flex max-w-42.5 flex-row items-baseline-last gap-2.5 text-left text-xl font-extrabold capitalize lg:text-2xl xl:text-4xl"
          >
            2k+
            <Text
              as="span"
              className="4xl:text-lg 4xl:leading-5.5! text-trim text-sm leading-normal! font-medium lg:text-sm xl:text-base xl:leading-5!"
            >
              published books
            </Text>
          </Text>
        </div>
        <Text
          as="span"
          className="text-mid 4xl:text-2xl 4xl:leading-7.5 mb-4 block text-xs leading-5 font-semibold text-balance sm:mb-6 sm:text-sm md:mb-0 lg:text-base xl:text-lg 2xl:text-[22px] 2xl:leading-7"
        >
          Get Your Free, Personalized Publishing Plan.
        </Text>
        <CustomBtn
          label="claim my plan"
          buttonClass="btn-mid uppercase rounded-2xl 2xl:rounded-[24px] inline-flex items-center !mt-4 md:!mt-5 xl:!mt-[31px] h-[50px] max-w-[220px] xl:h-[60px] xl:max-w-[250px] 2xl:h-[80px] 2xl:max-w-[320px] 4xl:h-[90px] 4xl:max-w-[347px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-[20px] 4xl:text-[23px]"
        />
      </div>
    </div>
  );
}
