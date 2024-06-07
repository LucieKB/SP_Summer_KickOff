import "./App.css";
import { useState } from "react";
import MapComponent from "./components/MapComponent";
import { createTheme, MantineProvider, rem, TextInput } from "@mantine/core";
import { ElemOne } from "./components/ElemOne";
import { ElemTwo } from "./components/ElemTwo";
import { MiddleSch } from "./components/MiddleSch";
import { Trivia } from "./components/Trivia";
import "@mantine/core/styles.css";

function App() {
  const theme = createTheme({
    colors: {
      // Add your color
      deepBlue: [
        "#eef3ff",
        "#dce4f5",
        "#b9c7e2",
        "#94a8d0",
        "#748dc1",
        "#5f7cb8",
        "#5474b4",
        "#44639f",
        "#39588f",
        "#2d4b81",
      ],
      // or replace default theme color
      blue: [
        "#eef3ff",
        "#dee2f2",
        "#bdc2de",
        "#98a0ca",
        "#7a84ba",
        "#6672b0",
        "#5c68ac",
        "#4c5897",
        "#424e88",
        "#364379",
      ],
    },

    shadows: {
      md: "1px 1px 3px rgba(0, 0, 0, .25)",
      xl: "5px 5px 3px rgba(0, 0, 0, .25)",
    },

    headings: {
      fontFamily: "Roboto, sans-serif",
      sizes: {
        h1: { fontSize: rem(36) },
      },
    },
  });

  const [showTrivia, setShowTrivia] = useState(false);
  const [error, setError] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "Adult") {
      setShowButtons(true);
    } else {
      setError("Invalid Password");
    }
  };

  return (
    <MantineProvider theme={theme}>
      <>
        <h1>Summit Park Summer KickOff</h1>

        <div style={{ display: "flex", marginBottom: "20px" }}>
          <ElemOne />
          <ElemTwo />
          <MiddleSch />
        </div>

        <div className="App">
          {showTrivia ? <Trivia /> : <MapComponent />}
          {showButtons ? (
            <div>
              <button id="map-btn" onClick={() => setShowTrivia(!showTrivia)}>
                {showTrivia ? "Back to Map" : "Trivia Questions"}
              </button>
              <button id="map-btn">
                <a
                  style={{ color: "black" }}
                  href="https://connection-summit-park-seven.vercel.app/"
                >
                  Connections
                </a>
              </button>
            </div>
          ) : (
            <div>
              <TextInput
                label="Password"
                description="Enter password to access to Trivia and Connections"
                placeholder="password"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                error={error}
                width={"fit-content"}
                display=""
              />
              <button
                style={{
                  padding: "6px",
                  border: "black solid 1px",
                  marginTop: "10px",
                  fontSize: "12px",
                  borderRadius: "0px",
                }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </>
    </MantineProvider>
  );
}

export default App;
