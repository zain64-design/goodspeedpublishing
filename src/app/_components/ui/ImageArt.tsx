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
    const { props: { srcSet: desktop, src: desktopSrc_opt, sizes: _sizes , ...rest } } = getImageProps({
        src: desktopSrc,
        width: desktopWidth,
        height: desktopHeight,
        alt,
        sizes: desktopSizes,
        quality: 70,
    })

    const { props: { srcSet: mobile } } = getImageProps({
        src: mobileSrc,
        width: mobileWidth,
        height: mobileHeight,
        alt,
        sizes: mobileSizes,
        quality: 70,
    })

    // console.log('desktop srcSet:', desktop)
// console.log('rest:', rest)

    return (
        <picture>
            <source media={`(min-width: ${breakpoint}px)`} srcSet={desktop} sizes={desktopSizes} />
            <source media={`(max-width: ${breakpoint - 1}px)`} srcSet={mobile} sizes={mobileSizes} />
            <img {...rest} src={desktopSrc_opt} className={className} fetchPriority={fetchPriority} loading={loading} />
        </picture>
    )
}