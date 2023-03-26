import { SimpleGrid, Text } from "@chakra-ui/react"
import useGame from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"

const gameDummyData = [1, 2, 3, 4, 5, 6]

const GameGrid = () => {
	const { games, isLoading } = useGame()

	return (
		<SimpleGrid columns={[1, 2, 3]} spacing={[3, 10]}>
			{isLoading &&
				games.length === 0 &&
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
