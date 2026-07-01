import Text from "@/app/_components/ui/Text";
import Link from "next/link";
import ImageComp from "@/app/_components/ui/Image";
import logoDark from "@public/images/logo-dark.webp";
import type { StatusPageProps } from "@/app/_types";

export default function Status({
  heading,
  subheading,
  linkLabel = "go home",
  linkHref = "/",
}: StatusPageProps) {
  return (
    <section className="min-h-screen content-center py-6">
      <div className="mx-auto px-4 text-center md:container">
        <ImageComp
          src={logoDark}
          width={410}
          height={52}
          className="logo mx-auto mb-4 w-full max-w-60 object-contain transition duration-300 ease-in md:mb-0 xl:max-w-70 2xl:max-w-102.5"
          alt="logo"
        />
        <Text
          as="h2"
          className="text-black-text-100 4xl:text-[68px] 4xl:leading-18.75 my-6 text-center text-2xl leading-normal font-bold tracking-[-1.442px] capitalize sm:text-4xl md:text-[48px] xl:text-[54px] 2xl:text-[60px] 2xl:leading-16.75"
        >
          {heading}
        </Text>
        <Text
          as="p"
          className="text-grey-text-300 4xl:text-2xl mb-10 text-center text-xs leading-5 sm:text-sm md:text-base md:leading-7 xl:text-lg 2xl:text-[22px] 2xl:leading-8.75"
        >
          {subheading}
        </Text>
        <Link
          href={linkHref}
          className="btn-primary xs:max-w-[200px] inline-flex h-[50px] flex-row-reverse items-center justify-center gap-[11px] text-xs sm:max-w-[230px] md:max-w-[240px] xl:h-[60px] xl:max-w-[270px] xl:text-base 2xl:h-[71px] 2xl:max-w-[292px] 2xl:text-lg"
        >
          {linkLabel}
        </Link>
      </div>
    </section>
  );
}
