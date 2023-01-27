import { useEffect, useState } from "react";
import "./form.styles.css";

import { useNavigate } from "react-router-dom";

const Form = () => {
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "user-info", text: "USER-INFO" },
  ];
  const [selected, setSelected] = useState(options[0].text);

  const navigate = useNavigate();
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setSelected(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    setSelected(options[0].text);
  };

  //Tried completing the assignment but failed due to slow system

  return (
    <div className="form-page">
      <div className="form-input">
        <label className="label">Select the Data</label>
        <select className="drop-down">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <button
        className="fetch-data"
        onSubmit={onSubmit}
        onClick={() => navigate("/grid")}
      >
        Fetch data
      </button>
    </div>
  );
};

export default Form;
