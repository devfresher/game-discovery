import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"

const NavBar = () => {
  return (
    <HStack justify='space-between'>
        <Image src={logo} boxSize={20}/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar