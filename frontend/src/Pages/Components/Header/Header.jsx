import { Flex } from "antd";

import CaptionIcon from "../../../Assets/Icons/CaptionIcon.png";
import MenuIcon from "../../../Assets/Icons/MenuIcon.svg";
import Logo from "../../../Assets/Icons/logo.svg";
import CustomButton from "../../../Components/CustomButton";
import CustomHeading from "../../../Components/CustomHeading";

const Header = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="theme-bg-color w-full pl-16  pr-16  mb-2"
    >
      <div className="flex  flex-row items-center ">
        <img src={Logo} alt="Captionify Logo" className="mr-2" />
        <CustomHeading level={2} title={"Captionify"} className="mt-4" />
      </div>
      <Flex align="center" justify="space-between">
        <img src={MenuIcon} alt="Menu Icon"  className="mr-2" />
        <p className="mr-8">Menu</p>

        <CustomButton
          title="Caption"
          onClick={() => {}}
          icon={<img src={CaptionIcon} alt="Caption Icon" />}
        />
      </Flex>
      
    </Flex>
  );
};

export default Header;
