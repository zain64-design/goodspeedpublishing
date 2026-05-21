import CustomInput from "@/app/_components/ui/CustomInput"
import CustomTextarea from "@/app/_components/ui/CustomTextarea"
import CustomBtn from "@/app/_components/ui/CustomBtn"

type Props = {}

export default function ContactForm({ }: Props) {
  return (
    <>
      <form action="" className="w-full bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:pt-12 xl:pb-5 xl:px-10 2xl:pt-17 2xl:pb-7.5 2xl:px-14.5 rounded-[25px] md:rounded-[42px] shadow-light-shadow">
        <div className="flex flex-row flex-wrap gap-x-7.25 gap-y-2 sm:gap-y-6 md:gap-y-10">
          <CustomInput
            label="name"
            type="name"
            name="name"
            autoComplete="name"
            wrapperClassName='w-full md:flex-1'
            labelClassName="font-medium text-xs sm:text-base md:text-lg text-grey-text-200 tracking-[1.6px] mb-2 uppercase"
            inputClassName="h-[35px] sm:h-[45px] md:h-[64px] w-full p-[10px] sm:p-[15px] bg-white rounded-0 text-base text-black-text-100 tracking-normal focus:outline-none focus:shadow-none border-b-1 border-grey-100 placeholder:text-(--text-white) placeholder:capitalize"
            required
          />
                    <CustomInput
            label="phone"
            type="tel"
            name="phone"
            autoComplete="phone"
            wrapperClassName='w-full md:flex-1'
            labelClassName="font-medium text-xs sm:text-base md:text-lg text-grey-text-200 tracking-[1.6px] mb-2 uppercase"
            inputClassName="h-[35px] sm:h-[45px] md:h-[64px] w-full p-[10px] sm:p-[15px] bg-white rounded-0 text-base text-black-text-100 tracking-normal focus:outline-none focus:shadow-none border-b-1 border-grey-100 placeholder:text-(--text-white) placeholder:capitalize"
            required
          />
                    <CustomInput
            label="email"
            type="email"
            name="email"
            autoComplete="email"
            wrapperClassName='w-full'
            labelClassName="font-medium text-xs sm:text-base md:text-lg text-grey-text-200 tracking-[1.6px] mb-2 uppercase"
            inputClassName="h-[35px] sm:h-[45px] md:h-[64px] w-full p-[10px] sm:p-[15px] bg-white rounded-0 text-base text-black-text-100 tracking-normal focus:outline-none focus:shadow-none border-b-1 border-grey-100 placeholder:text-(--text-white) placeholder:capitalize"
            required
          />
          <CustomTextarea
            label="Tell us about your book"
            name="about"
            rows={4}
            wrapperClassName='w-full'
            labelClassName="font-medium text-xs sm:text-base md:text-lg text-grey-text-200 tracking-[1.6px] mb-2 uppercase"
            textareaClassName="w-full p-[10px] sm:p-[15px] bg-white rounded-0 text-base text-black-text-100 tracking-normal focus:outline-none focus:shadow-none border-b-1 border-grey-100 placeholder:text-(--text-white) placeholder:capitalize"
            required
          />
          <CustomBtn type="submit" buttonClass="btn-mid rounded-2xl mt-4! md:mt-0! xl:rounded-[24px] inline-flex items-center h-[50px] xl:h-[70px] 2xl:h-[93px] max-w-full flex-row-reverse justify-center gap-[11px] text-base md:text-lg 2xl:text-[23px]" label="Send Message"/>
        </div>
      </form>
    </>
  )
}