import { Flex } from "antd";
import { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";

import CustomButton from "../../../../Components/CustomButton";


const CopyCaption = ({ isCaptionGenerated, onClick, caption,isLoading }) => {
  const [btnText, setBtnText] = useState("Copy");
  const copyCaption = () => {
    setBtnText("Caption Copied");
    navigator.clipboard.writeText(caption);
    setTimeout(() => {
      setBtnText("Copy");
    }, 1000);
  };
  return (
    <Flex
      className="h-16 border custom-border w-full pl-4 pr-4 "
      align="center"
      justify="space-between"
    >
      <p>{caption}</p>
      <div className="flex justify-center items-center">
        <CustomButton
          onClick={copyCaption}
          title={btnText}
          className="hr-btn-transperent mr-2"
          disabled={isCaptionGenerated}
          icon={btnText != "Copy" ? <CheckOutlined /> : ""}
        />
        <CustomButton
          onClick={onClick}
          title={isLoading ? "Regenerating Caption": "Regenrate Caption"}
          className="mr-2"
          disabled={isCaptionGenerated}
          loading={isLoading}
        />
      </div>
    </Flex>
  );
};
export default CopyCaption;
