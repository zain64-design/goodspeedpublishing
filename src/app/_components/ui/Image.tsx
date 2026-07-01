import Image from "next/image";
import type { ImageProps } from "@/app/_types";

export default function ImageComp({
  src,
  width,
  height,
  quality,
  sizes,
  alt,
  className,
  style,
  fill,
  placeholder,
  blurDataURL,
  loading = "lazy",
  fetchPriority,
  preload,
  unoptimized = false,
}: ImageProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      quality={quality}
      sizes={sizes}
      alt={alt}
      className={className}
      style={style}
      fill={fill}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loading={preload ? undefined : loading}
      fetchPriority={preload ? undefined : fetchPriority}
      preload={preload}
      unoptimized={unoptimized}
    />
  );
}
