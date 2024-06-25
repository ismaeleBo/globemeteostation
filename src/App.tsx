import Background from "./components/Background";
import "./styles.css";
import { ThemeProvider, Typography } from "@mui/material";
import { PaletteColors } from "./theme/palette";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Typography
          color={PaletteColors.TEXT_2}
          variant="h2"
          textAlign="center"
          fontWeight={500}
        >
          Hello!
        </Typography>
      </Background>
    </ThemeProvider>
  );
};

export default App;
