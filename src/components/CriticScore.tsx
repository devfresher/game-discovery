import { Badge } from "@chakra-ui/react"

interface Props {
	score: number
}
const CriticScore = ({ score }: Props) => {
	return (
		<Badge colorScheme={score >= 75 ? "green" : "red"} fontSize={14} paddingX={2}>
			{score}
		</Badge>
	)
}

export default CriticScore
