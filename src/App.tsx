import Background from "./components/Background";
import "./styles.css";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { PaletteColors } from "./theme/palette";
import { theme } from "./theme";
import SearchBox from "./components/SearchBox";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Background>
          <Box gap={2} display="flex" flexDirection="column">
            <Typography
              color={PaletteColors.TEXT_2}
              variant="h2"
              textAlign="center"
              fontWeight={500}
            >
              Hello!
            </Typography>
            <SearchBox />
          </Box>
        </Background>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
