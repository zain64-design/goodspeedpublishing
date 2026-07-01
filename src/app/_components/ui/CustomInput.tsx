"use client";
import { twMerge } from "tailwind-merge";
import type { CustomInputProps } from "@/app/_types";

export default function CustomInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  defaultValue,
  autoComplete,
  placeholder = "",
  required = false,
  wrapperClassName = "",
  labelClassName = "",
  inputClassName = "",
  iconToggler = null,
  allowNegative = false,
}: CustomInputProps) {
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
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        className={twMerge("no-spinner", inputClassName)}
        autoComplete={autoComplete}
        {...(type === "number" && !allowNegative ? { min: 0 } : {})}
      />
      {iconToggler && iconToggler}
    </div>
  );
}
