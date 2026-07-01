import { StaticImageData } from "next/image";
import React from "react";

export type StatusPageProps = {
  heading: string;
  subheading: string;
  linkLabel?: string;
  linkHref?: string;
};

export type GeoData = {
  ip: string;
  city: string;
  country: string;
  zip_code: string;
};

export type StoryBookData = {
  id: number;
  img: string | StaticImageData;
  title: string;
};

export type PortfolioBookData = {
  id: number;
  img: string | StaticImageData;
  title: string;
};
export type BrandLogoData = {
  id: number;
  src: string | StaticImageData;
  name: string;
};

export type IllustrationBookData = {
  id: number;
  img: string | StaticImageData;
};

export type SkeletonTypeCustomize =
  "thumbnail" | "heading" | "line" | "button" | "box";
export type SkeletonTypeProps = {
  type: SkeletonTypeCustomize;
  headingCount: number;
  lineCount: number;
  className: string;
  wrapper: boolean;
  wrapperClass: string;
};

export type LinkItem = {
  id: number;
  title?: string;
  brandInfo?: string;
  href: string;
  icon?: string;
};

export type Tab = {
  id: number | string;
  label: string;
};

export type CustomBtnProps = {
  type?: "button" | "submit" | "reset";
  key?: number;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  label?: string;
  icon?: React.ElementType | React.ReactElement;
  isLoading?: boolean;
  buttonClass?: string;
  size?: "small" | "large" | "normal";
};

export type ImageProps = {
  src: string | StaticImageData;
  width?: number;
  height?: number;
  quality?: number;
  sizes?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  preload?: boolean;
  unoptimized?: boolean;
};

export type CustomTextareaProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  wrapperClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
};

export type CustomInputProps = {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  defaultValue?: string | number;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  iconToggler?: React.ReactNode;
  allowNegative?: boolean;
};

export type BadgeVariant = "primary" | "secondary" | "outline" | "ghost";

export type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
};

export type IconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
  color?: string;
};

export type PackageFeature = {
  label: string;
  included: boolean;
};

export type PricePackages = {
  id: number;
  title: string;
  description: string;
  newPrice: number;
  oldPrice: number;
  period: string;
  badge?: string | null;
  variant?: "default" | "primary" | "secondary";
  features: PackageFeature[];
};

export type GenreItem = {
  id: number;
  title: string;
  category: string;
  info: string;
  thumbnail?: string | StaticImageData;
};

export type FaqItem = {
  id: number;
  title: string;
  desc: string;
};

export type AuthorItem = {
  id: number;
  desc: string;
  authorName: string;
  authorThumbnail?: string | StaticImageData;
};

export type FadeInOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  stagger?: number | gsap.StaggerVars;
  selector?: string;
};

export type StatsItem = {
  id: number;
  value: string;
  label: string;
  icon?: boolean;
};

export type CountUpProps = {
  value: string;
  duration?: number;
  scrollStart?: string;
  delay?: number;
};

export type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  about: string;
};
