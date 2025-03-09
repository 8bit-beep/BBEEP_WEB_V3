import Router from "./components/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotificationComponent from "./components/common/NotificationComponent";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationComponent />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
