import CustomBtn from "@/app/_components/ui/CustomBtn"
import ImageComp from "@/app/_components/ui/Image";
import { FiArrowRight } from "react-icons/fi";
import logoDark from "@public/images/logo-dark.webp"
import { ArrowRight } from "@/app/_components/ui/Icons";

export default function Header() {
  return (
    <header className="w-full md:fixed top-0 left-0 right-0 z-100">
      <nav className="bg-white w-full py-2 md:py-4.5 2xl:py-5.75">
        <div className="md:container mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full">
          <ImageComp src={logoDark} width={410} height={52} className="logo transition duration-300 ease-in max-w-60 xl:max-w-70 2xl:max-w-102.5 w-full object-contain mb-4 md:mb-0" alt="logo"/>
        <div className="flex flex-row justify-center md:justify-end flex-wrap gap-4 flex-1 w-full">
          <CustomBtn label="book free consultation" buttonClass="btn-primary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[220px] md:max-w-[230px] xl:max-w-[270px] 2xl:max-w-[292px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg" icon={<ArrowRight className="h-4 w-4 xl:h-4 xl:h-4 2xl:h-6 2xl:w-6"/>}/>
          <CustomBtn label="Chat For 35% OFF" buttonClass="btn-secondary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[232px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg"/>
        </div>
        </div>
      </nav>
    </header>
  )
}
