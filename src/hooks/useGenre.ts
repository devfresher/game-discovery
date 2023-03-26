import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"

export interface Genre {
	id: number
	name: string
	slug: string
	background_image: string
}
interface FetchGenreResponse {
	count: number
	results: Genre[]
}

const useGenre = () => {
	const controller = new AbortController()
	const [genres, setGenres] = useState<Genre[]>([])
	const [errors, setErrors] = useState([])
    const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		apiClient
			.get<FetchGenreResponse>("/games", { signal: controller.signal })
			.then(({ data: { results } }) => {
				setGenres(results)
				console.log(results)
			})
			.catch((err) => setErrors(err.message))
            .finally(() => setLoading(false))
	}, [])

	return { genres, errors, isLoading }
}
export default useGenre
