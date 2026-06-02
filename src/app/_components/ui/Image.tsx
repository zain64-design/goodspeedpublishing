import Image, { StaticImageData } from "next/image"

type ImageProps = { 
    src: string | StaticImageData, 
    width?: number, 
    height?: number, 
    alt: string, 
    className?: string, 
    placeholder?: "blur" | "empty", 
    blurDataURL?: string,
    loading?: "eager" | "lazy"
    fetchPriority?: "high" | "low" | "auto"
    preload?: boolean
}

export default function ImageComp({ src, width, height, alt, className, placeholder, blurDataURL, loading = "lazy", fetchPriority = "auto", preload = false  }: ImageProps) {
    return (
        <Image src={src} width={width} height={height} alt={alt} className={className} placeholder={placeholder} blurDataURL={blurDataURL} loading={loading} fetchPriority={fetchPriority} preload={preload} />
    )
}