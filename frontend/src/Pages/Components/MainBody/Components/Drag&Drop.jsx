import { Flex } from "antd";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import UploadIcon from "../../../../Assets/Icons/UploadIcon.svg";
import "../../../index.css";

const fileTypes = ["JPG", "PNG", "GIF"];

const DragDropImage = React.memo(({ onFileChange, className, file }) => {
  const handleFileChange = (files) => {
    onFileChange(files);
  };
  
  return (
    <FileUploader
      handleChange={handleFileChange}
      name="file"
      types={fileTypes}
      classes={`drag-drop flex justify-center h-64 p-12 mb-2 ${className}`}
    >
      <Flex vertical justify="center" align="center">
        {!file ? (
         <>
          <img src={UploadIcon} alt="Upload Icon" className="w-8 mb-3" />
          <p className="text-base">
            Drag your image here, or click to <strong>Browse</strong>
          </p>
          </>
        ) : (
          <img src={URL.createObjectURL(file)} alt="User Image here" className="h-56 "/>
        )}
      </Flex>
    </FileUploader>
  );
});

export default DragDropImage;
