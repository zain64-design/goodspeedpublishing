import Image, { StaticImageData } from "next/image"

type ImageProps = { 
    src: string | StaticImageData, 
    width?: number, 
    height?: number, 
    alt: string, 
    className?: string, 
    placeholder?: "blur" | "empty", 
    blurDataURL?: string,
    priority?: boolean,
    loading?: "eager" | "lazy"
}

export default function ImageComp({ src, width, height, alt, className, placeholder, blurDataURL, priority = false, loading  }: ImageProps) {
    return (
        <Image src={src} width={width} height={height} alt={alt} className={className} placeholder={placeholder} blurDataURL={blurDataURL} priority={priority} loading={loading} />
    )
}