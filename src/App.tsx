import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import GetUser from "./components/GetUser/GetUser";
import SetUser from "./components/SetUser/SetUser";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GetUser />
        <SetUser />
      </QueryClientProvider>
    </>
  );
}

export default App;
