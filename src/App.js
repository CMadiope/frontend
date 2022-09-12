import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <div className='main-text'>
        <h1>hello world</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
