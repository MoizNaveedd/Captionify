import { useState, useEffect } from "react";
import { Flex, Form, Row } from "antd";

import CopyCaption from "./Components/CopyCaption";
import DragDropImage from "./Components/Drag&Drop";
import shareIcon from "../../../Assets/Icons/ShareIcon.svg";
import CustomButton from "../../../Components/CustomButton";
import CustomSelect from "../../../Components/CustomSelect";
import CustomHeading from "../../../Components/CustomHeading";
import coloredImage from "../../../Assets/Icons/ColoredImage.svg";
import { VALIDATION } from "../../../Constants/Validations";
import { ImageUploader } from "./Helper/BodyFunction";
import { generateCaption } from "../../../Apis";

const vibeOptions = [
  { value: "", label: "Select a Vibe" },
  { value: "Happy", label: "😄 Happy" },
  { value: "Joke", label: "😆 Joke" },
  { value: "Funny", label: "😂 Funny" },
  { value: "Narру", label: "😊 Нарру" },
  { value: "Serious", label: "😐 Serious" },
  { value: "Sad", label: "😢 Sad" },
  { value: "Angry", label: "😡 Angry" },
  { value: "Ecstatic", label: "😁 Ecstatic" },
  { value: "Curious", label: "🤔 Curious" },
  { value: "Informative", label: "💡 Informative" },
  { value: "Cute", label: "🥺 Cute" },
  { value: "Cool", label: "😎 Cool" },
  { value: "Controversial", label: "🤨 Controversial" },
];
const languageOptions = [
  { value: "", label: "Select a Language" },
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "mandarin", label: "Mandarin Chinese" },
  { value: "hindi", label: "Hindi" },
  { value: "arabic", label: "Arabic" },
  { value: "portuguese", label: "Portuguese" },
  { value: "bengali", label: "Bengali" },
  { value: "russian", label: "Russian" },
  { value: "urdu", label: "Urdu" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "japanese", label: "Japanese" },
  { value: "swahili", label: "Swahili" },
  { value: "punjabi", label: "Punjabi" },
  { value: "turkish", label: "Turkish" },
  { value: "italian", label: "Italian" },
  { value: "thai", label: "Thai" },
  { value: "korean", label: "Korean" },
  { value: "vietnamese", label: "Vietnamese" },
  { value: "dutch", label: "Dutch" },
];
const btnTexts=["Please Wait...", "This may take a while...", "Generating a caption","Generating a caption"];
const payload = {};
const MainBody = () => {
  const [isCaptionGenerated, setIsCaptionGenerated] = useState(false);
  const [form] = Form.useForm();
  const [caption, setCaption]=useState("...");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenrateLoading, setIsRegenrateLoading] = useState(false);
  const [btnText, setBtnText] = useState("Generating a Caption")

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await ImageUploader(values.image);
      if (response) {
        (payload.url = response),
          (payload.vibe = values.vibe),
          (payload.language = values.language);
          let generatedCaption= await generateCaption(payload);

          setCaption(generatedCaption.replace(/"/g, ''))
          setIsLoading(false);
          setIsCaptionGenerated(true);
      }
    } catch (error) {
      console.error("Error in ImageUploader:", error);
    }
  };

  async function regenerateCaption(){
    setIsRegenrateLoading(true);
    try{
      let generatedCaption= await generateCaption(payload);
      setCaption(generatedCaption.replace(/"/g, ''))
      setIsLoading(false);
      setIsRegenrateLoading(false);
  } catch (error) {
    console.error("Error in ImageUploader:", error);
  }

  }
  const handleImageChange = (file) => {
    setFile(file);
    form.setFieldsValue({ image: file });
  };

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      // Update the current language based on the array
      setBtnText(btnTexts[index]);

      // Move to the next language in the array
      index = (index+1 ) % btnTexts.length;
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [isLoading]);

  return (
    <Row className="theme-bg-color w-full h-full pb-8 pl-40 pr-40">
      <Flex align="center" justify="space-between" className="w-full ml-1 mr-1">
        <div className="flex flex-row items-center">
          <img src={coloredImage} alt="colored image" className="mr-3" />
          <CustomHeading
            title="Image Caption Generator"
            level={3}
            className="mt-3"
          />
        </div>
        <div>
          <CustomButton
            title="Share"
            onClick={() => {}}
            icon={<img src={shareIcon} alt="Share Icon" />}
            className={"hr-btn-transperent"}
          />
        </div>
      </Flex>
      <Form className="w-full mt-3" form={form} onFinish={onFinish}>
        <Form.Item
          name="image"
          valuePropName="file"
          rules={VALIDATION.REQUIRED_IMAGE}
          className="mb-12"
        >
          <DragDropImage onFileChange={handleImageChange} file={file} />
        </Form.Item>
        <Form.Item name="vibe" rules={VALIDATION.REQUIRED_VIBE}>
          <CustomSelect options={vibeOptions} className="w-full h-12" />
        </Form.Item>
        <Form.Item name="language" rules={VALIDATION.REQUIRED_LANGUAGE}>
          <CustomSelect
            onChange={() => {}}
            options={languageOptions}
            className="w-full h-12"
          />
        </Form.Item>
        {!isCaptionGenerated ? (
          <Form.Item>
            <CustomButton
              title={isLoading ? `${btnText}` : "Generate Caption"}
              className="w-full rounded-sm flex justify-center items-center text-lg h-12 mb-2"
              onClick={() => {}}
              htmlType="submit"
              loading={isLoading}
            />
          </Form.Item>
        ) : (
          <CustomButton
            title="Generate a new Caption"
            className="w-full rounded-sm flex justify-center items-center text-lg h-12 mb-2"
            onClick={() => {
              form.resetFields();
              setCaption("...");
              setIsCaptionGenerated(false);
            }}
          />
        )}
      </Form>
      <CopyCaption
        isCaptionGenerated={!isCaptionGenerated}
        onClick={regenerateCaption}
        caption={caption}
        isLoading={isRegenrateLoading}
      />
    </Row>
  );
};
export default MainBody;
