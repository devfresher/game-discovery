import { SimpleGrid } from "@chakra-ui/react"
import useGame from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"

const GameGrid = () => {
	const { games, isLoading } = useGame()
	const gameDummies = [1, 2, 3, 4, 5, 6]
	return (
		<SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={[3, 10]}>
			{isLoading &&
				gameDummies.map((dummy) => (
					<GameCardContainer key={dummy}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{games.map((game) => (
				<GameCardContainer key={game.id}>
					<GameCard game={game} />
				</GameCardContainer>
			))}
		</SimpleGrid>
	)
}

export default GameGrid
