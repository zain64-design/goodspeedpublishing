import dynamic from "next/dynamic";
const PackagesInner = dynamic(
  () => import("@/app/_components/webComp/packages/PackagesInner"),
);
import { packagesData } from "@/app/_components/webComp/packages/packagesData";

export default function PackageBox() {
  return (
    <div className="4xl:gap-x-9.25 grid gap-y-8 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3">
      <PackagesInner packages={packagesData} />
    </div>
  );
}
