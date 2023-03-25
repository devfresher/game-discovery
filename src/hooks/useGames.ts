import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"

interface Game {
	id: number
	name: string
	slug: string
	background_image: string
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
			.then(({ data: { results } }) => setGames(results))
			.catch((err) => setErrors(err.message))
	}, [])

	return { games, errors }
}
export default useGame
