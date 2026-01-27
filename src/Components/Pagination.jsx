import { Box, Button } from "@chakra-ui/react";

const Pagination = ({ onChange, page, total, theme }) => {
    const previous = (
        <button
            style={theme ? {
                backgroundColor: "black",
                border: "1px solid white",
                borderRadius: "7px",
                color: "white",
                padding: "0.5% 2%",
            } : {
                backgroundColor: "teal",
                borderRadius: "7px",
                color: "white",
                padding: "0.5% 2%",
            }}
            disabled={page === 1}
            onClick={() => onChange(-1)}
        >
            Prev
        </button>
    );

    const current = (
        <Button colorScheme={"gray"} color="black">
            {page}
        </Button>
    );

    const next = (
        <button
            style={theme ? {
                backgroundColor: "black",
                border: "1px solid white",
                borderRadius: "7px",
                color: "white",
                padding: "0.5% 2%",
            } : {
                backgroundColor: "teal",
                borderRadius: "7px",
                color: "white",
                padding: "0.5% 2%",
            }}
            disabled={page === Math.floor(total / 40)}
            onClick={() => onChange(1)}
        >
            Next
        </button>
    );

    return (
        <Box display="flex" justifyContent="center" padding="2%">
            <Box width="100%">
                {previous} {current} {next}
            </Box>
        </Box>
    );
};

export { Pagination };
