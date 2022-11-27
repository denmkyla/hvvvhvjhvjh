import React from "react";
import {
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
const CustomDataGrid = ({ rows, columns,pageSize,setPageSize }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      disableSelectionOnClick
      rowsPerPageOptions={[5, 10, 25, 50]}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      localeText={{
        toolbarColumns: "Столбцы",
        toolbarDensity: "Плотность",
        toolbarExport: "Экспорт",
        toolbarFilters: "Фильтр",
        toolbarDensityStandard: "Стандарт",
        toolbarDensityCompact: "Компакт",
        toolbarDensityComfortable: "Комфорт",
        toolbarExportPrint: "Печать",
        toolbarExportCSV: "Сохранить в формате CSV",
      }}
      components={{
        Toolbar: GridToolbar,
      }}
      componentsProps={{
        toolbar: { printOptions: { hideToolbar: true, hideFooter: true } },
        panel: {
          sx: {
            "& .MuiTypography-root": {
              color: "red",
            },
            "& .MuiButton-root": {
              color: "red",
            },
          },
        },
      }}
      pagination
    ></DataGrid>
  );
};

export default CustomDataGrid;