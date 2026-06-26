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
        })

        const refresh = () => ScrollTrigger.refresh()

        document.fonts?.ready?.then(refresh)

        if (document.readyState === 'complete') {
            refresh()
        } else {
            window.addEventListener('load', refresh)
        }

        let frame: number
        const ro = new ResizeObserver(() => {
            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(refresh)
        })
        ro.observe(contentRef.current)

        return () => {
            window.removeEventListener('load', refresh)
            cancelAnimationFrame(frame)
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