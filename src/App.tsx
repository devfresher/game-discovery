import { Grid, GridItem, Show } from "@chakra-ui/react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"

function App() {
	return (
		<Grid
			templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
			templateColumns={{
				base: "1fr",
				lg: "20% 1fr",
			}}
		>
			<GridItem area="nav" mb={3}>
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX="10px">
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main" paddingX='10px'>
				<GameGrid />
			</GridItem>
		</Grid>
	)
}

export default App
