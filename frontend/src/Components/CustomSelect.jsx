import { Select } from "antd";

import "./index.css";

const CustomSelect = ({ className = "", onChange, options }) => {
  return (
    <Select
      className={`hr-select  ${className}`}
      onChange={onChange}
      options={options}
      defaultValue={options[0]}
    />
  );
};

export default CustomSelect;
