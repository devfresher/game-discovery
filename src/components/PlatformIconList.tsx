import { HStack, Icon, Text } from "@chakra-ui/react"
import { AiFillWindows, AiFillAndroid } from "react-icons/ai"
import { BsPlaystation, BsGlobe } from "react-icons/bs"
import { SiNintendo, SiApple, SiLinux, SiXbox } from "react-icons/si"
import { MdPhoneIphone } from "react-icons/md"
import { IconType } from "react-icons"

export interface Platform {
	id: number
	name: string
	slug: string
}

interface Props {
	platforms: Platform[]
}
const iconMapper: {[key:string]: IconType} = {
	pc: AiFillWindows,
	android: AiFillAndroid,
	xbox: SiXbox,
	playstation: BsPlaystation,
	web: BsGlobe,
	nintendo: SiNintendo,
	mac: SiApple,
	linux: SiLinux,
	ios: MdPhoneIphone,
}
const PlatformIconList = ({ platforms }: Props) => {
	return (
		<HStack>
			{platforms.map((platform) => (
				<Icon color={"gray.500"} as={iconMapper[platform.slug]} key={platform.id}>
					{platform.name} - {platform.slug}
				</Icon>
			))}
		</HStack>
	)
}

export default PlatformIconList
