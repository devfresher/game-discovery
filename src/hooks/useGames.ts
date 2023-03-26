import { useEffect, useState } from "react"
import { Platform } from "../components/PlatformIconList"
import apiClient from "../services/apiClient"

export interface Game {
	id: number
	name: string
	slug: string
	background_image: string
	parent_platforms: { platform: Platform }[]
	metacritic: number
}
interface FetchGameResponse {
	count: number
	results: Game[]
}

const useGame = () => {
	const controller = new AbortController()
	const [games, setGames] = useState<Game[]>([])
	const [errors, setErrors] = useState([])

	useEffect(() => {
		apiClient
			.get<FetchGameResponse>("/games", { signal: controller.signal })
			.then(({ data: { results } }) => {
				setGames(results)
				console.log(results)
			})
			.catch((err) => setErrors(err.message))
	}, [])

	return { games, errors }
}
export default useGame
