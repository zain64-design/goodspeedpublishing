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
        effects: false,
        ignoreMobileResize: true,
      });

      let initialRefreshDone = false;
      const refresh = () => {
        if (initialRefreshDone) return;
        initialRefreshDone = true;
        ScrollTrigger.refresh();
      };

      // Combine all "ready" conditions into a single refresh call
      Promise.all([
        document.fonts?.ready ?? Promise.resolve(),
        document.readyState === "complete"
          ? Promise.resolve()
          : new Promise<void>((resolve) =>
              window.addEventListener("load", () => resolve(), { once: true }),
            ),
      ]).then(refresh);

      // Leading + trailing debounced resize refresh.
      // First resize in a burst refreshes immediately (leading edge),
      // subsequent ones are debounced, and a trailing refresh fires
      // after the burst settles to catch the final layout state.
      let frame: number;
      let timeout: ReturnType<typeof setTimeout>;
      let isThrottled = false;
      const DEBOUNCE_MS = 150;

      const runRefresh = () => {
        frame = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      const ro = new ResizeObserver(() => {
        clearTimeout(timeout);

        if (!isThrottled) {
          // Leading edge: respond to the first event in the burst immediately
          isThrottled = true;
          runRefresh();
        }

        // Trailing edge: always schedule a final refresh once events settle,
        // so the last resize state is never missed
        timeout = setTimeout(() => {
          isThrottled = false;
          runRefresh();
        }, DEBOUNCE_MS);
      });
      ro.observe(contentRef.current);

      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(timeout);
        ro.disconnect();
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
