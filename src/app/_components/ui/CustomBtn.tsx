import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from 'primereact/button'

type CustomBtnProps = {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    label?: string;
    icon?: React.ElementType | React.ReactElement;
    isLoading?: boolean;
    buttonClass?: string;
    size?: "small" | "large" | "normal";
}

const CustomBtn = ({
    type = 'button',
    onClick,
    disabled = false,
    label,
    icon,
    buttonClass = '',
    isLoading = false,
    size = 'normal'
}: CustomBtnProps) => {

    const renderIcon = () =>
        !icon ? undefined
        : React.isValidElement(icon) ? icon
        : React.createElement(icon as React.ElementType)

    return (
        <Button
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={twMerge(buttonClass)}
            size={size === 'normal' ? undefined : size}
            label={label}
            icon={renderIcon()}
            loading={isLoading}
        />
    )
}

export default CustomBtn