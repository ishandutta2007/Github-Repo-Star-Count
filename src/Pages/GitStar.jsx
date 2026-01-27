import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridView } from "../Components/GridView";
import { ListView } from "../Components/ListView";
import { Pagination } from "../Components/Pagination";
import { getRepos } from "../Redux/action";

const GitStar = () => {
	const dispatch = useDispatch();
	const repos = useSelector((store) => store.repos);

	const [view, setView] = useState(false);
	const [page, setPage] = useState(1);
	const [theme, setTheme] = useState(false);

	const changeView = () => {
		setView(!view);
	};

	const handleChangeTheme = () => {
		setTheme(!theme);
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

	return (
		<Box className={theme ? "dark" : "light"}>
			<Box>
				<Text
					className={theme ? "darkText" : "lightText"}
					fontWeight="bold"
					fontSize={{
						base: "150%",
						sm: "170%",
						md: "200%",
						lg: "300%",
						xl: "300%",
					}}
					padding="1%"
					width="40%"
					margin="auto"
					marginTop="1%"
					boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
				>
					Git Stars
				</Text>
			</Box>
			<Box
				padding="2%"
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
						colorScheme={theme ? "black" : "blue"}
						border="1px solid white"
						onClick={() => changeView()}
					>
						{view ? "Grid View" : "List View"}
					</Button>
					<Button
						colorScheme={theme ? "black" : "pink"}
						border="1px solid white"
						onClick={() => handleChangeTheme()}
					>
						{theme ? "Light mode" : "Dark mode"}
					</Button>
				</Box>
			</Box>
			<Box>
				{repos.length === 0 ? (
					<Box>Loading...</Box>
				) : view ? (
					<Box
						display="grid"
						gridTemplateColumns={{ base: "repeat(1,100%)" }}
						width="80%"
						margin="auto"
					>
						{repos.map((item) => {
							return (
								<ListView
									key={item.id}
									image={item.owner.avatar_url}
									fullname={item.full_name}
									name={item.name}
									star={item.stargazers_count}
									date={item.updated_at}
									description={item.description}
									fork={item.forks_count}
									issues={item.open_issues_count}
									themeChange={theme}
								/>
							);
						})}
					</Box>
				) : (
					<Box
						display="grid"
						gridTemplateColumns={{
							base: "repeat(1,100%)",
							sm: "repeat(2,50%)",
							md: "repeat(3,33%)",
							lg: "repeat(4,25%)",
							xl: "repeat(4,25%)",
						}}
						width="95%"
						margin="auto"
					>
						{repos.map((item) => {
							return (
								<GridView
									key={item.id}
									image={item.owner.avatar_url}
									fullname={item.full_name}
									name={item.name}
									star={item.stargazers_count}
									date={item.updated_at}
									description={item.description}
									fork={item.forks_count}
									issues={item.open_issues_count}
									themeChange={theme}
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
					theme={theme}
				/>
			</Box>
		</Box>
	);
};

export { GitStar };
