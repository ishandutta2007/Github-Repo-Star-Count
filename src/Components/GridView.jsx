import { Box, Image, Text } from "@chakra-ui/react";

const GridView = ({
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
      padding="5%"
      margin="3%"
      width="90%"
      display="flex"
      flexDirection="column"
      className={themeChange ? "darkCard" : "lightCard"}
      boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
    >
      <Box width="100%" display="flex">
        <Box width="30%">
          <Image width="100%" src={image} alt={name} />
        </Box>
        <Box
          width="100%"
          paddingLeft="2%"
          display="flex"
          flexDirection="column"
        >
          <Text
            width="100%"
            fontWeight="700"
            color="darkred"
            fontSize="80%"
            display="block"
            textAlign="left"
          >
            {name}
          </Text>
          <Text width="100%" fontWeight="500" display="block" textAlign="left">
            View profile
          </Text>
        </Box>
      </Box>
      <Box width="100%" display="flex" flexDirection="column" marginTop="5%">
        <Text
          width="100%"
          display="inline-block"
          textAlign="left"
          fontWeight="bold"
          fontSize="80%"
          textDecoration="underline"
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
      <Box width="100%" display="flex" justifyContent="left" marginTop="5%">
        <Box
          border="1px solid green"
          backgroundColor={themeChange ? "gray.200" : "gray.100"}
          color={themeChange ? "black" : "blue"}
          padding="0% 3%"
          fontWeight="bold"
          fontSize="70%"
          marginRight="2%"
        >
          ★ {star}
        </Box>
        <Box
          border="1px solid green"
          backgroundColor={themeChange ? "gray.200" : "gray.100"}
          color={themeChange ? "black" : "blue"}
          padding="0% 3%"
          fontWeight="bold"
          fontSize="70%"
          marginRight="2%"
        >
          Forks {fork}
        </Box>
        <Box
          border="1px solid green"
          backgroundColor={themeChange ? "gray.200" : "gray.100"}
          color={themeChange ? "black" : "blue"}
          padding="0% 3%"
          fontWeight="bold"
          fontSize="70%"
        >
          Issues {issues}
        </Box>
      </Box>
    </Box>
  );
};

export { GridView };
