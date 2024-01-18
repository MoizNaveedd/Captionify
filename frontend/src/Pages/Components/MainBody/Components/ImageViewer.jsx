import {Flex} from "antd";

import ImageIcon from "../../../../Assets/Icons/ImageIcon.svg"

const ImageViewer = ({ image, className }) => {
  console.log("The image is ", image);
  return (
    <div className={`w-full image-viewer flex items-center justify-center ${className}`}>
      <Flex vertical justify="center" align="center">
        <img src={ImageIcon} alt="Image Icon" className="w-8 mb-2" />
        <p className="text-base">Upload an image to see the caption</p>
      </Flex>
    </div>
  );
};

export default ImageViewer;
