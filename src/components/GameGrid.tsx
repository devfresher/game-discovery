import useGame from "../hooks/useGames"

const GameGrid = () => {
	const { games, errors } = useGame()
	return (
		<ul>
			{games.map((game) => (
				<li key={game.id}>{game.name}</li>
			))}
		</ul>
	)
}

export default GameGrid
