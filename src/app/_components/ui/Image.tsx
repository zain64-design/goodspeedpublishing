import Image from "next/image"
import type { ImageProps } from "@/app/_types"

export default function ImageComp({ src, width, height, alt, className, placeholder, blurDataURL, loading = "lazy", fetchPriority = "auto", preload = false  }: ImageProps) {
    return (
        <Image src={src} width={width} height={height} alt={alt} className={className} placeholder={placeholder} blurDataURL={blurDataURL} loading={loading} fetchPriority={fetchPriority} preload={preload} />
    )
}