import { Button, styled } from "@mui/material";
import { PRIMARY } from "../../style/colors/Colors";

const CustomButton = styled(Button)({
  background: PRIMARY.main,
  border: `1px solid ${PRIMARY.main}`,
  color: "white",
  "&:hover": {
    background: "#fff",
    color: PRIMARY.main,
    transition: "all 1s ease",
    border: `1px solid ${PRIMARY.main}`,
  },
});

export default CustomButton;
