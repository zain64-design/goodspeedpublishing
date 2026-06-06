import Contact from "@/app/_components/webComp/contact/Contact";
import Brands from "@/app/_components/webComp/brands/Brands";
import Story from "@/app/_components/webComp/story/Story";
import FAQ from "@/app/_components/webComp/faq/FAQ";
import Banner from "@/app/_components/webComp/banner/Banner";
import Announcement from "@/app/_components/webComp/banner/Announcement";
import Genres from "@/app/_components/webComp/genres/Genres";
import Stats from "../_components/webComp/stats/Stats";

export default function Home() {
    return (
        <>
            <Banner />
            <Announcement />
            {/* <Genres /> */}
            <Stats/>
            <Story />
            <Brands />
            <FAQ />
            <Contact />
        </>
    )
}