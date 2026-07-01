import type { Metadata } from "next";
import Header from "@/app/_components/webComp/common/header/Header";
import Footer from "@/app/_components/webComp/common/footer/Footer";
import SmoothLayout from "@/app/_components/ui/SmoothLayout";

export const metadata: Metadata = {
  title: "Home | GoodSpeed Publishing",
  description: "Home Web Page for GoodSpeed Publishing",
};

export default function WebLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <SmoothLayout>
        <main className="md:pt-22 xl:pt-24 2xl:pt-29.25">{children}</main>
        <Footer />
      </SmoothLayout>
    </>
  );
}
