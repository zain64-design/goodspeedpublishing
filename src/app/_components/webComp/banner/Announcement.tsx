import Text from "@/app/_components/ui/Text";
import Badge from "@/app/_components/ui/Badge";

export default function Announcement() {
  return (
    <>
      <section className="py-4 xl:pt-9 xl:pb-12.5">
        <div className="mx-auto px-4 md:container">
          <Text
            as="h2"
            animate
            className="text-mid text-center text-[20px] leading-9 font-bold tracking-[-1.44px] sm:text-[28px] sm:leading-12 md:text-[30px] md:leading-14 lg:text-[38px] lg:leading-16 xl:text-[48px] xl:leading-18"
          >
            Unlock Your{" "}
            <Badge label="35% Discount" variant="secondary" className="" />{" "}
            Claim Your Plan Now Now and share your story{" "}
            <Badge label="beautifully and boldly" variant="primary" />
          </Text>
        </div>
      </section>
      <hr className="border-mid mx-auto my-6 border-t px-4 md:container md:my-8 xl:my-12.5" />
    </>
  );
}
