import Image from "next/image";

type ImageProps = { 
    src: string, 
    width: number, 
    height: number, 
    alt: string, 
    className?: string, 
    placeholder?: "blur" | "empty", 
    blurDataURL?: string 
}

export default function ImageComp({ src, width, height, alt, className, placeholder, blurDataURL }: ImageProps) {
    return (
        <Image src={src} width={width} height={height} alt={alt} className={className} placeholder={placeholder} blurDataURL={blurDataURL} />
    )
}