import HomePage from "../components/HomePage"
import { PaginationProvider } from "../components/PaginationContext.jsx";

export default function Home() {
    return(
        <div className="flex flex-col">
            <PaginationProvider>
            <HomePage />
            </PaginationProvider>
        </div>
    );
}