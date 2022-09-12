import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger } from "./components";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Burger open={open} setOpen={setOpen} aria-controls={menuId}  />

      <div className='main-text'>
        <h1>hello world</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
