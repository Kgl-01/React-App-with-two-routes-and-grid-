import { connect } from "react-redux";
import SimpleDynamicColsGrid from "../../Components/dynamicColumn.component";

const GridPage = ({ dataFetcher }) => {
  return (
    <div className="grid-component">
      <SimpleDynamicColsGrid dataFetcher={dataFetcher} />
    </div>
  );
};

const mapStateToProps = (state) => ({ dataFetcher: state.data.dataFetcher });

export default connect(mapStateToProps)(GridPage);
