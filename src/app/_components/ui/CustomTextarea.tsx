'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
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

export default function CustomTextarea({
    label,
    name,
    value,
    onChange,
    placeholder = "",
    required = false,
    rows = 4,
    wrapperClassName = "",
    labelClassName = "",
    textareaClassName = "",
}: Props) {
    return (
        <div className={twMerge("flex flex-col", wrapperClassName)}>
            {label && (
                <label htmlFor={name} className={twMerge(labelClassName)}>
                    {label}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={rows}
                className={twMerge("resize-none", textareaClassName)}
            />
        </div>
    )
}