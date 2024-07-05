import { getAnimeResponse } from "@/app/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({ params }) => {
    const { keyword } = params

    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    // const searchAnime = await response.json()

    

    return (
        <>
        {/* anime terpopuler */}
        <section>
            <Header title={`Pencarian untuk ${decodedKeyword}...`} />
            <AnimeList api={searchAnime} />
        </section>
        </>
    )
}

export default Page
