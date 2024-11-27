import MainRouter from "./routes/MainRouter";
import { RepositoriesContextProvider } from "./repositories-context/RepositoriesContext";
import { validateEnvironment } from "./config/env";
import { Notification } from "./components/MessageAlert/Notification";

validateEnvironment();

export default function App() {
  return (
      <RepositoriesContextProvider>
        <Notification title="Página en construcción. 👍" />
        <MainRouter />
      </RepositoriesContextProvider>
  );
}
