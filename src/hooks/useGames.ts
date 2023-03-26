import { Platform } from "../components/PlatformIconList"
import useData from "./useData"

export interface Game {
	id: number
	name: string
	slug: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
}

const useGame = () => {
	const { data, errors, isLoading } = useData<Game>("/games")
	return { games: data, errors, isLoading }
}
export default useGame
