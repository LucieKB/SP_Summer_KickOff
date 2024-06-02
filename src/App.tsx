import "./App.css";
import MapComponent from "./components/MapComponent";
import { KinderTeam } from "./components/KinderTeam";
import { createTheme, MantineProvider } from "@mantine/core";
import { ElemOne } from "./components/ElemOne";
import { ElemTwo } from "./components/ElemTwo";
import { MiddleSch } from "./components/MiddleSch";

function App() {
  return (
    <MantineProvider>
      <>
        <h1>Summit Park Summer KickOff</h1>
        <p>
          <div style={{ display: "flex" }}>
            <KinderTeam />
            <ElemOne />
            <ElemTwo />
            <MiddleSch />
          </div>
        </p>
        <div className="App">
          <MapComponent />
        </div>
      </>
    </MantineProvider>
  );
}

export default App;
