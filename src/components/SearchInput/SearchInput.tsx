import { Autocomplete, TextField, Typography } from "@mui/material";
import { PaletteColors } from "../../theme/palette";
import { GetLocationsQueryResponseItem, Location } from "../../api/types";
import { useLazyGetLocationsQuery } from "../../api";
import initialLocations from "../../static/initialLocations.json";
import GenericErrorMessage from "../GenericErrorMessage";

interface SearchInputProps {
  onSelectLocation: (location: Location) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSelectLocation }) => {
  const [getLocationQuery, { data: listOptions, isFetching, isError }] =
    useLazyGetLocationsQuery();

  const initialOptions = initialLocations as GetLocationsQueryResponseItem[];

  return (
    <>
      <Autocomplete
        id="city-input"
        autoComplete
        options={listOptions || initialOptions}
        sx={(theme) => ({
          width: "100%",
          [theme.breakpoints.up("md")]: {
            width: 300,
          },
        })}
        loading={isFetching}
        loadingText={
          <Typography color={PaletteColors.TEXT}>Loading...</Typography>
        }
        getOptionKey={(option) => option.id}
        onChange={(_, option) =>
          option && onSelectLocation({ lat: option.lat, lon: option.lon })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => getLocationQuery(e.currentTarget.value)}
            label="Location"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: PaletteColors.SECONDARY,
                  borderWidth: "1.5px",
                },
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: PaletteColors.SECONDARY_DARK,
                    borderWidth: "3px",
                  },
                },
                "&:hover:not(.Mui-focused)": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: PaletteColors.SECONDARY_DARK,
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: PaletteColors.TEXT,
                  "&.Mui-focused": {
                    color: PaletteColors.SECONDARY,
                  },
                },
              },
              "& .MuiFormLabel-root": {
                color: PaletteColors.TEXT,
              },
            }}
          />
        )}
      />
      {isError && <GenericErrorMessage />}
    </>
  );
};

export default SearchInput;
