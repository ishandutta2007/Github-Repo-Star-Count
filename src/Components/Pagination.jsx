import { Box, Button, HStack, Text } from "@chakra-ui/react";

const Pagination = ({ onChange, page, total, theme }) => {
	const totalPages = Math.ceil(Math.min(total, 1000) / 60);

	const handlePageClick = (newPage) => {
		if (newPage >= 1 && newPage <= totalPages) {
			onChange(newPage);
		}
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];
		const maxPagesToShow = 5; // Number of page links to show around the current page

		if (totalPages <= 10) {
			// Show all pages if total is 10 or less
			for (let i = 1; i <= totalPages; i++) {
				pageNumbers.push(
					<Button
						key={i}
						colorScheme={page === i ? "blue" : "gray"}
						onClick={() => handlePageClick(i)}
					>
						{i}
					</Button>,
				);
			}
		} else {
			// Show first page
			pageNumbers.push(
				<Button
					key={1}
					colorScheme={page === 1 ? "blue" : "gray"}
					onClick={() => handlePageClick(1)}
				>
					1
				</Button>,
			);

			// Show ellipsis if current page is far from the beginning
			if (page > maxPagesToShow) {
				pageNumbers.push(<Text key="start-ellipsis">...</Text>);
			}

			// Show pages around the current page
			let startPage = Math.max(2, page - Math.floor(maxPagesToShow / 2));
			let endPage = Math.min(
				totalPages - 1,
				page + Math.floor(maxPagesToShow / 2),
			);

			if (page <= maxPagesToShow) {
				startPage = 2;
				endPage = maxPagesToShow;
			}

			if (page >= totalPages - maxPagesToShow) {
				startPage = totalPages - maxPagesToShow;
				endPage = totalPages - 1;
			}

			for (let i = startPage; i <= endPage; i++) {
				pageNumbers.push(
					<Button
						key={i}
						colorScheme={page === i ? "blue" : "gray"}
						onClick={() => handlePageClick(i)}
					>
						{i}
					</Button>,
				);
			}

			// Show ellipsis if current page is far from the end
			if (page < totalPages - maxPagesToShow) {
				pageNumbers.push(<Text key="end-ellipsis">...</Text>);
			}

			// Show last page
			pageNumbers.push(
				<Button
					key={totalPages}
					colorScheme={page === totalPages ? "blue" : "gray"}
					onClick={() => handlePageClick(totalPages)}
				>
					{totalPages}
				</Button>,
			);
		}

		return pageNumbers;
	};

	return (
		<Box display="flex" justifyContent="center" padding="2%">
			<HStack spacing={2}>
				<Button
					disabled={page <= 10}
					onClick={() => handlePageClick(Math.max(1, page - 10))}
				>
					{"<< 10"}
				</Button>
				<Button disabled={page === 1} onClick={() => handlePageClick(page - 1)}>
					Prev
				</Button>

				{renderPageNumbers()}

				<Button
					disabled={page === totalPages}
					onClick={() => handlePageClick(page + 1)}
				>
					Next
				</Button>
				<Button
					disabled={page >= totalPages - 10}
					onClick={() => handlePageClick(Math.min(totalPages, page + 10))}
				>
					{"10 >>"}
				</Button>
			</HStack>
		</Box>
	);
};

export { Pagination };
