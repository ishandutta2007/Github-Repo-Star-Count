import {
	Box,
	Button,
	Text,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridView } from "../Components/GridView";
import { ListView } from "../Components/ListView";
import { Pagination } from "../Components/Pagination";
import { getRepos } from "../Redux/action";

const GitStar = () => {
	const dispatch = useDispatch();
	const repos = useSelector((store) => store.repos);
	const { colorMode, toggleColorMode } = useColorMode();

	const [view, setView] = useState(false);
	const [page, setPage] = useState(1);

	const changeView = () => {
		setView(!view);
	};

	const handlePageChange = (n) => {
		setPage((init) => init + n);
	};

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
		<Box bg={bg} color={color} minH="100vh">
			<Box>
				<Text
					bg={titleBg}
					fontWeight="bold"
					fontSize={{
						base: "2xl",
						sm: "3xl",
						md: "4xl",
					}}
					py="4"
					width={{ base: "90%", sm: "60%", md: "40%" }}
					margin="auto"
					mt="8"
					mb="8"
					boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
					borderRadius="lg"
				>
					Git Stars
				</Text>
			</Box>
			<Box
				padding="4"
				display="flex"
				justifyContent="space-between"
				width="95%"
				margin="auto"
			>
				<Box
					display="flex"
					width={{ base: "60%", sm: "40%", md: "30%", lg: "20%", xl: "20%" }}
					justifyContent="space-around"
				>
					<Button
						colorScheme={useColorModeValue("blue", "gray")}
						onClick={() => changeView()}
					>
						{view ? "Grid View" : "List View"}
					</Button>
					<Button
						colorScheme={useColorModeValue("pink", "purple")}
						onClick={toggleColorMode}
					>
						{colorMode === "light" ? "Dark mode" : "Light mode"}
					</Button>
				</Box>
			</Box>
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
