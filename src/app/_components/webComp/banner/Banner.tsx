'use client'
import { useRef } from 'react'
import BoxRight from '@/app/_components/webComp/banner/BoxRight'
import BoxLeft from '@/app/_components/webComp/banner/BoxLeft'
// import { gsap, useGSAP } from '@/app/_libs/gsap'

export default function Banner() {
  const containerRef = useRef<HTMLDivElement>(null)

  // useGSAP(() => {
  //   const q = gsap.utils.selector(containerRef)
  //   const isMobile = window.innerWidth < 768

  //   gsap.to(q('.banner-box'), {
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.5,
  //     delay: 0.1,
  //     stagger: {
  //       from: 'start',
  //       amount: 0.5,
  //       each: 0.5,
  //       ease: 'power1.in'
  //     }
  //   })
  // }, { scope: containerRef })

  return (
    <section ref={containerRef} className="pb-6.25 md:pb-12.5 pt-8.25">
      <div className="md:container mx-auto px-4">
        <div className="grid gap-6.75 grid-cols-1 sm:grid-cols-2">
          <BoxLeft />
          <BoxRight />
        </div>
      </div>
    </section>
  )
}