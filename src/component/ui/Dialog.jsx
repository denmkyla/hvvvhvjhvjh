import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { CustomButton, CustomTextField } from "../../component";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import { ClassNames } from "@emotion/react";
const CustomDialog = ({ title, open, setOpen, children }) => {
  const { roles } = useSelector((state) => state.roles);
  return (
    <Dialog open={open} onClose={setOpen} maxWidth="xl">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Box width="100%" component="form" validate="true" sx={{ mt: 1 }}>
          <Box display="flex" flexDirection="row" gap="10px">
            <Box
              width="500px"
              minWidth="400px"
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              <CustomTextField
                required
                fullWidth
                size="small"
                id="name"
                label="Имя"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <CustomTextField
                required
                fullWidth
                size="small"
                name="surname"
                label="Фамилия"
                type="text"
                id="surname"
                autoComplete="surname"
              />
              <CustomTextField
                required
                fullWidth
                size="small"
                name="job"
                label="Должность"
                type="text"
                id="job"
                autoComplete="job"
              />
              <FormControl fullWidth size="small" required>
                <InputLabel id="demo-simple-select-helper-label">
                  Роль *
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Роль *"
                >
                  <MenuItem value="">
                    <em>Отмена</em>
                  </MenuItem>
                  {roles.map((Item, index) => (
                    <MenuItem key={index} value={Item.name}>
                      {Item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              width="500px"
              minWidth="400px"
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              <CustomButton type="submit" fullWidth endIcon={<LoginIcon />}>
                Войти
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
