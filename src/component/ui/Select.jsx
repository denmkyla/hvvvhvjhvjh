import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const CustomSelect = ({ label, item, id, name, req }) => {
  return (
    <FormControl fullWidth size="small" required={req}>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id={id}
        name={name}
        label={label}
      >
        <MenuItem value="">
          <em>Отмена</em>
        </MenuItem>
        {item.map((Item, index) => (
          <MenuItem key={index} value={Item.name}>
            {Item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
