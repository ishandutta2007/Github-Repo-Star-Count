import { Box, Image, Text, useColorModeValue, Link } from "@chakra-ui/react";

const ListView = ({
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
	const infoBg = useColorModeValue("gray.100", "gray.600");

	return (
		<Box
			bg={cardBg}
			margin="1"
			padding="5"
			display="flex"
			justifyContent="space-between"
			borderRadius="lg"
			boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
			borderWidth="1px"
			borderColor={useColorModeValue("gray.200", "gray.600")}
		>
			<Box width="85%">
				<Box width="100%" display="flex" flexDirection="column">
									<Link href={`https://github.com/${fullname}`} isExternal textAlign="left">
										<Text
											display="block"
											textAlign="left"
											fontWeight="bold"
											fontSize="xl"
											color={titleColor}
										>
											{fullname}
										</Text>
									</Link>					<Text
						width="100%"
						display="block"
						textAlign="left"
						fontSize="sm"
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
											{description}
										</Box>				</Box>
				<Box
					width="100%"
					display="flex"
					flexDirection={{
						base: "column",
						sm: "row",
					}}
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
						margin="1"
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
						margin="1"
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
						margin="1"
					>
						Issues {issues}
					</Box>
				</Box>
			</Box>
			<Box width="10%">
				<Image borderRadius="md" src={image} alt={name} />
			</Box>
		</Box>
	);
};

export { ListView };
