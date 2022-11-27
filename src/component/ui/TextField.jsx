import { TextField, styled } from "@mui/material";
import { PRIMARY } from "../../style/colors/Colors";

 const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: PRIMARY.secondary,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: PRIMARY.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: PRIMARY.main,
    },
    "& input": {
      color: PRIMARY.secondary,
    },
  },
});

export default CustomTextField
