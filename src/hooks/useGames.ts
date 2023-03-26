import { Platform } from "../components/PlatformIconList"
import useData from "./useData"
import { Genre } from "./useGenre"

export interface Game {
	id: number
	name: string
	slug: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
}

const useGame = (selectedGenre: Genre | null) => {
	const { data, errors, isLoading } = useData<Game>(
		"/games",
		{
			params: { genres: selectedGenre?.id },
		},
		[selectedGenre]
	)
	return { games: data, errors, isLoading }
}
export default useGame
