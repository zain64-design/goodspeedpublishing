import React from "react";
import Text from "@/app/_components/ui/Text";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import type { LinkItem } from "@/app/_types";
import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";

type Props = {
  links?: LinkItem[];
  info?: LinkItem[];
  className?: string;
  itemClassName?: string;
  linkClassName?: string;
  iconClassName?: string;
};

const iconMap: Record<string, React.ElementType> = {
  phone: HiOutlinePhone,
  email: HiOutlineEnvelope,
  location: GrLocation,
};
function LinksInner({
  links,
  info,
  className,
  itemClassName,
  linkClassName,
  iconClassName,
}: Props) {
  const data = links ?? info ?? [];
  return (
    <Text as="ul" className={twMerge(className)}>
      {data?.map(({ id, title, href, brandInfo, icon }) => {
        return (
          <Text as="li" key={id} className={twMerge(itemClassName)}>
            <Link href={href} className={twMerge(linkClassName)}>
              {icon && (
                <Text as="span" className={twMerge(iconClassName)}>
                  {iconMap[icon] ? React.createElement(iconMap[icon]) : null}
                </Text>
              )}
              {title ?? brandInfo}
            </Link>
          </Text>
        );
      })}
    </Text>
  );
}
export default function Links(props: Props) {
  return <LinksInner {...props} />;
}
