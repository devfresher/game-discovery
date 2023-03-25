import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

function App() {
	return (
		<Grid templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}>
			<GridItem area="nav"><NavBar/></GridItem>
			<Show above="lg">
				<GridItem area="aside">Aside</GridItem>
			</Show>
			<GridItem area="main">Main</GridItem>
		</Grid>
	)
}

export default App
