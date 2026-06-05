import Image from "next/image"
import type { ImageProps } from "@/app/_types"

export default function ImageComp({ src, width, height, quality, sizes, alt, className, placeholder, blurDataURL, loading = "lazy", fetchPriority, preload, unoptimized = false, }: ImageProps) {
    return (
        <Image src={src} width={width} height={height} quality={quality} sizes={sizes} alt={alt} className={className} placeholder={placeholder} blurDataURL={blurDataURL} loading={preload ? undefined : loading}  fetchPriority={preload ? "high" : fetchPriority} preload={preload} unoptimized={unoptimized}   />
    )
}