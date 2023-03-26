import { Button, Center, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/imageUrl"

interface Props {
	selected: (genre: Genre | null) => void
}
const GenreList = ({ selected }: Props) => {
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
						<Button variant="link" fontSize="lg" onClick={() => selected(genre)}>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}

export default GenreList
