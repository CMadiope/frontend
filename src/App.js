import { useState, useRef } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import FocusLock from "react-focus-lock";
import { useOnClockOutSide } from "./hooks";

import { Burger, Menu } from "./components";

function App() {
  const [open, setOpen] = useState(false);

  const node = useRef();
  const menuId = "main-menu";

  useOnClockOutSide(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>

      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

export default App;
