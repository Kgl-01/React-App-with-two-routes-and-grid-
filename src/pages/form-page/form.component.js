import { useEffect, useState } from "react";
import "./form.styles.css";
import { connect } from "react-redux";
import { dataUrl } from "../../redux/data-redux/data.action";
import { useNavigate } from "react-router-dom";

const Form = ({ dataUrl }) => {
  const url = {
    users: "https://hp-api.onrender.com/api/characters",
    carsInfo: "https://www.ag-grid.com/example-assets/row-data.json",
    olympicWinners:
      "https://www.ag-grid.com/example-assets/olympic-winners.json",
  };

  const { users, carsInfo, olympicWinners } = url;

  const options = [
    { value: "", text: "--Choose an option--" },
    { value: `${users}`, text: "USERS INFO" },
    { value: `${carsInfo}`, text: "CARS INFO" },
    { value: `${olympicWinners}`, text: "OLYMPIC WINNERS" },
  ];
  const [selected, setSelected] = useState(options[0].text);

  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);
    dataUrl(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSelected(options[0].text);
  };

  return (
    <div className="selection-form">
      <form onSubmit={onSubmit}>
        <label className="title">Select the data</label>
        <select className="drop-down" onChange={handleChange}>
          {options.map((option) => (
            <option
              key={option.text}
              className="drop-down-options"
              value={option.value}
            >
              {option.text}
            </option>
          ))}
        </select>
        <input
          type="button"
          className="submit"
          onClick={
            selected
              ? () => {
                  navigate("/grid");
                }
              : navigate(-1)
          }
          value="SUBMIT"
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dataUrl: (url) => dispatch(dataUrl(url)),
});

export default connect(null, mapDispatchToProps)(Form);
