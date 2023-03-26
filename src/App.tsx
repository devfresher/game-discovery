import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import { Genre } from "./hooks/useGenre"

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
					<GenreList selected={(genre) => setSelectedGenre(genre)} />
				</GridItem>
			</Show>
			<GridItem area="main" paddingX="10px">
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	)
}

export default App
