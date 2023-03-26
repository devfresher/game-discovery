import { Center, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/imageUrl"

const GenreList = () => {
	const { genres, isLoading } = useGenre()

	if (isLoading) {
		return (
			<Center paddingY="10">
				<Spinner key="loading-spinner" />
			</Center>
		)
	}

	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							borderRadius={5}
							boxSize="40px"
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}

export default GenreList
