import Background from "./components/Background";
import "./styles.css";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { PaletteColors } from "./theme/palette";
import { theme } from "./theme";
import SearchBox from "./components/SearchBox";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
