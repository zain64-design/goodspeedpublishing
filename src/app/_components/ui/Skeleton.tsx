"use client";
import { twMerge } from "tailwind-merge";
import { BiImage } from "react-icons/bi";
import type { SkeletonTypeProps } from "@/app/_types";

const skeletonClasses: Record<string, string> = {
  thumbnail:
    "w-20 h-20 rounded flex items-center justify-center animate-pulse bg-gray-300",
  heading: "h-6 rounded animate-pulse bg-gray-300",
  line: "h-4 rounded animate-pulse bg-gray-300",
  button: "h-12 rounded-full animate-pulse bg-gray-300",
  box: "w-full h-48 rounded animate-pulse bg-gray-300",
};

function renderRepeatedSkeleton(
  count: number,
  baseClass: string,
  className?: string,
): React.ReactElement[] {
  return Array.from({ length: count }).map((_, i) => (
    <div key={i} className={twMerge(baseClass, className)} />
  ));
}
export default function Skeleton({
  type,
  headingCount = 1,
  lineCount = 3,
  className,
  wrapper = false,
  wrapperClass = "",
}: SkeletonTypeProps) {
  if (type === "thumbnail") {
    return (
      <div className={twMerge(skeletonClasses.thumbnail, className)}>
        <BiImage className="text-4xl text-gray-400" />
      </div>
    );
  }

  if (type === "button") {
    return <div className={twMerge(skeletonClasses.button, className)} />;
  }

  if (type === "heading") {
    const skeletons = renderRepeatedSkeleton(
      headingCount,
      skeletonClasses.heading,
    );
    return wrapper ? (
      <div className={twMerge(wrapperClass)}>{skeletons}</div>
    ) : (
      <>{skeletons}</>
    );
  }

  if (type === "line") {
    const skeletons = renderRepeatedSkeleton(lineCount, skeletonClasses.line);
    return wrapper ? (
      <div className={twMerge(wrapperClass)}>{skeletons}</div>
    ) : (
      <>{skeletons}</>
    );
  }

  if (type === "box") {
    return <div className={twMerge(skeletonClasses.box, className)} />;
  }

  return null;
}
