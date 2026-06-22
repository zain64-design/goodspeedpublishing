'use client'
import { twMerge } from "tailwind-merge"
import { useRef, type JSX } from "react"
import { gsap, useGSAP, SplitText } from "@/app/_libs/gsap"

type TextProps<T extends keyof JSX.IntrinsicElements = "p"> = {
  as?: T
  className?: string
  children: React.ReactNode,
  animate?: boolean
  trigger?: "load" | "scroll"
  scrollStart?: string
  delay?: number
  stagger?: number
  duration?: number
  ariaLabel?: string
} & Omit<JSX.IntrinsicElements[T], "children" | "className">

const Text = <T extends keyof JSX.IntrinsicElements = "p">({
  as: Tag = "p" as T,
  className = "",
  children,
  animate = false,
  trigger = "scroll",
  scrollStart = "top 85%",
  delay = 0,
  stagger = 0.08,
  duration = 0.7,
  ariaLabel,
  ...props
}: TextProps<T>) => {
  const Component = Tag as React.ElementType
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!animate || !ref.current) return

    const mm = gsap.matchMedia()

    mm.add("(min-width: 1200px)", () => {
      const split = new SplitText(ref.current, {
        type: "words",
        wordsClass: "split-word",
        reduceWhiteSpace: false,
      })

      gsap.set(split.words, {
        opacity: 0,
        y: 30,
      })

      const animationConfig = {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power2.out",
      }

      if (trigger === "load") {
        gsap.to(split.words, animationConfig)
      } else {
        gsap.to(split.words, {
          ...animationConfig,
          scrollTrigger: {
            trigger: ref.current,
            start: scrollStart,
            once: true,
          },
        })
      }

      return () => {
        split.revert()
      }
    })

    return () => mm.revert()
  }, { scope: ref, dependencies: [children, animate] })

  return (
    <>
       {ariaLabel && (
      <span className="sr-only">{ariaLabel}</span>
    )}
        <Component
      {...props}
      ref={animate ? ref : undefined}
      className={twMerge(className, animate && "split-target")}
      aria-hidden={ariaLabel ? true : undefined}
    >
      {children}
    </Component>
    </>
  )
}

export default Text