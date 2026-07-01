"use client";
import { twMerge } from "tailwind-merge";
import { useRef, type JSX } from "react";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/app/_libs/gsap";

type TextProps<T extends keyof JSX.IntrinsicElements = "p"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  trigger?: "load" | "scroll";
  scrollStart?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
} & Omit<JSX.IntrinsicElements[T], "children" | "className">;

const Text = <T extends keyof JSX.IntrinsicElements = "p">({
  as: Tag = "p" as T,
  className = "",
  children,
  animate = false,
  trigger = "scroll",
  scrollStart = "top 100%",
  delay = 0.4,
  stagger = 0.05,
  duration = 0.5,
  ...props
}: TextProps<T>) => {
  const Component = Tag as React.ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!animate || !ref.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1200px)", () => {
        let split: SplitText | undefined;

        const createSplitAndAnimate = () => {
          if (!ref.current || split) return;

          split = new SplitText(ref.current, {
            type: "words",
            wordsClass: "split-word",
            reduceWhiteSpace: false,
            aria: "none",
          });

          gsap.set(split.words, { opacity: 0, y: 30 });

          gsap.to(split.words, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: "power2.out",
          });
        };

        if (trigger === "load") {
          requestAnimationFrame(createSplitAndAnimate);
        } else {
          ScrollTrigger.create({
            trigger: ref.current,
            start: scrollStart,
            once: true,
            refreshPriority: -1,
            onEnter: createSplitAndAnimate, // ← SplitText is create once come in scroll view
          });
        }

        return () => split?.revert();
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [children, animate] },
  );

  return (
    <Component
      {...props}
      ref={animate ? ref : undefined}
      className={twMerge(className, animate && "split-target")}
    >
      {children}
    </Component>
  );
};

export default Text;
