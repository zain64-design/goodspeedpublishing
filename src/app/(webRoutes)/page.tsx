import Contact from "@/app/_components/webComp/contact/Contact";
import Brands from "@/app/_components/webComp/brands/Brands";
import Story from "@/app/_components/webComp/story/Story";
import FAQ from "@/app/_components/webComp/faq/FAQ";
import Banner from "@/app/_components/webComp/banner/Banner";
import Announcement from "@/app/_components/webComp/banner/Announcement";
import Stats from "@/app/_components/webComp/stats/Stats";
import Author from "@/app/_components/webComp/author/Author";
import Portfolio from "@/app/_components/webComp/portfolio/Portfolio";
import Illustration from "@/app/_components/webComp/illustration/Illustration";
import Packages from "@/app/_components/webComp/packages/Packages";
import Genres from "@/app/_components/webComp/genres/Genres";
export default function Home() {
  return (
    <>
      <Banner />
      <Announcement />
      <Author />
      <Genres />
      <Story />
      <Portfolio />
      <Illustration />
      <Brands />
      <Packages />
      <Stats />
      <FAQ />
      <Contact />
    </>
  );
}
