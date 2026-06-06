import Text from '@/app/_components/ui/Text'
import { CurveLine } from '@/app/_components/ui/Icons'
import { GenreItem } from '@/app/_types'
import { GenresData } from '@/app/_components/webComp/genres/GenresData'
import NavTabs from '@/app/_components/ui/NavTabs'


async function getGenres(): Promise<GenreItem[]> {
    // const res = await fetch('https://api.example.com/services', {
    //     next: { revalidate: 3600 }
    // })
    // return res.json()
    return GenresData
}

export default async function Genres() {
  const genres = await getGenres()

  return (
    <section className="py-6.25 md:py-12.5">
        <div className="md:container mx-auto overflow-hidden bg-white rounded-[30px] md:rounded-[62px] p-3.5 sm:p-5 lg:p-8 xl:p-10 2xl:p-13 4xl:p-15.75 text-center">
            <Text as="span" className="text-[28px] text-mid font-medium inline-flex items-center justify-center relative mb-8.25 z-1"> <CurveLine className="stroke-primary w-16 h-16 absolute z-[-1] block right-[calc(100%-220px)] -top-2.5" /> From fresh voices to powerful stories!</Text>
            <Text as="h2" className="text-black text-center capitalize tracking-[-4.8px] font-black leading-normal mb-[45px] text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 2xl:mb-8.75">Range of Genres We Cater</Text>
            <NavTabs className="ct-tabs" tabs={genres} />
        </div>
    </section>
  )
}