import { SimpleGrid, Text, useToast } from "@chakra-ui/react"
import useGame from "../hooks/useGames"
import { Genre } from "../hooks/useGenre"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"

const gameDummyData = [1, 2, 3, 4, 5, 6]
interface Props {
	selectedGenre: Genre | null
}
const GameGrid = ({ selectedGenre }: Props) => {
	const { games, isLoading } = useGame(selectedGenre)
	console.log(isLoading)

	return (
		<SimpleGrid columns={[1, 2, 3]} spacing={3}>
			{isLoading &&
				gameDummyData.map((dummy) => (
					<GameCardContainer key={dummy}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{!isLoading &&
				games.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			{!isLoading && games.length === 0 && <Text>No games found</Text>}
		</SimpleGrid>
	)
}

export default GameGrid
