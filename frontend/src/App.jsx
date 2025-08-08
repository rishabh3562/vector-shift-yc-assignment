import { PipelineToolbar } from "./components/ui/PipelineToolbar";
import { PipelineCanvas } from "./components/workspace/PipelineCanvas";
import { SubmitButton } from "./components/ui/SubmitButton";
import { Tutorial } from "./components/ui/Tutorial";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { useTheme } from "./hooks/useTheme";
import { useTutorial } from "./hooks/useTutorial";
import { ToastContainer } from "react-toastify";
import { TOAST_CONFIG } from "./constants/ui";
import "react-toastify/dist/ReactToastify.css";
import "./styles/tutorial.css";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { isFirstVisit, onComplete } = useTutorial();

  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <PipelineToolbar />
      <PipelineCanvas />
      <SubmitButton />
      <Tutorial
        isFirstVisit={isFirstVisit}
        onComplete={onComplete}
      />
      <ToastContainer
        {...TOAST_CONFIG}
        theme={theme}
      />
    </div>
  );
}

export default App;
