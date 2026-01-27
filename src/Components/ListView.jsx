import { Box, Image, Text } from "@chakra-ui/react";

const ListView = ({
	image,
	fullname,
	name,
	star,
	date,
	description,
	fork,
	issues,
	themeChange,
}) => {
	return (
		<Box
			margin="1%"
			padding="5%"
			display="flex"
			justifyContent="space-between"
			className={themeChange ? "darkCard" : "lightCard"}
			boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
		>
			<Box width="70%">
				<Box width="100%" display="flex" flexDirection="column">
					<Text
						width="100%"
						display="block"
						textAlign="left"
						fontWeight="bold"
						textDecoration="underline"
					>
						{fullname}
					</Text>
					<Text
						width="100%"
						display="block"
						textAlign="left"
						fontSize="60%"
					>{`Built by ${name} on ${date}`}</Text>
					<Box
						display="inline-block"
						width="100%"
						whiteSpace="pre"
						marginTop="2%"
						fontSize="80%"
						textAlign="left"
						overflow="hidden"
						textOverflow="ellipsis"
					>
						{description}
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					flexDirection={{
						base: "column",
						sm: "row",
						md: "row",
						lg: "row",
						xl: "row",
					}}
					justifyContent="left"
					marginTop="5%"
				>
					<Box
						border="1px solid green"
						backgroundColor={themeChange ? "red.1000" : "gray.100"}
						color={themeChange ? "white" : "blue"}
						padding="0% 3%"
						fontWeight="bold"
						fontSize="70%"
						margin="2%"
					>
						★ {star}
					</Box>
					<Box
						border="1px solid green"
						backgroundColor={themeChange ? "red.1000" : "gray.100"}
						color={themeChange ? "white" : "blue"}
						padding="0% 3%"
						fontWeight="bold"
						fontSize="70%"
						margin="2%"
					>
						Forks {fork}
					</Box>
					<Box
						border="1px solid green"
						backgroundColor={themeChange ? "red.1000" : "gray.100"}
						color={themeChange ? "white" : "blue"}
						padding="0% 3%"
						fontWeight="bold"
						fontSize="70%"
						margin="2%"
					>
						Issues {issues}
					</Box>
				</Box>
			</Box>
			<Box width="10%">
				<Image src={image} alt={name} />
			</Box>
		</Box>
	);
};

export { ListView };
