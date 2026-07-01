"use client";
import dynamic from "next/dynamic";
const AuthorSliderInner = dynamic(
  () => import("@/app/_components/webComp/author/AuthorSliderInner"),
);
import { AuthorData } from "@/app/_components/webComp/author/AuthorData";

export default function AuthorSlider() {
  return <AuthorSliderInner author={AuthorData} />;
}
