import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { PRIMARY } from "../../style/colors/Colors";

const CustomRadioButton = ({ label, item }) => {
  return (
    <FormControl size="small" required>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        id="gender"

      >
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{ color: PRIMARY.secondary, marginTop: 1, marginRight: 2 }}
        >
          {label}
        </FormLabel>
        {item.map((Item, index) => (
          <FormControlLabel
            key={index}
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: PRIMARY.main,
                  },
                }}
              />
            }
            value={Item.name}
            label={Item.name}
          ></FormControlLabel>
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioButton;
