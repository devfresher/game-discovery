import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
	return (
		<Grid templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}>
			<GridItem area="nav">Nav</GridItem>
			<Show above="lg">
				<GridItem area="aside">Aside</GridItem>
			</Show>
			<GridItem area="main">Main</GridItem>
		</Grid>
	)
}

export default App
