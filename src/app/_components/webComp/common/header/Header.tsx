import CustomBtn from "@/app/_components/ui/CustomBtn"
import { FiArrowRight } from "react-icons/fi";

type Props = {}

export default function Header({}: Props) {
  return (
    <nav><CustomBtn label="book free consultation" buttonClass="btn-primary h-[71px] max-w-[292px] w-full flex-row-reverse justify-center gap-[11px] text-lg" icon={<FiArrowRight className="text-xl" />}/></nav>
  )
}
