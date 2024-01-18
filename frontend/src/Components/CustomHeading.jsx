import React from "react";
import { Typography } from "antd";

import "./index.css";

const { Title } = Typography;

const CustomHeading = ({ level = 1, title = "", className = "" }) => (
  <Title className={`heading ${className}`} level={level}>
    {title}
  </Title>
);
export default CustomHeading;
