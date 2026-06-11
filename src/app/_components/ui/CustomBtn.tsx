'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from 'primereact/button'
import type { CustomBtnProps } from '@/app/_types'

export default function CustomBtn({
    type = 'button',
    onClick,
    disabled = false,
    ariaLabel,
    label,
    icon,
    buttonClass = '',
    isLoading = false,
    size = 'normal'
}: CustomBtnProps) {

    const renderIcon = () =>
        !icon ? undefined
        : React.isValidElement(icon) ? icon
        : React.createElement(icon as React.ElementType)

    return (
        <Button
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            aria-label= {ariaLabel}
            className={twMerge(buttonClass)}
            size={size === 'normal' ? undefined : size}
            label={label}
            icon={renderIcon()}
            loading={isLoading}
        />
    )
}