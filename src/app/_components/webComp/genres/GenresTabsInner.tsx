"use client";
import { Activity } from "react";
import dynamic from "next/dynamic";
const NavTabs = dynamic(() => import("@/app/_components/ui/NavTabs"));
import type { GenreItem } from "@/app/_types";
import Text from "@/app/_components/ui/Text";
import CustomBtn from "@/app/_components/ui/CustomBtn";
import { FiArrowRight } from "react-icons/fi";
import ImageComp from "@/app/_components/ui/Image";

type Props = {
  genres: GenreItem[];
};

export default function GenresTabsInner({ genres }: Props) {
  const GenresData = genres ?? [];
  const tabs = GenresData.map(({ id, category }) => ({ id, label: category }));
  return (
    <NavTabs tabs={tabs}>
      {(activeIndex, contentRefs) => (
        <>
          {GenresData?.map(
            ({ id, title, info, thumbnail, category }, index) => (
              <Activity
                key={id}
                mode={activeIndex === index ? "visible" : "hidden"}
              >
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2"
                >
                  <div className="text-left">
                    <Text
                      as="h3"
                      className="text-mid-50 font-bold capitalize sm:text-[30px] sm:leading-9 md:mb-4.5 md:text-[36px] md:leading-10 md:tracking-[-2px] lg:mb-5 lg:text-[40px] lg:leading-12 xl:mb-7.25 xl:text-[56px] xl:leading-14.75"
                    >
                      {title}
                    </Text>
                    <Text className="text-grey-text-300 4xl:text-[22px] 4xl:leading-9! text-xs leading-5 sm:text-sm md:text-base md:leading-7 lg:leading-7 xl:text-lg 2xl:text-xl 2xl:leading-8">
                      {info}
                    </Text>
                    <div className="mt-6 flex w-full flex-1 flex-row flex-wrap justify-center gap-4 sm:justify-start md:mt-10 2xl:mt-12.75">
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
                  {thumbnail && (
                    <ImageComp
                      src={thumbnail}
                      width={670}
                      height={435}
                      sizes="(max-width: 575px) 320px, (max-width: 991px) 100vw, 670px"
                      className="reflect-below mx-auto h-auto w-full max-w-167.5 object-contain"
                      alt={`image-${category}`}
                    />
                  )}
                </div>
              </Activity>
            ),
          )}
        </>
      )}
    </NavTabs>
  );
}
