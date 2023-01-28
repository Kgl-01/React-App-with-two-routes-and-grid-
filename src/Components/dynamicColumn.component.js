const DynamicColsGrid = ({ dataFetcher }) => {
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([]);

  const fetchData = async () => {
    const req = await fetch(dataFetcher);
    const res = await req.json();
    const keys = Object.keys(res[0]);
    let jsonColDefs = keys.map((key) => {
      return { field: key };
    });
    setColDefs(jsonColDefs);
    setRowData(res);
    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        defaultColDef={{ sortable: true, filter: true }}
        pagination={true}
        rowData={rowData}
        columnDefs={colDefs}
      ></AgGridReact>
    </div>
  );
};

export default DynamicColsGrid;
