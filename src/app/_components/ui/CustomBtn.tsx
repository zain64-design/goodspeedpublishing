"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "primereact/button";
import type { CustomBtnProps } from "@/app/_types";

export default function CustomBtn({
  type = "button",
  key,
  onClick,
  disabled = false,
  ariaLabel,
  label,
  icon,
  buttonClass = "",
  isLoading = false,
  size = "normal",
}: CustomBtnProps) {
  const resolvedIcon = !icon
    ? undefined
    : React.isValidElement(icon)
      ? icon
      : React.createElement(icon as React.ElementType);

  return (
    <Button
      type={type}
      key={key}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      className={twMerge(buttonClass)}
      size={size === "normal" ? undefined : size}
      loading={isLoading}
    >
      {resolvedIcon}
      {label && <span>{label}</span>}
    </Button>
  );
}
