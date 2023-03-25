import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

	return (
		<HStack paddingX={4}>
			<Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
			<Text>Dark mode</Text>
		</HStack>
	)
}

export default ColorModeSwitch
