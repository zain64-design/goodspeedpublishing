import React from 'react'
import Text from '@/app/_components/ui/Text'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type LinkItem = {
    id: number,
    title?: string,
    brandInfo?: string,
    href: string,
    icon?: React.ElementType
}

type Props = {
    links?: LinkItem[]
    info?: LinkItem[]
    className?: string
    itemClassName?: string
    linkClassName?: string
    iconClassName?: string
}

export default function Links({ links, info, className, itemClassName, linkClassName, iconClassName }: Props) {
    const data = links ?? info ?? []
    return (
        <Text as="ul" className={twMerge(className)}>
            {data.map(({ id, title, href, brandInfo, icon }) => {
                return (
                    <Text as="li" key={id} className={twMerge(itemClassName)}>
                        <Link href={href} className={twMerge(linkClassName)}>
                            {icon && <Text as="span" className={twMerge(iconClassName)}>{React.createElement(icon)}</Text>}{title ?? brandInfo}
                        </Link>
                    </Text>
                )
            })}
        </Text>

    )
}