import { Button, Center, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/imageUrl"

interface Props {
	onSelectGenre: (genre: Genre | null) => void
	selectedGenre: Genre | null
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
						<Button
							fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
							variant="link"
							fontSize="lg"
							onClick={() => onSelectGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}

export default GenreList
