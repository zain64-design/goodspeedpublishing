import { twMerge } from 'tailwind-merge'
import Text from "@/app/_components/ui/Text"
import CustomBtn from '../../ui/CustomBtn'
import Link from 'next/link'
import type { PricePackages } from '@/app/_types'
import { FaCheck, FaXmark } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import Badge from '../../ui/Badge'

type Props = {
  packages?: PricePackages[],
}

// variant → styles map
const variantStyles = {
  default: {
    card: "bg-white",
    text: "text-mid",
    btn: "btn-mid",
  },
  primary: {
    card: "bg-primary",
    text: "text-mid",
    btn: "btn-mid",
  },
  secondary: {
    card: "bg-secondary",
    text: "text-white",
    btn: "btn-primary",
  },
} satisfies Record<PricePackages["variant"], { card: string; text: string; btn: string }>

export default function PackageBox({ packages }: Props) {
  const data = packages ?? []

  return (
    <div className='grid md:grid-cols-[repeat(auto-fill,minmax(540px,1fr))] gap-9.25'>
      {data.map((value) => {
        const { id, title, description, newPrice, oldPrice, period, badge, features, variant } = value
        const styles = variantStyles[variant]

        return (
          <div className={twMerge('rounded-[42px] p-12 relative', styles.card)} key={id}>

            {badge && (
              <Badge className='justify-center font-semibold uppercase text-base tracking-[1.63px] gap-2 rounded-full shadow-[0_14.794px_22.192px_-4.438px_rgba(0,0,0,0.10),0_5.918px_8.877px_-5.918px_rgba(0,0,0,0.10)] mx-auto absolute -top-5 left-0 right-0 w-full max-w-46.75 min-h-10.5' label={badge} leftIcon={<LuCrown/>}/>
            )}

            <Text as='h3' className={twMerge('font-bold text-[35px] capitalize mb-2.25', styles.text)}>
              {title}
            </Text>
            <Text as='span' className={twMerge('text-[20px] leading-7.25', styles.text)}>
              {description}
            </Text>
            <Text as='h4' className={twMerge('font-bold text-[70px] leading-15 flex items-end mt-9 mb-3', styles.text)}>
              {`$${newPrice.toLocaleString()}`}
              <Text as='small' className='leading-7.25! line-through text-[20px] font-normal opacity-60'>
                {`$${oldPrice}`}
              </Text>
            </Text>
            <Text as='span' className={twMerge('uppercase text-[16px] tracking-[1.63px]', styles.text)}>
              {period}
            </Text>

            <hr className='border-t border-grey-border-100 mx-auto my-6' />

            <Text as='ul' className='[&>:not(:last-child)]:mb-3.5'>
              {features.map((feature, index) => (
                <Text key={index} as='li' className={twMerge('text-[20px] leading-7.25 flex items-center gap-3', styles.text)}>
                  {feature.included
                    ? <FaCheck className='size-5 shrink-0' />
                    : <FaXmark className='size-5 shrink-0' />
                  }
                  {feature.label}
                </Text>
              ))}
            </Text>

            <hr className='border-t border-grey-border-100 mx-auto my-9' />

            <CustomBtn
              label='Order Now'
              buttonClass={twMerge('font-medium text-[23px] rounded-full h-[76px] items-center justify-center', styles.btn)}
            />

            <Text as='h5' className={twMerge('uppercase font-bold text-[14px] tracking-[1.47px] text-center mt-[38px]', styles.text)}>
              need more info
            </Text>
            <div className="flex items-center justify-center gap-9 mt-3">
              <Link href="" className={twMerge('font-semibold text-[15px] flex flex-col justify-center items-center', styles.text)}>
                <Text as='small' className='capitalize text-grey-text-100 text-[14px] font-medium'>talk to us</Text>
                +1(646)-389-2410
              </Link>
              <button type='button' className={twMerge('font-semibold text-[15px] capitalize flex flex-col justify-center items-center', styles.text)}>
                <Text as='small' className='capitalize text-grey-text-100 text-[14px] font-medium'>for more detail</Text>
                Chat With us
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}