import Contact from "@/app/_components/webComp/contact/Contact";
import Brands from "@/app/_components/webComp/brands/Brands";
import Story from "@/app/_components/webComp/story/Story";
import FAQ from "@/app/_components/webComp/faq/FAQ";

export default function Home() {
    return (
        <>
            <FAQ/>
            <Story />
            <Brands />
            <Contact />
        </>
    )
}