import { twMerge } from "tailwind-merge";
import Text from "@/app/_components/ui/Text";
import CustomBtn from "@/app/_components/ui/CustomBtn";
import Link from "next/link";
import type { PricePackages } from "@/app/_types";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import Badge from "@/app/_components/ui/Badge";

type Props = {
  packages?: PricePackages[];
};

type Variant = "default" | "primary" | "secondary";

const variantStyles: Record<
  Variant,
  { card: string; text: string; btn: string; border?: string }
> = {
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
    border: "border-grey-border-300",
    text: "text-white",
    btn: "btn-primary",
  },
};

export default function PackagesInner({ packages }: Props) {
  const data = packages ?? [];
  return (
    <>
      {data?.map((value) => {
        const {
          id,
          title,
          description,
          newPrice,
          oldPrice,
          period,
          badge,
          features,
          variant,
        } = value;
        const styles = variantStyles[variant ?? "default"];

        return (
          <div
            className={twMerge(
              "4xl:p-12 relative rounded-[30px] px-3 py-6 sm:rounded-[36px] sm:p-5.5 lg:rounded-[42px] lg:p-7 xl:p-7 2xl:p-9",
              styles.card,
            )}
            key={id}
          >
            {badge && (
              <Badge
                className="absolute -top-5 right-0 left-0 mx-auto min-h-8 w-full max-w-44 justify-center gap-2 rounded-full text-sm font-semibold tracking-[1.63px] uppercase shadow-[0_14.794px_22.192px_-4.438px_rgba(0,0,0,0.10),0_5.918px_8.877px_-5.918px_rgba(0,0,0,0.10)] lg:min-h-10.5 lg:max-w-46.75 lg:text-base"
                label={badge}
                leftIcon={<LuCrown />}
              />
            )}

            <Text
              as="h3"
              className={twMerge(
                "4xl:text-[35px] mb-2.25 text-[24px] font-bold capitalize sm:text-[28px] xl:text-[28px] 2xl:text-[30px]",
                styles.text,
              )}
            >
              {title}
            </Text>
            <Text
              as="span"
              className={twMerge(
                "4xl:text-xl 4xl:leading-7.25 text-sm leading-5 xl:text-[15px] xl:leading-5.5 2xl:text-[17px] 2xl:leading-6.5",
                styles.text,
              )}
            >
              {description}
            </Text>
            <Text
              as="h4"
              className={twMerge(
                "4xl:text-[70px] 4xl:leading-15 4xl:mt-9 mt-6 mb-3 flex items-end gap-3.75 text-[28px] leading-8 font-bold sm:text-[35px] sm:leading-9 xl:mt-7 2xl:text-[40px] 2xl:leading-10",
                styles.text,
              )}
            >
              {`$${newPrice.toLocaleString()}`}
              <Text
                as="small"
                className="4xl:text-xl text-base leading-7.25! font-normal line-through 2xl:text-lg"
              >
                {`$${oldPrice.toLocaleString()}`}
              </Text>
            </Text>
            <Text
              as="span"
              className={twMerge(
                "text-sm tracking-[1.63px] uppercase 2xl:text-base",
                styles.text,
              )}
            >
              {period}
            </Text>

            <hr
              className={twMerge(
                `border-grey-border-100 mx-auto my-4 border-t 2xl:my-6`,
                styles.border,
              )}
            />

            <Text
              as="ul"
              className="[&>:not(:last-child)]:mb-3 2xl:[&>:not(:last-child)]:mb-3.5"
            >
              {features.map((feature, index) => (
                <Text
                  key={index}
                  as="li"
                  className={twMerge(
                    "4xl:text-xl 4xl:leading-7.25 flex items-center gap-3 text-sm leading-4.5 xl:text-base xl:leading-5 2xl:text-lg 2xl:leading-6",
                    styles.text,
                  )}
                >
                  {feature.included ? (
                    <FaCheck className="size-4.7 shrink-0" />
                  ) : (
                    <FaXmark className="size-4.7 shrink-0" />
                  )}
                  {feature.label}
                </Text>
              ))}
            </Text>

            <hr
              className={twMerge(
                `border-grey-border-100 mx-auto my-7 border-t 2xl:my-9`,
                styles.border,
              )}
            />

            <CustomBtn
              label="Order Now"
              buttonClass={twMerge(
                "font-medium text-base 2xl:text-xl 4xl:text-[23px] rounded-full h-[55px] md:h-[60px] 2xl:h-[66px] 4xl:h-[76px] items-center justify-center",
                styles.btn,
              )}
            />

            <Text
              as="h5"
              className={twMerge(
                "mt-7 text-center text-xs font-bold tracking-[1.47px] uppercase sm:text-sm 2xl:mt-9.5",
                styles.text,
              )}
            >
              need more info
            </Text>
            <div className="mt-3 flex items-center justify-center gap-9">
              <Link
                href="tel:+16463892410"
                className={twMerge(
                  "flex flex-col items-center justify-center gap-[2.4px] text-xs font-semibold sm:text-[15px]",
                  styles.text,
                )}
              >
                <Text
                  as="small"
                  className={twMerge(
                    "text-mid text-[13px] font-medium capitalize sm:text-[14px]",
                    styles.text,
                  )}
                >
                  talk to us
                </Text>
                +1(646)-389-2410
              </Link>
              <button
                type="button"
                className={twMerge(
                  "flex flex-col items-center justify-center gap-[2.4px] text-xs font-semibold capitalize sm:text-[15px]",
                  styles.text,
                )}
              >
                <Text
                  as="small"
                  className={twMerge(
                    "text-mid text-[13px] font-medium capitalize sm:text-[14px]",
                    styles.text,
                  )}
                >
                  for more detail
                </Text>
                Chat With us
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
