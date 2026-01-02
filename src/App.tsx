import Router from "./components/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/index.css";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    );
};

export default App;
