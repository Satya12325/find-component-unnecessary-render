import { useRenderCount } from "./hooks/useRenderCount";
import "./styles.css";

export default function App() {
  const render = useRenderCount();
  console.log(render);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
