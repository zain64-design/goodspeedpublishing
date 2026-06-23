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
    fetchPriority = "auto",
    desktopSizes = '100vw',
    mobileSizes = '100vw',
}: ArtDirectionProps) {
    const { props: { srcSet: desktop, ...rest } } = getImageProps({
        src: desktopSrc,
        width: desktopWidth,
        height: desktopHeight,
        alt,
        sizes: desktopSizes,
        quality: 80,
    })

    const { props: { srcSet: mobile } } = getImageProps({
        src: mobileSrc,
        width: mobileWidth,
        height: mobileHeight,
        alt,
        sizes: mobileSizes,
        quality: 70,
    })

    return (
        <picture>
            <source media={`(min-width: ${breakpoint}px)`} srcSet={desktop} sizes={desktopSizes} />
            <source media={`(max-width: ${breakpoint - 1}px)`} srcSet={mobile} sizes={mobileSizes} />
            <img {...rest} sizes={desktopSizes} className={className} fetchPriority={fetchPriority} loading={loading} />
        </picture>
    )
}