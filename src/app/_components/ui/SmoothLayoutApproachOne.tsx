"use client";
import { useRef } from "react";
import { ScrollSmoother, useGSAP, ScrollTrigger } from "@/app/_libs/gsap";

export default function SmoothLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current || !contentRef.current) return;

      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1,
        effects: true,
      });

      return () => {
        smoother.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
