import { twMerge } from "tailwind-merge";
import type { JSX } from "react";

type TextProps<T extends keyof JSX.IntrinsicElements = "p"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<JSX.IntrinsicElements[T], "children" | "className">;

const Text = <T extends keyof JSX.IntrinsicElements = "p">({
  as: Tag = "p" as T,
  className = "",
  children,
  ...props
}: TextProps<T>) => {
  const Component = Tag as React.ElementType;

  return (
    <Component {...props} className={twMerge(className)}>
      {children}
    </Component>
  );
};

export default Text;
