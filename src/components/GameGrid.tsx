import { GridItem, SimpleGrid } from "@chakra-ui/react"
import useGame from "../hooks/useGames"
import GameCard from "./GameCard"

const GameGrid = () => {
	const { games } = useGame()
	return (
		<SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} spacing={10}>
			{games.map((game) => (
				<GridItem key={game.id}>
					<GameCard game={game} />
				</GridItem>
			))}
		</SimpleGrid>
	)
}

export default GameGrid
