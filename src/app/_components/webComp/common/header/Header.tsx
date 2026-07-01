import CustomBtn from "@/app/_components/ui/CustomBtn";
import ImageComp from "@/app/_components/ui/Image";
import { FiArrowRight } from "react-icons/fi";
import logoDark from "@public/images/logo-dark.webp";

export default function Header() {
  return (
    <header className="top-0 right-0 left-0 z-100 w-full md:fixed">
      <nav className="w-full bg-white py-2 md:py-4.5 2xl:py-5.75">
        <div className="mx-auto flex w-full flex-col items-center justify-between px-6 md:container md:flex-row">
          <ImageComp
            src={logoDark}
            width={410}
            height={52}
            className="logo mb-4 w-full max-w-60 object-contain transition duration-300 ease-in md:mb-0 xl:max-w-70 2xl:max-w-102.5"
            alt="logo"
          />
          <div className="flex w-full flex-1 flex-row flex-wrap justify-center gap-4 md:justify-end">
            <CustomBtn
              label="book free consultation"
              buttonClass="btn-primary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[240px] xl:max-w-[270px] 2xl:max-w-[292px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg"
              icon={
                <FiArrowRight className="text-sm xl:text-base 2xl:text-xl" />
              }
            />
            <CustomBtn
              label="Chat For 35% OFF"
              buttonClass="btn-secondary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[232px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
