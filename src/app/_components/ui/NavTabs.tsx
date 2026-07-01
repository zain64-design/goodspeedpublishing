"use client";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { gsap, useGSAP } from "@/app/_libs/gsap";
import type { Tab } from "@/app/_types";

type Props = {
  tabs: Tab[];
  children: (
    activeIndex: number,
    contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  ) => React.ReactNode;
};

export default function NavTabs({ tabs, children }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scroll = (direction: "left" | "right") => {
    const nav = navRef.current;
    if (!nav) return;
    nav.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };
  useGSAP(() => {
    const activeEl = contentRefs.current[activeIndex];
    if (!activeEl) return;

    gsap.set(activeEl, { opacity: 0 });
    gsap.to(activeEl, { opacity: 1, duration: 0.5, ease: "power1.out" });
  }, [activeIndex]);

  return (
    <>
      <div className="relative">
        <button
          aria-label="Previous slide"
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-1 z-10 h-full w-4 -translate-y-1/2 bg-white md:hidden"
        >
          <FaChevronLeft />
        </button>
        <div
          ref={navRef}
          className="overscroll-[contain_auto] mx-auto mb-8 w-full overflow-x-auto overflow-y-hidden scroll-smooth px-6 md:mb-10 md:overflow-x-visible md:overflow-y-visible md:px-0 lg:mb-14 xl:mb-16 2xl:mb-18.75 2xl:max-w-[1400px] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex w-max flex-wrap justify-center gap-2 md:w-auto md:gap-4">
            {tabs?.map(({ id, label }, index) => (
              <button
                key={id}
                onClick={() => setActiveIndex(index)}
                className={[
                  "4xl:h-[52px] h-[35px] px-3 py-1 sm:h-[40px] sm:px-4 sm:py-1.5 md:h-[46px] md:px-5 md:py-2 2xl:h-[48px] 2xl:px-6 2xl:py-2.5",
                  "border-grey-border-200 shrink-0 rounded-full border",
                  "4xl:text-xl text-grey-text-200 text-xs font-medium capitalize sm:text-sm md:text-base 2xl:text-lg",
                  "cursor-pointer leading-none transition-all duration-300 ease-in-out",
                  "hover:text-mid-50 hover:bg-primary hover:border-primary",
                  activeIndex === index
                    ? "text-mid-50 bg-primary border-primary font-semibold"
                    : "",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <button
          aria-label="Next slide"
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-1 z-10 h-full w-4 -translate-y-1/2 bg-white md:hidden"
        >
          <FaChevronRight />
        </button>
      </div>

      {children(activeIndex, contentRefs)}
    </>
  );
}
