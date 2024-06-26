import { Card, Typography } from "@mui/material";
import { PaletteColors } from "../../theme/palette";
import SearchInput from "../SearchInput";

const SearchBox: React.FC = () => {
  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        color={PaletteColors.TEXT}
        fontWeight={500}
        variant="h4"
        textAlign="center"
        mb={2}
      >
        Search a city!
      </Typography>
      <SearchInput />
    </Card>
  );
};

export default SearchBox;
