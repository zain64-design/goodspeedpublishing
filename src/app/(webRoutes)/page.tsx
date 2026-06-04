import Contact from "@/app/_components/webComp/contact/Contact";
import Brands from "@/app/_components/webComp/brands/Brands";
import Story from "@/app/_components/webComp/story/Story";
import FAQ from "@/app/_components/webComp/faq/FAQ";
import Banner from "@/app/_components/webComp/banner/Banner";

export default function Home() {
    return (
        <>
        <Banner />
            <Story />
            <Brands />
            <FAQ/>
            <Contact />
        </>
    )
}