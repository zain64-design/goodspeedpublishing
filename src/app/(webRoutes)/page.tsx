import Contact from "@/app/_components/webComp/contact/Contact";
import FAQ from "@/app/_components/webComp/faq/FAQ";

export default function Home() {
    return (
        <>
            <h1 className="text-4xl">Home</h1>
            <FAQ/>
            <Contact/>
        </>
    )
}