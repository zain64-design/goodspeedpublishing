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
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-6 4xl:gap-x-9.25'>
      {data.map((value) => {
        const { id, title, description, newPrice, oldPrice, period, badge, features, variant } = value
        const styles = variantStyles[variant]

        return (
          <div className={twMerge('rounded-[30px] sm:rounded-[36px] lg:rounded-[42px] py-6 px-3 sm:p-5.5 lg:p-7 xl:p-7 2xl:p-9 4xl:p-12 relative', styles.card)} key={id}>

            {badge && (
              <Badge className='justify-center font-semibold uppercase text-sm lg:text-base tracking-[1.63px] gap-2 rounded-full shadow-[0_14.794px_22.192px_-4.438px_rgba(0,0,0,0.10),0_5.918px_8.877px_-5.918px_rgba(0,0,0,0.10)] mx-auto absolute -top-5 left-0 right-0 w-full max-w-44 min-h-8 lg:max-w-46.75 lg:min-h-10.5' label={badge} leftIcon={<LuCrown/>}/>
            )}

            <Text as='h3' className={twMerge('font-bold text-[24px] sm:text-[28px] xl:text-[28px] 2xl:text-[30px] 4xl:text-[35px] capitalize mb-2.25', styles.text)}>
              {title}
            </Text>
            <Text as='span' className={twMerge('text-sm leading-5 xl:text-[15px] xl:leading-5.5 2xl:text-[17px] 2xl:leading-6.5 4xl:text-xl 4xl:leading-7.25', styles.text)}>
              {description}
            </Text>
            <Text as='h4' className={twMerge('font-bold text-[28px] leading-8 sm:text-[35px] sm:leading-9 2xl:text-[40px] 2xl:leading-10 4xl:text-[70px] 4xl:leading-15 flex items-end mt-6 xl:mt-7 4xl:mt-9 mb-3 gap-3.75', styles.text)}>
              {`$${newPrice.toLocaleString()}`}
              <Text as='small' className='leading-7.25! line-through text-base 2xl:text-lg 4xl:text-xl font-normal'>
                {`$${oldPrice}`}
              </Text>
            </Text>
            <Text as='span' className={twMerge('uppercase text-sm 2xl:text-base tracking-[1.63px]', styles.text)}>
              {period}
            </Text>

            <hr className='border-t border-grey-border-100 mx-auto my-4 2xl:my-6' />

            <Text as='ul' className='[&>:not(:last-child)]:mb-3 2xl:[&>:not(:last-child)]:mb-3.5'>
              {features.map((feature, index) => (
                <Text key={index} as='li' className={twMerge('text-sm leading-4.5 xl:text-base xl:leading-5 2xl:text-lg 2xl:leading-6 4xl:text-xl 4xl:leading-7.25 flex items-center gap-3', styles.text)}>
                  {feature.included
                    ? <FaCheck className='size-4.7 shrink-0' />
                    : <FaXmark className='size-4.7 shrink-0' />
                  }
                  {feature.label}
                </Text>
              ))}
            </Text>

            <hr className='border-t border-grey-border-100 mx-auto my-7 2xl:my-9' />

            <CustomBtn
              label='Order Now'
              buttonClass={twMerge('font-medium text-base 2xl:text-xl 4xl:text-[23px] rounded-full h-[55px] md:h-[60px] 2xl:h-[66px] 4xl:h-[76px] items-center justify-center', styles.btn)}
            />

            <Text as='h5' className={twMerge('uppercase font-bold text-xs sm:text-sm tracking-[1.47px] text-center mt-7 2xl:mt-9.5', styles.text)}>
              need more info
            </Text>
            <div className="flex items-center justify-center gap-9 mt-3">
              <Link href="tel:+16463892410" className={twMerge('font-semibold text-xs sm:text-[15px] flex flex-col justify-center items-center gap-[2.4px]', styles.text)}>
                <Text as='small' className={twMerge('capitalize text-mid text-[13px] sm:text-[14px] font-medium',styles.text)}>talk to us</Text>
                +1(646)-389-2410
              </Link>
              <button type='button' className={twMerge('font-semibold text-xs sm:text-[15px] capitalize flex flex-col justify-center items-center gap-[2.4px]', styles.text)}>
                <Text as='small' className={twMerge('capitalize text-mid text-[13px] sm:text-[14px] font-medium',styles.text)}>for more detail</Text>
                Chat With us
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}