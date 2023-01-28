import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";

const SimpleDynamicColsGrid = ({ dataFetcher }) => {
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([]);

  useEffect(() => {
    fetch(dataFetcher)
      .then((result) => result.json())
      .then((data) => {
        const keys = Object.keys(data[0]);
        let jsonColDefs = keys.map((key) => {
          return { field: key };
        });
        setColDefs(jsonColDefs);
        setRowData(data);
      });
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "100vh", width: "100vw" }}
    >
      <AgGridReact
        defaultColDef={{
          sortable: true,
          filter: true,
        }}
        pagination={true}
        rowData={rowData}
        rowSelection="multiple"
        columnDefs={colDefs}
        animateRows={true}
      ></AgGridReact>
    </div>
  );
};

export default SimpleDynamicColsGrid;
