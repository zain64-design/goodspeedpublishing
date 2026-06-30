'use client'
import { useRef } from 'react'
import { ScrollSmoother, useGSAP, ScrollTrigger } from '@/app/_libs/gsap'

export default function SmoothLayout({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!wrapperRef.current || !contentRef.current) return

        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 0.5,
            effects: true,
            ignoreMobileResize: true
        })

        let initialRefreshDone = false
        const refresh = () => {
            if (initialRefreshDone) return
            initialRefreshDone = true
            ScrollTrigger.refresh()
        }

        // Combine all "ready" conditions into a single refresh call
        Promise.all([
            document.fonts?.ready ?? Promise.resolve(),
            document.readyState === 'complete'
                ? Promise.resolve()
                : new Promise<void>(resolve => window.addEventListener('load', () => resolve(), { once: true }))
        ]).then(refresh)

        // Debounced resize-triggered refresh (separate from initial refresh)
        let frame: number
        let timeout: ReturnType<typeof setTimeout>
        const ro = new ResizeObserver(() => {
            cancelAnimationFrame(frame)
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                frame = requestAnimationFrame(() => {
                    ScrollTrigger.refresh()
                })
            }, 150)
        })
        ro.observe(contentRef.current)

        return () => {
            cancelAnimationFrame(frame)
            clearTimeout(timeout)
            ro.disconnect()
            smoother.kill()
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, { scope: wrapperRef })

    return (
        <div ref={wrapperRef}>
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    )
}