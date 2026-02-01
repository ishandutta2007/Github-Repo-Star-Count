import { Box, Image, Text, useColorModeValue, Link } from "@chakra-ui/react";

const GridView = ({
	image,
	fullname,
	name,
	star,
	date,
	description,
	fork,
	issues,
	rank, // Added rank to props
}) => {
	const cardBg = useColorModeValue("white", "gray.700");
	const textColor = useColorModeValue("gray.600", "gray.400");
	const titleColor = useColorModeValue("gray.800", "white");
	const accentColor = useColorModeValue("blue.500", "blue.300");
	const infoBg = useColorModeValue("gray.100", "gray.600");

	const truncatedDescription =
		description && description.length > 350
			? description.substring(0, 350) + "..."
			: description;

	return (
		<Box
			bg={cardBg}
			padding="5"
			display="flex"
			flexDirection="column"
			borderRadius="lg"
			boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
			borderWidth="1px"
			borderColor={useColorModeValue("gray.200", "gray.600")}
		>
			<Box width="100%" display="flex" alignItems="center">
				<Box width="25%">
					<Image borderRadius="full" boxSize="60px" src={image} alt={name} />
				</Box>
			</Box>
			<Box width="100%" display="flex" flexDirection="column" marginTop="5">
				<Link href={`https://github.com/${fullname}`} isExternal textAlign="left">
					<Text
						display="inline-block"
						textAlign="left"
						fontWeight="bold"
						fontSize="lg"
						color={titleColor}
						overflow="hidden"
						textOverflow="ellipsis"
					>
						{rank}. {fullname}
					</Text>
				</Link>
				<Text
					width="100%"
					display="block"
					textAlign="left"
					fontSize="xs"
					color={textColor}
				>{`Built by ${name} on ${date}`}</Text>
				<Box
					display="inline-block"
					width="100%"
					marginTop="3"
					fontSize="sm"
					textAlign="left"
					overflow="hidden"
					textOverflow="ellipsis"
					color={textColor}
				>
					{truncatedDescription}
				</Box>
			</Box>
			<Box
				width="100%"
				display="flex"
				justifyContent="flex-start"
				marginTop="5"
			>
				<Box
					bg={infoBg}
					color={titleColor}
					py="1"
					px="3"
					borderRadius="md"
					fontWeight="bold"
					fontSize="xs"
					marginRight="2"
				>
					★ {star}
				</Box>
				<Box
					bg={infoBg}
					color={titleColor}
					py="1"
					px="3"
					borderRadius="md"
					fontWeight="bold"
					fontSize="xs"
					marginRight="2"
				>
					Forks {fork}
				</Box>
				<Box
					bg={infoBg}
					color={titleColor}
					py="1"
					px="3"
					borderRadius="md"
					fontWeight="bold"
					fontSize="xs"
				>
					Issues {issues}
				</Box>
			</Box>
		</Box>
	);
};

export { GridView };
