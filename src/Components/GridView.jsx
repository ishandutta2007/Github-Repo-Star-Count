import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";

const GridView = ({
	image,
	fullname,
	name,
	star,
	date,
	description,
	fork,
	issues,
}) => {
	const cardBg = useColorModeValue("white", "gray.700");
	const textColor = useColorModeValue("gray.600", "gray.400");
	const titleColor = useColorModeValue("gray.800", "white");
	const accentColor = useColorModeValue("blue.500", "blue.300");
	const infoBg = useColorModeValue("gray.100", "gray.600");

	return (
		<Box
			bg={cardBg}
			padding="5"
			margin="2"
			width="auto"
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
				<Text
					display="inline-block"
					textAlign="left"
					fontWeight="bold"
					fontSize="lg"
					color={titleColor}
					whiteSpace="pre"
					overflow="hidden"
					textOverflow="ellipsis"
				>
					{fullname}
				</Text>
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
					whiteSpace="pre"
					marginTop="3"
					fontSize="sm"
					textAlign="left"
					overflow="hidden"
					textOverflow="ellipsis"
					color={textColor}
				>
					{description}
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
