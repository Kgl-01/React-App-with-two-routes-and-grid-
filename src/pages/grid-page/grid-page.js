import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";

const GridPage = ({ dataFetcher }) => {
  const [data, setData] = useState();

  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);

  const FetchData = async () => {
    const req = await fetch(dataFetcher);
    const res = await req.json();
    setData(res);
    console.log(res);
  };

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  useEffect(() => {
    FetchData();
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

const mapStateToProps = (state) => ({ dataFetcher: state.data.dataFetcher });

export default connect(mapStateToProps)(GridPage);
