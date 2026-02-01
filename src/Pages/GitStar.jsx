import {
	Box,
	Button,
	Text,
	useColorMode,
	useColorModeValue,
	VStack, // Import VStack
	Select, // Import Select
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams
import { BsGridFill, BsListUl, BsMoonFill, BsSunFill } from "react-icons/bs"; // Import Icons
import { GridView } from "../Components/GridView";
import { ListView } from "../Components/ListView";
import { Pagination } from "../Components/Pagination";
import { getRepos } from "../Redux/action";

const LANGUAGES = [
	{ value: "", label: "All Languages" },
	{ value: "javascript", label: "JavaScript" },
	{ value: "python", label: "Python" },
	{ value: "java", label: "Java" },
	{ value: "go", label: "Go" },
	{ value: "typescript", label: "TypeScript" },
	{ value: "c", label: "C" },
	{ value: "cpp", label: "C++" },
	{ value: "ruby", label: "Ruby" },
	{ value: "php", label: "PHP" },
	{ value: "swift", label: "Swift" },
	{ value: "kotlin", label: "Kotlin" },
	{ value: "rust", label: "Rust" },
];

const GitStar = () => {
	const dispatch = useDispatch();
	const repos = useSelector((store) => store.repos);
	const { colorMode, toggleColorMode } = useColorMode();
	const [searchParams, setSearchParams] = useSearchParams(); // Get search params

	const [view, setView] = useState(false);
	const [page, setPage] = useState(Number(searchParams.get("page")) || 1); // Get page from URL or default to 1
	const [selectedLanguage, setSelectedLanguage] = useState(
		searchParams.get("lang") || "",
	); // Get language from URL or default to empty

	const changeView = () => {
		setView(!view);
	};

	const handleLanguageChange = (event) => {
		const newLanguage = event.target.value;
		setSelectedLanguage(newLanguage);
		setPage(1); // Reset to first page when language changes
		setSearchParams({ page: 1, lang: newLanguage }); // Update URL
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
			setSearchParams({ page: newPage, lang: selectedLanguage });
		}
	};

	useEffect(() => {
		// Update page state if URL changes
		const urlPage = Number(searchParams.get("page")) || 1;
		if (urlPage !== page) {
			setPage(urlPage);
		}
		// Update language state if URL changes
		const urlLang = searchParams.get("lang") || "";
		if (urlLang !== selectedLanguage) {
			setSelectedLanguage(urlLang);
		}
	}, [searchParams, page, selectedLanguage]);

	useEffect(() => {
		dispatch(getRepos(page, selectedLanguage));
	}, [dispatch, page, selectedLanguage]);

	useEffect(() => {
		if (repos.length === 0 && page === 1) { // Only fetch if repos are empty and on first page to avoid double fetch on language change
			dispatch(getRepos(page, selectedLanguage));
		}
	}, [dispatch, repos, repos.length, page, selectedLanguage]);

	const bg = useColorModeValue("gray.50", "gray.800");
	const color = useColorModeValue("gray.800", "white");

	return (
		<Box
			bgGradient={useColorModeValue(
				"linear(to-br, gray.50, gray.100)",
				"linear(to-br, gray.800, gray.900)",
			)}
			color={color}
			minH="100vh"
		>
			<VStack
				width={{ base: "90%", sm: "60%", md: "40%" }}
				margin="auto"
				mt="8"
				mb="8"
				spacing={4}
			>
				<Text
					bgGradient={useColorModeValue(
						"linear(to-r, blue.400, purple.500)", // Light mode gradient
						"linear(to-r, teal.200, blue.400)", // Dark mode gradient (changed colors)
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
					width="100%" // Ensure text takes full width of VStack
					textAlign="center" // Center text within its own width
					boxShadow="dark-lg"
					borderRadius="full"
					border="2px solid"
					borderColor={useColorModeValue("blue.300", "gray.600")}
				>
					Github Repo Stars
				</Text>
				<Select
					placeholder="Select Language"
					value={selectedLanguage}
					onChange={handleLanguageChange}
					bg={useColorModeValue("white", "gray.700")}
					borderColor={useColorModeValue("gray.200", "gray.600")}
					_hover={{
						borderColor: useColorModeValue("blue.300", "purple.300"),
					}}
					width="100%" // Ensure select takes full width of VStack
					maxWidth="xs" // Limit max width for better appearance
				>
					{LANGUAGES.map((lang) => (
						<option key={lang.value} value={lang.value}>
							{lang.label}
						</option>
					))}
				</Select>
			</VStack>
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
