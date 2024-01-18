import { Button } from "antd";

import "./index.css";

const CustomButton = ({ title = "", className = "", onClick, icon, htmlType="", disabled, loading=""}) => {
  return (
    <Button
      className={`hr-btn  ${className}`}
      onClick={onClick}
      icon={icon}
      htmlType={htmlType}
      disabled={disabled}
      loading={loading}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
