import {
	Box,
	Button,
	Text,
	useColorMode,
	useColorModeValue,
	VStack, // Import VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams
import { BsGridFill, BsListUl, BsMoonFill, BsSunFill } from "react-icons/bs"; // Import Icons
import { GridView } from "../Components/GridView";
import { ListView } from "../Components/ListView";
import { Pagination } from "../Components/Pagination";
import { getRepos } from "../Redux/action";

const GitStar = () => {
	const dispatch = useDispatch();
	const repos = useSelector((store) => store.repos);
	const { colorMode, toggleColorMode } = useColorMode();
	const [searchParams, setSearchParams] = useSearchParams(); // Get search params

	const [view, setView] = useState(false);
	const [page, setPage] = useState(Number(searchParams.get("page")) || 1); // Get page from URL or default to 1

	const changeView = () => {
		setView(!view);
	};

	const handlePageChange = (newPage) => {
		const totalFromStorage = Number(localStorage.getItem("total")) || 0;
		const maxPossibleResults = Math.min(totalFromStorage, 1000);
		const maxPages = Math.ceil(maxPossibleResults / 60);

		if (newPage > maxPages && maxPages > 0) { // Also check if maxPages is valid
			alert(`No more results found. GitHub API limits results to the first ${maxPossibleResults} items. There are only ${maxPages} pages available.`);
			return;
		}

		if (newPage > 0) {
			setPage(newPage);
			setSearchParams({ page: newPage });
		}
	};

	useEffect(() => {
		// Update page state if URL changes
		const urlPage = Number(searchParams.get("page")) || 1;
		if (urlPage !== page) {
			setPage(urlPage);
		}
	}, [searchParams, page]);

	useEffect(() => {
		dispatch(getRepos(page));
	}, [dispatch, page]);

	useEffect(() => {
		if (repos.length === 0) {
			dispatch(getRepos(page));
		}
	}, [dispatch, repos, repos.length, page]);

	const bg = useColorModeValue("gray.50", "gray.800");
	const color = useColorModeValue("gray.800", "white");
	const titleBg = useColorModeValue("white", "gray.700");

	return (
		<Box
			bgGradient={useColorModeValue(
				"linear(to-br, gray.50, gray.100)",
				"linear(to-br, gray.800, gray.900)",
			)}
			color={color}
			minH="100vh"
		>
			<Box>
				<Text
					bgGradient={useColorModeValue(
						"linear(to-r, blue.400, purple.500)", // Light mode gradient
						"linear(to-r, teal.200, blue.400)",   // Dark mode gradient (changed colors)
					)}
					backgroundClip="text"
					fontWeight="extrabold"
					fontSize={{
						base: "3xl",
						sm: "4xl",
						md: "5xl",
					}}
					letterSpacing="wide"
					py="4"
					width={{ base: "90%", sm: "60%", md: "40%" }}
					margin="auto"
					mt="8"
					mb="8"
					boxShadow="dark-lg"
					borderRadius="full"
					border="2px solid"
					borderColor={useColorModeValue("blue.300", "gray.600")}
				>
					Git Stars
				</Text>
			</Box>
			{/* Floating action buttons */}
			<VStack
				position="fixed"
				bottom="4"
				right="4"
				spacing="4"
				zIndex="overlay"
			>
				<Button
					colorScheme={useColorModeValue("blue", "gray")}
					onClick={() => changeView()}
				>
					{view ? <BsGridFill /> : <BsListUl />}
				</Button>
				<Button
					colorScheme={useColorModeValue("pink", "purple")}
					onClick={toggleColorMode}
				>
					{colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
				</Button>
			</VStack>
			<Box>
				{repos.length === 0 ? (
					<Box>Loading...</Box>
				) : view ? (
					<Box
						display="grid"
						gridTemplateColumns={{ base: "repeat(1, 1fr)" }}
						width="80%"
						margin="auto"
						gap={4}
					>
						{repos.map((item, index) => {
							return (
								<ListView
									key={item.id}
									rank={(page - 1) * 60 + index + 1} // Calculate and pass the rank
									image={item.owner.avatar_url}
									fullname={item.full_name}
									name={item.name}
									star={item.stargazers_count}
									date={item.updated_at}
									description={item.description}
									fork={item.forks_count}
									issues={item.open_issues_count}
								/>
							);
						})}
					</Box>
				) : (
					<Box
						display="grid"
						gridTemplateColumns={{
							base: "repeat(1, 1fr)",
							sm: "repeat(2, 1fr)",
							md: "repeat(3, 1fr)",
							lg: "repeat(3, 1fr)",
							xl: "repeat(3, 1fr)",
						}}
						width="95%"
						margin="auto"
						gap={4}
					>
						{repos.map((item, index) => {
							return (
								<GridView
									key={item.id}
									rank={(page - 1) * 60 + index + 1} // Calculate and pass the rank
									image={item.owner.avatar_url}
									fullname={item.full_name}
									name={item.name}
									star={item.stargazers_count}
									date={item.updated_at}
									description={item.description}
									fork={item.forks_count}
									issues={item.open_issues_count}
								/>
							);
						})}
					</Box>
				)}
			</Box>
			<Box>
				<Pagination
					onChange={handlePageChange}
					page={page}
					total={localStorage.getItem("total")}
					theme={colorMode === "dark"}
				/>
			</Box>
		</Box>
	);
};

export { GitStar };
