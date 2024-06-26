import { Autocomplete, TextField, Typography } from "@mui/material";
import { PaletteColors } from "../../theme/palette";
import useCitiesQuery from "../../api/hooks/useCitiesQuery";

const SearchInput: React.FC = () => {
  const { setSearchText, listOptions, isFetching, isError } = useCitiesQuery();

  return (
    <>
      <Autocomplete
        id="city-input"
        autoComplete
        options={listOptions}
        sx={{ width: 300 }}
        loading={isFetching}
        loadingText={
          <Typography color={PaletteColors.TEXT}>Loading...</Typography>
        }
        getOptionKey={(option: any) => option.id}
        onChange={(_, option) => console.log(option)}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => setSearchText(e.currentTarget.value)}
            label="City"
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
      {isError && (
        <Typography mt={2} color={PaletteColors.WARNING} variant="body1">
          An error occurred, please retry
        </Typography>
      )}
    </>
  );
};

export default SearchInput;
