"use client";
import { useRef, useMemo } from "react";
import { gsap, useGSAP } from "@/app/_libs/gsap";
import type { CountUpProps } from "@/app/_types";

export default function CountUp({
  value,
  duration = 1.5,
  scrollStart = "top 85%",
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const { prefix, suffix, targetNumber, isDecimal, decimals } = useMemo(() => {
    const match = value.match(/^([^\d.]*)([\d.]+)(.*)$/);
    const prefix = match?.[1] ?? "";
    const numericPart = match?.[2] ?? "0";
    const suffix = match?.[3] ?? "";
    const isDecimal = numericPart.includes(".");
    const decimals = isDecimal ? numericPart.split(".")[1].length : 0;
    const targetNumber = parseFloat(numericPart);
    return { prefix, suffix, targetNumber, isDecimal, decimals };
  }, [value]);

  useGSAP(
    () => {
      if (!ref.current) return;

      const obj = { val: 0 };

      gsap.to(obj, {
        val: targetNumber,
        duration,
        delay,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ref.current,
          start: scrollStart,
          once: true,
          refreshPriority: -1,
        },
        onUpdate: () => {
          if (!ref.current) return;
          const formatted = isDecimal
            ? obj.val.toFixed(decimals)
            : Math.floor(obj.val).toString();
          ref.current.textContent = `${prefix}${formatted}${suffix}`;
        },
      });

      return () => gsap.killTweensOf(obj);
    },
    { scope: ref, dependencies: [value, delay] },
  );

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
