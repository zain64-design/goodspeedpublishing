import { StaticImageData } from "next/image"
import React from "react"

export type LinkItem = {
    id: number,
    title?: string,
    brandInfo?: string,
    href: string,
    icon?: React.ElementType
}

export type LogoItem = {
    id: number, name: string, src: string | StaticImageData
}

export type CustomBtnProps = {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    ariaLabel?: string,
    label?: string;
    icon?: React.ElementType | React.ReactElement;
    isLoading?: boolean;
    buttonClass?: string;
    size?: "small" | "large" | "normal";
}


export type ImageProps = {
    src: string | StaticImageData,
    width?: number,
    height?: number,
    quality?: number,
    sizes?: string,
    alt: string,
    className?: string,
    placeholder?: "blur" | "empty",
    blurDataURL?: string,
    loading?: "eager" | "lazy"
    fetchPriority?: "high" | "low" | "auto"
    preload?: boolean,
    unoptimized?: boolean

}

export type ArtDirectionProps = {
    mobileSrc: string | StaticImageData
    desktopSrc: string | StaticImageData
    alt: string
    mobileWidth: number
    mobileHeight: number
    desktopWidth: number
    desktopHeight: number
    className?: string
    breakpoint?: number
    fetchPriority?: "high" | "low" | "auto"
    loading?: "eager" | "lazy"
}

export type CustomTextareaProps = {
    label?: string
    name?: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
    placeholder?: string
    required?: boolean
    rows?: number
    wrapperClassName?: string
    labelClassName?: string
    textareaClassName?: string
}

export type CustomInputProps = {
    label?: string
    type?: React.HTMLInputTypeAttribute
    name?: string
    value?: string | number
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    defaultValue?: string | number
    autoComplete?: string
    placeholder?: string
    required?: boolean
    wrapperClassName?: string
    labelClassName?: string
    inputClassName?: string
    iconToggler?: React.ReactNode
    allowNegative?: boolean
}

export type BadgeVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

export type BadgeProps = {
    label: string
    variant?: BadgeVariant
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    className?: string
}

export type IconProps = {
    width?: number | string
    height?: number | string
    className?: string
    color?: string
}

