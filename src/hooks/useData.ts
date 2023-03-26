import { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"

interface FetchDataResponse<T> {
	count: number
	results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
	const controller = new AbortController()
	const [data, setData] = useState<T[]>([])
	const [errors, setErrors] = useState("")
	const [isLoading, setLoading] = useState(false)

	useEffect(
		() => {
			setLoading(true)
			apiClient
				.get<FetchDataResponse<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then(({ data: { results } }) => {
					setData(results)
					setLoading(false)
				})
				.catch((err) => {
					setErrors(err.message)
					setLoading(false)
				})
				// .finally(() => setLoading(false))
		},
		deps ? [...deps] : []
	)

	return { data, errors, isLoading }
}
export default useData
