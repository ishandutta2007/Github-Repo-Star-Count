import { Route, Routes } from "react-router-dom"
import { GitStar } from "./Pages/GitStar";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<GitStar />} />
        </Routes>
    );
};

export { MainRoute };