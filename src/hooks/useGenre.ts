import useData from "./useData"

export interface Genre {
	id: number
	name: string
	slug: string
	image_background: string
}

const useGenre = () => {
	const {data, errors, isLoading} = useData<Genre>("/genres")
	return {genres : data, errors, isLoading}
}
export default useGenre
