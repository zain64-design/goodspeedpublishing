import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
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

export default function CustomInput({
    label,
    type = "text",
    name,
    value,
    onChange,
    defaultValue,
    autoComplete,
    placeholder = "",
    required = false,
    wrapperClassName = "",
    labelClassName = "",
    inputClassName = "",
    iconToggler = null,
    allowNegative = false,
}: Props) {
    return (
        <div className={twMerge("flex flex-col", wrapperClassName)}>
            {label && (
                <label htmlFor={name} className={twMerge(labelClassName)}>
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={twMerge('no-spinner', inputClassName)}
                autoComplete={autoComplete}
                {...(type === "number" && !allowNegative ? { min: 0 } : {})}
            />
            {iconToggler && iconToggler}
        </div>
    )
}