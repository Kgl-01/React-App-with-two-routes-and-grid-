import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./grid-page.styles.scss";
import SimpleDynamicColsGrid from "../../Components/dynamicColumn.component";

const GridPage = ({ dataFetcher }) => {
  return (
    <div className="grid-component">
      <div className="go-back">
        <NavLink to="/"> BACK TO HOMEPAGE</NavLink>
      </div>
      <SimpleDynamicColsGrid dataFetcher={dataFetcher} />
    </div>
  );
};

const mapStateToProps = (state) => ({ dataFetcher: state.data.dataFetcher });

export default connect(mapStateToProps)(GridPage);
