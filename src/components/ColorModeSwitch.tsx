import { Button, HStack, Icon, Switch, Text, useColorMode } from "@chakra-ui/react"
import { MdLightMode } from "react-icons/md"
import { MdDarkMode } from "react-icons/md"

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Button onClick={toggleColorMode}>
			<Icon as={colorMode === "dark" ? MdLightMode : MdDarkMode}></Icon>
		</Button>
	)
}

export default ColorModeSwitch
