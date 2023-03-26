import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"

interface FetchDataResponse<T> {
	count: number
	results: T[]
}

const useData = <T>(endpoint: string) => {
	const controller = new AbortController()
	const [data, setData] = useState<T[]>([])
	const [errors, setErrors] = useState("")
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		apiClient
			.get<FetchDataResponse<T>>(endpoint, { signal: controller.signal })
			.then(({ data: { results } }) => {
				setData(results)
			})
			.catch((err) => setErrors(err.message))
			.finally(() => setLoading(false))
	}, [])

	return { data, errors, isLoading }
}
export default useData
