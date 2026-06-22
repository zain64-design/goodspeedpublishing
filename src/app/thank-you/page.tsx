import Status from "@/app/_components/webComp/status/Status"

type Props = {}

export default function ThankYou({}: Props) {
  return (
    <Status heading="Thanks for submitting!" subheading="You're 35% Discount Has Been Activated!" linkLabel="go back home"/>
  )
}