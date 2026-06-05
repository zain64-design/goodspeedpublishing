import { getImageProps } from 'next/image'
import type { ArtDirectionProps } from '@/app/_types'

export default function ImageArt({
    mobileSrc,
    desktopSrc,
    alt,
    mobileWidth,
    mobileHeight,
    desktopWidth,
    desktopHeight,
    className,
    breakpoint = 768,
    loading = "lazy",
    fetchPriority = "auto"
}: ArtDirectionProps) {
    const { props: { srcSet: desktop, ...rest } } = getImageProps({
        src: desktopSrc,
        width: desktopWidth,
        height: desktopHeight,
        alt,
        sizes: '100vw',
        quality: 80,
    })

    const { props: { srcSet: mobile } } = getImageProps({
        src: mobileSrc,
        width: mobileWidth,
        height: mobileHeight,
        alt,
        sizes: '100vw',
        quality: 70,
    })

    return (
        <picture>
            <source media={`(min-width: ${breakpoint}px)`} srcSet={desktop} />
            <source media={`(max-width: ${breakpoint - 1}px)`} srcSet={mobile} />
            <img {...rest} className={className} fetchPriority={fetchPriority} loading={loading} />
        </picture>
    )
}