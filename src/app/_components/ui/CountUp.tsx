'use client'
import { useRef } from 'react'
import { gsap, useGSAP } from '@/app/_libs/gsap'
import type { CountUpProps } from '@/app/_types'

export default function CountUp({
  value,
  duration = 1.5,
  scrollStart = 'top 85%',
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const match = value.match(/^([^\d.]*)([\d.]+)(.*)$/)
  const prefix = match?.[1] ?? ''
  const numericPart = match?.[2] ?? '0'
  const suffix = match?.[3] ?? ''
  const isDecimal = numericPart.includes('.')
  const decimals = isDecimal ? numericPart.split('.')[1].length : 0
  const targetNumber = parseFloat(numericPart)

  useGSAP(() => {
    if (!ref.current) return

    const mm = gsap.matchMedia()

    mm.add('all', () => {
      const obj = { val: 0 }

      gsap.to(obj, {
        val: targetNumber,
        duration,
        delay,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: ref.current,
          start: scrollStart,
          once: true,
        },
        onUpdate: () => {
          if (!ref.current) return
          const formatted = isDecimal
            ? obj.val.toFixed(decimals)
            : Math.floor(obj.val).toString()
          ref.current.textContent = `${prefix}${formatted}${suffix}`
        },
      })
    })

    return () => mm.revert()
  }, { scope: ref, dependencies: [value, delay] })

  return <span ref={ref}>{prefix}0{suffix}</span>
}