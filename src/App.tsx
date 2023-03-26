import { Grid, GridItem, Show } from "@chakra-ui/react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"

function App() {
	return (
		<Grid
			paddingX={"10px"}
			templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside">
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<GameGrid />
			</GridItem>
		</Grid>
	)
}

export default App
