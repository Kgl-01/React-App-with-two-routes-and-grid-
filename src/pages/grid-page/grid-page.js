import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";

const GridPage = ({ data }) => {
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  useState(() => {
    setColumnDefs(data.map((info) => Object.keys[info]));
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: "100vh" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
      />
    </div>
  );
};

const mapStateToProps = ({ data: { data } }) => ({ data });

export default connect(mapStateToProps)(GridPage);
