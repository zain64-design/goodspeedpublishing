'use client'
import { twMerge } from 'tailwind-merge'
import type { CustomTextareaProps } from '@/app/_types'

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
}: CustomTextareaProps) {
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