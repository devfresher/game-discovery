import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
	return (
		<HStack justify="space-between" paddingX={2}>
			<Image src={logo} boxSize={20} />
			<ColorModeSwitch />
		</HStack>
	)
}

export default NavBar
