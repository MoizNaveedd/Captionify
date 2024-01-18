import { v4 } from "uuid";
import imageDb from "../../../../../config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const ImageUploader = async (file) => {
  try {
    const imageRef = ref(imageDb, `files/${v4()}`);
    const snapshot = await uploadBytes(imageRef, file);
    
    const downloadURL = await getDownloadURL(snapshot.ref);
    // console.log("This is the url: ", downloadURL);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading or getting download URL:", error);
    return null;
  }
};
